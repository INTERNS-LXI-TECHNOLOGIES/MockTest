package com.lxisoft.web.rest;

import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.lxisoft.domain.AttendedExam;
import com.lxisoft.domain.AttendedOption;
import com.lxisoft.domain.CustError;
import com.lxisoft.domain.Exam;
import com.lxisoft.domain.QstnOption;
import com.lxisoft.domain.Question;
import com.lxisoft.domain.User;
import com.lxisoft.domain.UserExtra;
import com.lxisoft.domain.Authority;
import com.lxisoft.model.AttendedExamBean;
import com.lxisoft.model.AttendedExamListModel;
import com.lxisoft.model.AttendedExamModel;
import com.lxisoft.model.ExamModel;
import com.lxisoft.model.UserDashBoard;
import com.lxisoft.repository.UserExtraRepository;
import com.lxisoft.service.AttendedExamBeanService;
import com.lxisoft.service.AttendedExamService;
import com.lxisoft.service.AttendedOptionService;
import com.lxisoft.service.ExamService;
import com.lxisoft.service.JasperService;
import com.lxisoft.service.OptionService;
import com.lxisoft.service.QuestionService;
import com.lxisoft.service.RestApiService;
import com.lxisoft.service.UserExtraService;
import com.lxisoft.service.UserService;
import com.lxisoft.service.dto.UserDTO;

import io.github.jhipster.web.util.ResponseUtil;
import net.sf.jasperreports.engine.JRException;

/**
 * MocktestControllerResource controller
 */
@RestController
@RequestMapping("/api/mocktest-controller")
public class MocktestControllerResource {

    private final Logger log = LoggerFactory.getLogger(MocktestControllerResource.class);
    private static String examValid="0";
    
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
	@Autowired
	private RestApiService restServ;
	
	  @Autowired 
	    UserResource userRes;
	
	@GetMapping ("/app/allQuestions")
	public List<Question> getAllQuestions() 
	{
		return questService.findAll();
	}
	
	@GetMapping ("/app/question/{id}")
	public Question getQuestion(@PathVariable Long id) 
	{
		return questService.findById(id);
	}
	
	@DeleteMapping ("/app/question/{id}")
	public void deleteQuestion(@PathVariable Long id) 
	{
		questService.delete(questService.findById(id));
	}
	
	@PostMapping ("/app/question")
	public void createQuestion(@RequestBody Question question) 
	{
		log.debug("saving question {}"+question);
		Set<QstnOption> options=question.getQstnOptions();
		Iterator<QstnOption> i = options.iterator(); 
		optService.saveQstnOptn(question,i.next().getOption(),i.next().getOption(),i.next().getOption());
		questService.save(question);
	}
	
	/**
	    * saving exam details 
	    * @param Exam,bindingresult,hour,minute
	    * @return create_exam
	    */
		@PostMapping ("/create_exam")
		public boolean save_exam(@RequestBody Exam exam,Model model)
		{
			exam.setIsActive(false);
			log.debug("saving exam {}"+exam.getName());
			boolean flag=examService.save_exam(exam);
			return flag;
		}

	/**
     * update exam
     * @param exam
     * @return activateExam
     */
	@PutMapping("/update_exam")
	public void updateExam(@RequestBody Exam exam) 
	{
		log.debug("REST request to update Exam : {}", exam);
		examService.update(exam);
		// boolean flag=examService.update(exam);
		// 	return flag;
	
	}

	
	 @GetMapping("/all")
//	   @CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
	    public ResponseEntity<List<UserDTO>> getAll() {
	    	Pageable pageable=null;
	    	return userRes.getAllUsers(pageable);
	        
	    }

    @GetMapping("/users/{id}")
    public ResponseEntity<UserDTO> getUser(@PathVariable long id) {
        log.debug("REST request to get User : {}", id);
       // Long userid=Long.parseLong(id);
        return ResponseUtil.wrapOrNotFound(
            userService.getUserWithAuthorities(id)
                .map(UserDTO::new));
    }
    

	
	/**
    * view of user_dashboard
    */
    @GetMapping("/user_dashboard/{login}")
    public UserDashBoard userDashboard( @PathVariable String login) {
    	UserDashBoard board=new UserDashBoard();
//		model.addAttribute("username",SecurityContextHolder.getContext().getAuthentication().getName());
		UserExtra userExtra=restServ.currentUserExtra(login);
		log.debug("email of user "+userExtra.getUser().getEmail());
		board.setCurrentUser(userExtra);
		board.setUserId(userExtra.getId());
		List<AttendedExam> attendExamList=attendExamService.findAllByUserExtra(userExtra);
		List<AttendedExamModel> examlist=restServ.attendedExamDetails(attendExamList);
		board.setAttendedExamList(examlist);
		return board;

	
	}
    
