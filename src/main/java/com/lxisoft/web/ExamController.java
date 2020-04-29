package com.lxisoft.web;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.io.Reader;
import java.time.Instant;
import java.time.LocalDate;

import org.springframework.web.multipart.MultipartFile;
import java.time.LocalTime;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.ListIterator;
import java.util.Set;
import java.util.stream.Collectors;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.lxisoft.domain.AttendedExam;
import com.lxisoft.domain.AttendedOption;
import com.lxisoft.domain.CustError;
import com.lxisoft.domain.Exam;
import com.lxisoft.domain.QstnOption;
import com.lxisoft.domain.Question;
import com.lxisoft.domain.User;
import com.lxisoft.domain.UserExtra;
import com.lxisoft.model.AttendedExamBean;
import com.lxisoft.repository.UserRepository;
import com.lxisoft.service.AttendedExamBeanService;
import com.lxisoft.service.AttendedExamService;
import com.lxisoft.service.AttendedOptionService;
import com.lxisoft.service.ExamService;
import com.lxisoft.service.JasperService;
import com.lxisoft.service.OptionService;
import com.lxisoft.service.QuestionService;
import com.lxisoft.service.UserExtraService;
import com.lxisoft.service.UserService;
import com.lxisoft.service.dto.UserDTO;

import net.sf.jasperreports.data.http.RequestMethod;
import net.sf.jasperreports.engine.JRException;

/**
 * Mocktest Exam controller
 */
@Controller
public class ExamController 
{
	private final Logger log = LoggerFactory.getLogger(ExamController.class);
    
    
	@Autowired
	private AttendedExamService attendExamService;
	
	@Autowired
	private AttendedExamBeanService beanService;
	@Autowired
	private JasperService jasperServ;
	@Autowired
	private OptionService optService;
	@Autowired
	private ExamService examService;
	@Autowired
	private UserService userService;
	@Autowired
	private QuestionService questService;
	@Autowired
	private	UserExtraService extraService;
	@Autowired
	private AttendedOptionService attendOptSer;
	
	@RequestMapping(value="/")
	public String index()
	{
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		boolean isAdmin=authentication.getAuthorities().stream().anyMatch(r -> r.getAuthority().equals("ROLE_ADMIN"));
		boolean isUser=authentication.getAuthorities().stream().anyMatch(r -> r.getAuthority().equals("ROLE_USER"));
		if(isAdmin)
			return "adminpage";
		else if(isUser)
			return "redirect:/user_dashboard";
		else 
			return "redirect:/login";
	}
	
	@RequestMapping(value="/login")
	public String indexpage()
	{
		return "index";
	}

	@RequestMapping("/register")
	public String register(Model model)
	{
		model.addAttribute("user", new User());
		return "registration";
	}

	
	@RequestMapping(value="/save")  
	public String save(@Valid User user,BindingResult bindingResult)
	{  
		log.info("user name "+user.getFirstName());
		if (!bindingResult.hasErrors()) {
			extraService.save(user);  
			return  "redirect:/";
		}
		else
			return "registration";
	}  


	@RequestMapping ("/logoutpage")
	public String logout()
	{
		return "logoutpage";
	}
	
	@RequestMapping ("/activeExams")
	public String userpage(Model model)
	{
		Set<Exam> active_exams=examService.findActiveExams();
		model.addAttribute("exam_list",active_exams);
		return "user_active_exams";
	}
	
	@RequestMapping("/attended_exam_results")
	public String attended_exam_results(@RequestParam String eId, Model model)
	{
		boolean flag=examService.findByIdCheck(eId);
		if(flag==false)
		{
			CustError error=new CustError("exam id not found!!","please retry");
			model.addAttribute("error",error);
			return "error";
		}
		else {
			Exam exam=examService.findById(eId);
			model.addAttribute("users",extraService.findAll());
			model.addAttribute("exam",exam);
			model.addAttribute("attendList",attendExamService.findAllByExam(exam));
			return "attended_exams_results";
		}
	}
	
	@RequestMapping("/userexam_instruction")
	public String active_exam_info(Model model,@RequestParam String eId) 
	{
		boolean flag=examService.findByIdCheck(eId);
		if(flag==false)
		{
			CustError error=new CustError("exam id not found!!","please retry");
			model.addAttribute("error",error);
			return "error";
		}
		else {
			Exam exam=examService.findById(eId);
			model.addAttribute("exam",exam);
			model.addAttribute("exams",examService.findAll());
			return "userexam_instruction";
		}
	}

