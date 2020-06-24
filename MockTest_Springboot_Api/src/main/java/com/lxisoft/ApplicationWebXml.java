package com.lxisoft;

import io.github.jhipster.config.DefaultProfileUtil;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;

/**
 * This is a helper Java class that provides an alternative to creating a {@code web.xml}.
 * This will be invoked only when the application is deployed to a Servlet container like Tomcat, JBoss etc.
 */
public class ApplicationWebXml extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        // set a default to use when no profile is configured.
        DefaultProfileUtil.addDefaultProfile(application.application());
        return application.sources(MockTestApp.class);
    }
    @Bean
    public Docket SwaggerConfiguration()
    {
    	// return prepared Docket Instance
    	return new Docket(DocumentationType.SWAGGER_2)
    			.select()
    			.paths(PathSelectors.ant("*/api/*"))
    			.apis(RequestHandlerSelectors.basePackage("com.lxisoft"))
    			.build()
    			.apiInfo(new ApiInfoBuilder().title("Mocktest Application API").version("1").description("mcq based application to take test").build());
    	
    }
}