    /**
    * view of user_dashboard
    */
    @GetMapping("/user_passed_exams/{login}")
    public List<AttendedExam> userPassedDetails(@PathVariable String login) {
    	UserExtra userExtra=restServ.currentUserExtra(login);
		log.debug("email of user "+userExtra.getUser().getEmail());
		List<AttendedExam> attendExamList=attendExamService.findAllByUserExtra(userExtra);
		List<AttendedExam> passExams= new ArrayList<AttendedExam>();
		for(AttendedExam atnd:attendExamList)
		{
			if (atnd.isResult()==true)
			{
				passExams.add(atnd);
			}
		}
		List<AttendedExamModel> examlist=restServ.attendedExamDetails(attendExamList);
	return passExams;

	
	} 
    
    
    /** 
     * get all exam from database
     */
    @GetMapping("/allExamDetails")
    public List<Exam>getAllExamDetails() {
    	return examService.findAll();
    }
    
    /**
     * select an exam from list of exam for activate or deactivate or view exam details
     * @param examId
   
     */
	@GetMapping ("/getSelectedExamDetails/{eId}")
	public ExamModel selectExam(@PathVariable String eId) throws Exception
	{
		ExamModel model=new ExamModel();
		Exam exam=examService.findById(eId);
		model.setExam(exam);
		model.setQuestions(exam.getQuestions());
		return model;
	}
	
    /** 
     * get all exam from database
     * @return 
     */
    @GetMapping("/getAllAttendedExamDetails/{id}")
    public AttendedExamListModel getAllAttendedExamDetails(@PathVariable String id)
    {
    	AttendedExamListModel model=new AttendedExamListModel();
    	Exam exam=examService.findById(id);
    	model.setExam(exam);
    //	List<User> users=extraService.findAll();
    	List<AttendedExam> attendList=attendExamService.findAllByExam(exam);
    	List<AttendedExamModel> examlist=restServ.attendedExamDetails(attendList);
    //	model.setUsers(restServ.getAttendedUserDetails(users,attendList));
    	model.setAttendList(examlist);
		
		return model;
    }
    /**
	 * GET  /pdf : get the pdf exam report using javabean.
	 * @return the byte[]
	 * @throws Exception 
	 */
	@GetMapping("/examDetailsPDF/{Exam_id}")
	public ResponseEntity<byte[]> getReportAsPdfUsingDataBase(@PathVariable String Exam_id) throws Exception 
	{
		log.debug("REST request to get a pdf");
		List<AttendedExamBean>list=beanService.getAttendedExamDataBean(Exam_id);
	    byte[] pdfContents = null;
	   try
	   {
	
		   pdfContents=jasperServ.getReportAsPdfUsingJavaBeans(list);
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
	
	/**
	 * get Active exams from database
	 * @return user_active_exams.
	 */
	@GetMapping ("/activeExams")
	public Set<Exam> activeExams()
	{
		Set<Exam> active_exams=examService.findActiveExams();
		return active_exams;
	}
	
	 @GetMapping("/attendedExam/{id}")
	    public AttendedExam attendedExamById(@PathVariable String id)
	    {
	    	log.debug("get attended exam with id-"+id);
	    	return attendExamService.findById(id);
	    }
	
	 @GetMapping("/exam/{id}")
    public Exam getExamById(@PathVariable String id) {
    	return examService.findById(id);
    }
	 
	 /**
		 * GET  /pdf : get the pdf of exam Certificate using database.
		 * @param examid
		 * @return the byte[]
		 * @throws Exception 
		 */
		@GetMapping("/examCertificate/{id}")
		public ResponseEntity<byte[]>  getPdf(@PathVariable String id)
		{
		long examid=Long.parseLong(id);
			byte[] pdfContents=null;
			try {
				pdfContents=jasperServ.getReportAsPdfUsingDatabase(examid);
			} catch (JRException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			HttpHeaders headers=new HttpHeaders();
			headers.setContentType(MediaType.parseMediaType("application/pdf"));
			String fileName="Certificate.pdf";
			headers.add("content dis-position","attachment: filename="+fileName);
			ResponseEntity<byte[]> response=new ResponseEntity<byte[]>(pdfContents,headers,HttpStatus.OK);
			return response;
		}
		/**
	     * save each attended option in exam
	     */
		@PostMapping("/save_answers/{eId}/{answers}")
		public AttendedExam save_option(@PathVariable String eId,@PathVariable List<String> answers,@RequestBody UserExtra user)
		{
			log.debug("method save called..");
			Exam exam = examService.findById(eId);
			AttendedExam attendedExam=new AttendedExam(ZonedDateTime.now(),exam,user);
			attendExamService.save(attendedExam);
			List<Question> list=questService.getAllQuestionsFromExam(exam);
		//Long aExamId=attendedExam.getId();
			for(int i=0;i<=list.size()-1;i++)
			{
			// attendOptSer.attendOptionInitial(list.get(i),attendedExam);
			  for(int j=0;j<=answers.size()-1;j++)
			  {
				  if (i==j) {
				  log.debug("attend option string array:..."+answers.get(j));
				 attendOptSer.attendOptionUpdate(answers.get(j),list.get(i),attendedExam);}
			  }
			}
			int total = exam.getCount();
			int score=attendOptSer.examScore(attendedExam);
			attendedExam = attendExamService.attend(attendedExam, score, total);
			log.debug("attended exam ready to save:- " + attendedExam);
			attendExamService.save(attendedExam);
			return attendedExam;
		}
		

}