	@RequestMapping(value="/user_examStart")
	public String userview(Model model,@RequestParam String eId,@RequestParam String timerValue)
	{
		boolean flag=examService.findByIdCheck(eId);
		if(flag==false)
		{
			CustError error=new CustError("exam id not found!!","please retry");
			model.addAttribute("error",error);
			return "error";
		}
		else{
			Exam exam=examService.findById(eId);
			AttendedExam attendedExam=new AttendedExam(ZonedDateTime.now(),exam, extraService.currentUserExtra());
			attendExamService.save(attendedExam);
			Set<Question> questions=exam.getQuestions();
			for( Question q: questions)
			{
			  attendOptSer.attendOptionInitial(q,attendedExam);
			  log.debug("attended options saved null for attended exam :- "+attendedExam);
			}
			return "redirect:/user_exampage?aExamId="+attendedExam.getId()+"&eId="+eId+"&timerValue="+timerValue;
		}
	}
	
	@RequestMapping(value="/user_exampage")
	public String userNextPage(Model model,@RequestParam String aExamId,@RequestParam String eId,
			@RequestParam(name="index",required=false,defaultValue="0") String index,@RequestParam String timerValue,
			@RequestParam(name="optionid",required=false,defaultValue="0") String optionid) 
	{
		AttendedExam attendedExam=attendExamService.findById(aExamId);
		Exam exam = examService.findById(eId);
		List<Question> list=questService.getAllQuestionsFromExam(exam);
		int pos = Integer.parseInt(index);
		ListIterator<Question> lit = list.listIterator(pos);
		model.addAttribute("aExamId",aExamId);
		model.addAttribute("exam", exam);
		model.addAttribute("iterator", lit);
		model.addAttribute("index", index);
		List<AttendedOption> attendedOptions=attendOptSer.findAllByAttendedExam(attendedExam);
		model.addAttribute("attendedOptions", attendedOptions);
		model.addAttribute("timerValue",timerValue );
		int tmpTimerValue = Integer.parseInt(timerValue);
		if(tmpTimerValue==0) {
			return "redirect:/submit?eId=" + eId +"&aExamId=" +aExamId;
		}
		else
		{
			if (lit.hasNext()) 
			{
				model.addAttribute("question", lit.next());
				return "user_exampage";
			}
			else 
				return "redirect:/submit?eId=" + eId +"&aExamId=" +aExamId;
		}
	}
	
	@RequestMapping(value="/save_option")
	public String save_option(Model model,@RequestParam String aExamId,@RequestParam String eId,
		@RequestParam(required=false,defaultValue="0") String index,@RequestParam String timerValue,
		@RequestParam(name="optionid",required=false,defaultValue="0") String optionid)  
	{
		int pos=Integer.parseInt(index);
		Exam exam = examService.findById(eId);
		List<Question> list=questService.getAllQuestionsFromExam(exam);
		Question quest= list.get(pos-1);
		if(!index.equals("0"))
			attendOptSer.attendOptionUpdate(optionid,quest,attendExamService.findById(aExamId));
		return "redirect:/user_exampage?eId="+eId +"&aExamId="+aExamId +"&optionid=0&timerValue="+timerValue +"&index="+pos;
	}
	
	@RequestMapping(value="/clear_option")
	public String clear_option(Model model,@RequestParam String aExamId,@RequestParam String eId,
		@RequestParam String index,@RequestParam String timerValue,@RequestParam(required=false,defaultValue="0") String aOptId)  
	{
		if(!aOptId.equals("0"))
			attendOptSer.clearOption(aOptId);
		int pos=Integer.parseInt(index);
		if(pos!=0)
			pos=pos-1;
		return "redirect:/user_exampage?eId="+eId +"&aExamId="+aExamId +"&optionid=0&timerValue="+timerValue +"&index="+pos;
	}
	
