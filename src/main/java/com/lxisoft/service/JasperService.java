package com.lxisoft.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lxisoft.model.AttendedExamBean;

@Service
@Transactional
public class JasperService {

    private final Logger log = LoggerFactory.getLogger(JasperService.class);

    @Autowired
	DataSource dataSource;
    
    /**
     * Gets userexamReport : using database.
     * @param id 
     * @param userid 
     *			     
     * @return the byte[].
     * @throws JRException 
     * 
	 * @throws JRException. 
     */
	public byte[] getReportAsPdfUsingDataBase(long attend_exam_id, long userid) throws JRException {
log.debug("AggregateServiceImpl request to get a pdf");
		
		JasperReport jr = JasperCompileManager.compileReport("src/main/resources/report.jrxml");
		
		Map parameters=new HashMap();
		parameters.put("head","Appraisal report");
		parameters.put("id",attend_exam_id);
		parameters.put("id",userid);
			
			Connection conn = null;
			try {
				conn = dataSource.getConnection();
			} catch (SQLException e) {
				
				e.printStackTrace();
			}
			
	   JasperPrint jp = JasperFillManager.fillReport(jr, parameters, conn);
			
	   return JasperExportManager.exportReportToPdf(jp);
			

}


	public byte[] getReportAsPdfUsingJavaBeans(List<AttendedExamBean> list)throws JRException
	{
		JasperReport jr=JasperCompileManager.compileReport("src/main/resources/report.jrxml");
		JRBeanCollectionDataSource collectionDataSource=new JRBeanCollectionDataSource(list);
		
		Map < String , Object > parameters = new HashMap < String ,	Object >();
		parameters.put("list",list);
		JasperPrint jp=JasperFillManager.fillReport(jr,parameters,collectionDataSource);
		return JasperExportManager.exportReportToPdf(jp);
		
	}
}
