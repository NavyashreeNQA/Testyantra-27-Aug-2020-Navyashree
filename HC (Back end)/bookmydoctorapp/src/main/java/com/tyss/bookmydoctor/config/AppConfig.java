package com.tyss.bookmydoctor.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalEntityManagerFactoryBean;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@ComponentScan(basePackages = "com.tyss.bookmydoctor")
@EnableWebMvc
public class AppConfig {

	@Bean
	public LocalEntityManagerFactoryBean getEntityManagerFactoryBean() {
		LocalEntityManagerFactoryBean factory = new LocalEntityManagerFactoryBean();
		factory.setPersistenceUnitName("bookmydoctor_db");
		return factory;
	}

	@Bean
	public JpaTransactionManager getTransactionManagerBean() {
		JpaTransactionManager trans = new JpaTransactionManager();
		trans.setEntityManagerFactory(getEntityManagerFactoryBean().getObject());
		return trans;
	}

	@Bean
	public InternalResourceViewResolver getViewResolver() {
		InternalResourceViewResolver view = new InternalResourceViewResolver();
		view.setPrefix("/WEB-INF/views/");
		view.setSuffix(".jsp");
		return view;

	}
}