	@RequestMapping("/submit")
	public String submit(@RequestParam String aExamId,@RequestParam String eId,Model model) 
	{
		AttendedExam attendedExam=attendExamService.findById(aExamId);
		Exam exam = examService.findById(eId);
		int total = exam.getCount();
		int score=attendOptSer.examScore(attendedExam);
		attendedExam = attendExamService.attend(attendedExam, score, total);
		log.debug("attended exam ready to save:- " + attendedExam);
		attendExamService.save(attendedExam);
		model.addAttribute("attendedExam", attendedExam);
		model.addAttribute("username", SecurityContextHolder.getContext().getAuthentication().getName());
		return "submit";
	}
	
	@RequestMapping("/exam_cancel")
	public String submit(@RequestParam String aExamId) 
	{
		attendExamService.deleteById(aExamId);
		return "redirect:/";
	}
	
	@RequestMapping("/app/create_question")
	public String question(Model model)
	{
		model.addAttribute("question",new Question());
		return "create_question";
	}


	@RequestMapping(value="/app/add_question")
	public String createExam(@Valid Question question ,BindingResult bindingResult,@RequestParam String opt1,@RequestParam String opt2,@RequestParam String opt3)
	{ 
		
		if (!bindingResult.hasErrors()) {
			questService.save(question);
		 optService.saveQstnOptn(question,opt1,opt2,opt3);
	      return "redirect:/";}
	    else return "create_question";

	}
	
	@RequestMapping("/app/delete_question")
	public String delete_question(@RequestParam(name="qId" ,required=false,defaultValue="0") List<String> qId,Model model)
	{
		log.debug("question id's for deleting -"+qId);
		if(qId.get(0).equals("0"))
		{
			CustError error=new CustError("no questions selected!!","select question and retry");
			model.addAttribute("error",error);
			return "error";
		}
		else
		{
			questService.deleteMultiple(qId);
		}
		return "redirect:/app/viewall_qstn";
	}
	
	@RequestMapping(value="/app/addmore_question")
	public String addmore( @Valid Question quest,Model model,BindingResult binding,@RequestParam String opt1,@RequestParam String opt2,@RequestParam String opt3) 
	{
		if(!binding.hasErrors()) {
			questService.save(quest);
			 optService.saveQstnOptn(quest,opt1,opt2,opt3);
			model.addAttribute("question",new Question());
		}
		return "create_question";
	}
	
	@RequestMapping(value = "/app/question_file")
	public String question_file(@RequestParam("file") MultipartFile file, Model model) throws Exception
	{
		if(!file.getContentType().equals("application/vnd.ms-excel"))
		{
			CustError error=new CustError("file is not csv!!","insert a csv file");
			model.addAttribute("error",error);
			return "error";
		}
		else if (file.isEmpty()) {
			CustError error=new CustError("file/data missing!!","insert the csv file");
			model.addAttribute("error",error);
			return "error";
        } 
		else 
		{
			int flag=questService.checkFile(file);
			if(flag==1)
			{
				CustError error=new CustError("file is not as specified","check fields and import!!!");
				model.addAttribute("error",error);
				return "error";
			}
			else
				questService.saveFile(file);
		}
		return "redirect:/";
	}
	
	@GetMapping("/app/model.csv")
    public void modelCsv(HttpServletResponse response) throws IOException {
        response.setContentType("text/csv");
        PrintWriter writer=response.getWriter();
        writer.write("question, level, option1, option2, option3\n");
    }
	
	@RequestMapping ("/app/create_exam")
	public String create_exam(Model model)
	{
		model.addAttribute("exam",new Exam());	 
		return "create_exam";
	}

	@RequestMapping ("/app/save_exam")
	public String save_exam(@Valid Exam exam,BindingResult bindingResult,@RequestParam String hour,@RequestParam String minute,Model model)
	{
		if(!bindingResult.hasErrors()) {
			exam.setIsActive(false);
			String time=hour+":"+minute;
			exam.setTime(time);
			boolean flag=examService.save_exam(exam);
			if(flag==false)
			{
				CustError error=new CustError("less questions present in db!!","please verify and retry");
				model.addAttribute("error",error);
				return "error";
			}
			 return "redirect:/";
		}
		
		 else return "create_exam";
	}
	
	@RequestMapping ("/current_exams")
	public String current_exams(Model model)
	{
		model.addAttribute("exams",examService.findAll());
		return "current_exams";
	}
	
	@RequestMapping ("/app/selectExam")
	public String selectExam(Model model,@RequestParam String eId) throws Exception
	{
		Exam exam=examService.findById(eId);
		model.addAttribute("questions",exam.getQuestions());
		model.addAttribute("exam",exam);
		return "activateExam";
	}
	
	@RequestMapping ("/app/activate_exam")
	public String activate_exam(@RequestParam String eId) throws Exception
	{
		Exam exam=examService.findById(eId);
		if(exam.isIsActive()==true)
		{
			exam.setIsActive(false);
		}
		else {
			exam.setIsActive(true);
		}
		examService.update(exam);
		return "redirect:/app/selectExam?eId="+eId;
	}
	
	@RequestMapping ("/app/set_Answer")
	public String setAnswer(@RequestParam String opt_Id,@RequestParam String qstn_id)
	{
		Question question=questService.findById(qstn_id);
		QstnOption qstn_optn=optService.findById(opt_Id);
		if(qstn_optn.isIsAnswer()==false)
			qstn_optn.setIsAnswer(true);
		else 
			qstn_optn.setIsAnswer(false);
		questService.save(question);
		optService.save(qstn_optn);
		return "redirect:/app/viewall_qstn";
	}

	@RequestMapping ("/app/viewall_qstn")
	public String viewall_qstn(Model model) 
	{
		List<Question> questions=questService.findAll();
		model.addAttribute("questions",questions);	
		return "viewall_qstn";

	}

		@RequestMapping("/app/filter")
		public String questionFilter(Model model,@RequestParam String level)
		{
			if(!level.equalsIgnoreCase("--select--"))
			{
				 log.info("question list");
				List<Question> questions=questService.findByLevel(level);
				model.addAttribute("questions",questions);	
				 log.debug("{}", questions);
				 return "viewall_qstn";
			}
			return "redirect:/app/viewall_qstn";
			
		}
		
		@RequestMapping("/app/searchQstn")
		public String searchQuestion(Model model,@RequestParam String searchQstn)
		{
			List<Question> questions=questService.findByQstn(searchQstn);
			model.addAttribute("questions",questions);	
			return "viewall_qstn";
		}
		
		@RequestMapping ("/user_dashboard")
		public String userdashboard(Model model,@RequestParam(name="sort",required=false,defaultValue="date") String sort)
		{
			model.addAttribute("username",SecurityContextHolder.getContext().getAuthentication().getName());
			UserExtra userExtra=extraService.currentUserExtra();
			log.debug("email of user "+userExtra.getUser().getEmail());
			model.addAttribute("user",userExtra);
			model.addAttribute("userid",userExtra.getId());
			List<AttendedExam> attendExamList=attendExamService.findAllByUserExtra(userExtra);
			if(sort.equals("percent"))
			{
				Collections.sort(attendExamList,(a,a2)->{return (int)(a2.getPercentage()-a.getPercentage());});
			}
			model.addAttribute("AttendedExamList",attendExamList);
			return "user_dashboard";
		}
		
		@RequestMapping("/user_info")
		public String user_info(Model model)
		{
			model.addAttribute("users",extraService.findAll());
			return "user_info";
		}
		
		@RequestMapping("/user_details")
		public String userDetails(Model model,@RequestParam String id,@RequestParam(name="sort",required=false,defaultValue="date") String sort) throws Exception
		{
			UserExtra user=extraService.findById(id);
			model.addAttribute("user",user);
			List<AttendedExam> attendExamList=attendExamService.findAllByUserExtra(user);
			if(sort.equals("percent"))
			{
				Collections.sort(attendExamList,(a,a2)->{return (int)(a2.getPercentage()-a.getPercentage());});
			}
			model.addAttribute("AttendedExamList",attendExamList);
			return "user_details";
		}
		
		@RequestMapping("/exam_info")
		public String exam_info(Model model)
		{
			model.addAttribute("exams",examService.findAll());
			return "exam_info";
		}
		

		@RequestMapping("/exam_history")
		public String exam_history(Model model,@RequestParam String aExamId,@RequestParam String userid)
		{
//			long attend_exam_id=Long.parseLong(aExamId);
//			long user_id=Long.parseLong(userid);
			AttendedExam attendedExam=attendExamService.findById(aExamId);
			log.debug("atnd exam"+attendedExam);
			List<AttendedOption> attendedOptions=attendOptSer.findAllByAttendedExam(attendedExam);
			log.debug("atteneded options are:- "+attendedOptions);
			model.addAttribute("attendedOptions", attendedOptions);
			model.addAttribute("attendedExam", attendedExam);
//			model.addAttribute("userid",userid);
			model.addAttribute("attend_exam_id",aExamId);
			return "exam_history";
		}

		
		@RequestMapping("/exam_attended")
		public String exam_attended(@RequestParam String eId,@RequestParam(name="sort",required=false,defaultValue="date") String sort, Model model) throws Exception
		{
			Exam exam=examService.findById(eId);
			model.addAttribute("users",extraService.findAll());
			model.addAttribute("exam",exam);
			List<AttendedExam> attendList=attendExamService.findAllByExam(exam);
			if(sort.equals("percent"))
			{
				Collections.sort(attendList,(a,a2)->{return (int)(a2.getPercentage()-a.getPercentage());});
			}
			else if(sort.equals("user"))
			{
				Collections.sort(attendList,(a,a2)->{return (int)(a2.getUserExtra().getId()-a.getUserExtra().getId());});
			}
			model.addAttribute("attendList",attendList);
			return "exam_attended";
		}
		

		/**
		 * GET  /pdf : get the pdf exam report using database.
		 *  
		 * @return the byte[]
		 * @throws Exception 
		
		 */

	@RequestMapping("/examDetailsPDF")
	public ResponseEntity<byte[]> getReportAsPdfUsingDataBase(@RequestParam String Exam_id) throws Exception 
	{
		
		log.debug("REST request to get a pdf");
	   
		
		List<AttendedExamBean>list=beanService.getAttendedExamDataBean(Exam_id);
		
	    byte[] pdfContents = null;
	  
	   try
	   {
	
		   pdfContents=jasperServ.getReportAsPdfUsingJavaBeans(list);
	//		pdfContents=jasperServ.getReportAsPdfUsingDataBase(attendExam_id);
	   }catch (JRException e) {
	        e.printStackTrace();
	   }
	  
	   HttpHeaders headers=new HttpHeaders();
		headers.setContentType(MediaType.parseMediaType("application/pdf"));
		String fileName="report.pdf";
		headers.add("content dis-position","attachment: filename="+fileName);
		ResponseEntity<byte[]> response=new ResponseEntity<byte[]>(pdfContents,headers,HttpStatus.OK);
		return response;
	}
	
	@RequestMapping("/graph")

	public String graphicalAnalyzeExam(@RequestParam String Exam_id,Model model)
	{
		Exam exam=examService.findById(Exam_id);
		
		List<AttendedExam> attendList=attendExamService.findAllByExam(exam);
		List<Integer> scores=new ArrayList<Integer>();
		List<String>user=new ArrayList<String>();
		for(AttendedExam atnd:attendList)
			{
				
			user.add(atnd.getUserExtra().getUser().getFirstName());
				scores.add(atnd.getScore());
				
			}
		model.addAttribute("users",user);
		model.addAttribute("scores",scores);
		model.addAttribute("exam",exam);
		
		return "chart";
	}
	
	@RequestMapping("/userPerformance")

	public String graphicalAnalyzeUser(@RequestParam String user_id,Model model) throws Exception
	{
		UserExtra userExtra=extraService.findById(user_id);
		List<AttendedExam> attendExamList=attendExamService.findAllByUserExtra(userExtra);
		List<LocalDate>date=new ArrayList<LocalDate>();
		List<Integer> beginner_level=new ArrayList<Integer>();
		List<Integer> intermediate_level=new ArrayList<Integer>();
		List<Integer> expert_level=new ArrayList<Integer>();
		
		for(AttendedExam atnd:attendExamList)
		{
			if(atnd.getExam().getLevel().equalsIgnoreCase("beginner")) {  beginner_level.add(atnd.getScore()); }
			else if(atnd.getExam().getLevel().equalsIgnoreCase("intermediate")) {  intermediate_level.add(atnd.getScore()); }
			else { expert_level.add(atnd.getScore());}
		date.add(atnd.getDateTime().toLocalDate());
			
		}
		model.addAttribute("beginner",beginner_level);
		model.addAttribute("intermediate",intermediate_level);
		model.addAttribute("expert",expert_level);
		model.addAttribute("user",userExtra.getUser().getFirstName() +" "+ userExtra.getUser().getLastName());
		model.addAttribute("date",date);
		return "user_performance_chart";
	}

}