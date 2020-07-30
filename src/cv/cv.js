import React from 'react';
import Css from './cv.module.css'

const Cv = (props) => {
    return  (
    <div className={Css.Main}>
        <div className={Css.Cv}>
            <div className={Css.Header}>
                <div className={Css.HeaderTitle}>Alejandro Daniel Barreto</div>
                <div className={Css.Subtitle}>Desarrollador de software</div>
                <div className={Css.PersonalInfo}>
                    <div className={Css.PersonalData}><b>Sitio web</b><span className={Css.PersonalText}>www.alejandrobarreto.com.ar</span></div>
                    <div className={Css.PersonalData}><b>Linkedin</b><span className={Css.PersonalText}>linkedin.com/in/aledbarreto</span></div>
                    <div className={Css.PersonalData}><b>Correo</b><span className={Css.PersonalText}>aledbarreto@gmail.com</span></div>
                </div>
            </div>
            <div className={Css.Body}>
                <span className={Css.Presentation}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia
                </span>
                <div className={Css.Experience}>
                    <div className={Css.BodyTitle}>Experiencia</div>
                    <hr></hr>
                    <div className={Css.ExperienceItem}>
                        <div className={Css.ExperienceTime}>
                            <span className={Css.BodyTime}>2017-03 - 2018-09</span>
                        </div>
                        <div className={Css.ExperienceBody}>
                            <span className={Css.BodySubtitle}>Senior Software Developer</span>
                            <span className={Css.BodyPlace}>Sovanta SRL, Buenos Aires</span>
                            <span>
                                <ul className={Css.List}>
                                    <li>Desarrollo de aplicaciones Java EE</li>
                                    <li>Tecnologías utilizadas: Hibernate, Spring, Vaadin, Mockito, Maven</li>
                                    <li>Soporte a producción</li>
                                    <li>Equipo organizado con la metodología Scrum</li>
                                    <li>Git como controlador de versiones</li>
                                </ul>
                            </span>
                        </div>                        
                    </div>
                    <div className={Css.ExperienceItem}>
                        <div className={Css.ExperienceTime}>
                            <span className={Css.BodyTime}>2015-11 - 2017-03</span>
                        </div>
                        <div className={Css.ExperienceBody}>
                            <span className={Css.BodySubtitle}>Analista funcional</span>
                            <span className={Css.BodyPlace}>Telecom Argentina S.A., Buenos Aires</span>
                            <span>
                                <ul className={Css.List}>
                                    <li>Análisis de producto para la implementación de diversas soluciones software</li>
                                    <li>Creación y mantenimiento de documentación</li>
                                    <li>Soporte a producción</li>
                                    <li>Soporte a QA</li>
                                </ul>
                            </span>
                        </div>                        
                    </div>
                    <div className={Css.ExperienceItem}>
                        <div className={Css.ExperienceTime}>
                            <span className={Css.BodyTime}>2011-06 - 2015-10</span>
                        </div>
                        <div className={Css.ExperienceBody}>
                            <span className={Css.BodySubtitle}>Team Lead - Desarrollador</span>
                            <span className={Css.BodyPlace}>Telecom Argentina S.A., Buenos Aires</span>
                            <span>
                                <ul className={Css.List}>
                                    <li>Análisis de requerimientos de usuario</li>
                                    <li>Capacitación, coordinación, y supervisión de equipo</li>
                                    <li>Desarrollo de aplicaciones Java EE</li>
                                    <li>Soporte a QA</li>
                                    <li>Soporte a producción 24x7 tanto para software como para infraestructura</li>
                                    <li>Tecnologías utilizadas: Java EE, Apache Struts, Grails, Hibernate</li>
                                    <li>Plataformas utlizadas: Oracle Weblogic Server 9.x, Unix</li>
                                    <li>Tecnologías complementarias: IBM MQ Series, JMS, Scripts en python</li>
                                    <li>Base de datos: Oracle 11G</li>
                                    <li>Confección de reportes de negocio en SQL y PLSQL</li>
                                </ul>
                            </span>
                        </div>                        
                    </div>
                    <div className={Css.ExperienceItem}>
                        <div className={Css.ExperienceTime}>
                            <span className={Css.BodyTime}>2008-10 - 2011-06</span>
                        </div>
                        <div className={Css.ExperienceBody}>
                            <span className={Css.BodySubtitle}>Desarrollador Java</span>
                            <span className={Css.BodyPlace}>Cúbika S.A. (ahora Globallogic)</span>
                            <span>
                                <ul className={Css.List}>
                                    <li>Desarrollo de aplicaciones Java EE</li>
                                    <li>Desarrollo de scripts PLSQL</li>
                                    <li>Soporte a QA</li>
                                    <li>Soporte a producción</li>
                                </ul>
                            </span>
                        </div>                        
                    </div>
                    <div className={Css.ExperienceItem}>
                        <div className={Css.ExperienceTime}>
                            <span className={Css.BodyTime}>2006-12 - 2008-09</span>
                        </div>
                        <div className={Css.ExperienceBody}>
                            <span className={Css.BodySubtitle}>Tester QA</span>
                            <span className={Css.BodyPlace}>IBM Argentina S.A.</span>
                            <span>
                                <ul className={Css.List}>
                                    <li>Generación de casos de uso</li>
                                    <li>Testing de aplicaciones Java</li>
                                </ul>
                            </span>
                        </div>                        
                    </div>
                </div>
                <div className={Css.Experience}>
                    <div className={Css.BodyTitle}>Educación</div>
                    <hr className={Css.Line} />
                    <div className={Css.ExperienceItem}>
                        <div className={Css.ExperienceTime}>
                            <span className={Css.BodyTime}>2013-07 - presente</span>
                        </div>
                        <div className={Css.ExperienceBody}>
                            <span className={Css.BodySubtitle}>Ingeniero en sistemas de información</span>
                            <span className={Css.BodyPlace}>Universidad Tecnológica Nacional, Facultad Regional Buenos Aires</span>
                            <span>
                                <ul className={Css.List}>
                                    <li>35 materias aprobadas</li>
                                    <li>5 materias para graduarme</li>
                                </ul>
                            </span>
                        </div>                        
                    </div>
                    <div className={Css.ExperienceItem}>
                        <div className={Css.ExperienceTime}>
                            <span className={Css.BodyTime}>2000 - 2005</span>
                        </div>
                        <div className={Css.ExperienceBody}>
                            <span className={Css.BodySubtitle}>Técnico en informática personal y profesional</span>
                            <span className={Css.BodyPlace}>Escuela nacional de educación técnica N°6 "Chacabuco". Morón, Buenos Aires</span>
                        </div>                        
                    </div>
                </div>
                <div className={Css.Experience}>
                    <div className={Css.BodyTitle}>Tecnologías y herramientas</div>
                    <hr className={Css.Line} />
                    <div className={Css.ExperienceItem}>
                        <div className={Css.ExperienceTime} />
                        <div className={Css.ExperienceBody}>
                            <span className={Css.SkillItem}>
                                <b>Java</b>
                                <span className={Css.SkillDescription}>Spring, Hibernate, Mockito, Vaadin</span>
                            </span>
                            <span className={Css.SkillItem}>
                                <b>SQL, PLSQL</b>
                            </span>
                            <span className={Css.SkillItem}>
                                <span><b>Javascript</b></span>
                                <span className={Css.SkillDescription}>ReactJS, AngularJS, JQuery</span>
                            </span>
                            <span className={Css.SkillItem}>
                                <b>HTML, CSS, JSP</b>
                            </span>
                            <span className={Css.SkillItem}>
                                <b>Grails</b>
                            </span>
                            <span className={Css.SkillItem}>
                                <b>Git, Maven, Npm</b>
                            </span>
                            <span className={Css.SkillItem}>
                                <b>Mysql, Oracle, H2, Sap Hana, MongoDB</b>
                            </span>
                            <span className={Css.SkillItem}>
                                <b>Unity</b>
                            </span>
                            <span className={Css.SkillItem}>
                                <span><b>Conocimiento básico</b></span>
                                <span className={Css.SkillDescription}>C#,PHP, Python</span>
                            </span>
                            <span className={Css.SkillItem}>
                                <span><b>Otros software utilizados</b></span>
                                <span className={Css.SkillDescription}>JIRA, SoapUI, Postman</span>
                            </span>
                            <span className={Css.SkillItem}>
                                <span><b>IDE's utilizados</b></span>
                                <span className={Css.SkillDescription}>Eclipse, Visual Studio Code, IntelliJ IDEA</span>
                            </span>
                        </div>                        
                    </div>
                </div>
                <div className={Css.Experience}>
                    <div className={Css.BodyTitle}>Idiomas</div>
                    <hr className={Css.Line} />
                    <div className={Css.ExperienceItem}>
                        <div className={Css.ExperienceTime}>
                        </div>
                        <div className={Css.ExperienceBody}>
                            <span className={Css.BodySubtitle}>Inglés</span>
                            <span className={Css.BodyPlace}>Nivel fluido hablado y escrito</span>
                        </div>                        
                    </div>
                    <div className={Css.ExperienceItem}>
                        <div className={Css.ExperienceTime}>
                        </div>
                        <div className={Css.ExperienceBody}>
                            <span className={Css.BodySubtitle}>Chino</span>
                            <span className={Css.BodyPlace}>Nivel básico hablado y escrito</span>
                        </div>                        
                    </div>
                </div>
                <div className={Css.Experience}>
                    <div className={Css.BodyTitle}>Cursos</div>
                    <hr className={Css.Line} />
                    <div className={Css.ExperienceItem}>
                        <div className={Css.ExperienceTime}>
                        </div>
                        <div className={Css.ExperienceBody}>
                            <span className={Css.BodySubtitle}>React - The Complete Guide (incl Hooks, React Router, Redux)</span>
                            <span className={Css.BodyPlace}>Maximilian Schwarzmüller, Udemy</span>
                        </div>                        
                    </div>
                </div>
                <div className={Css.ExperienceItem}>
                    <div className={Css.ExperienceTime}>
                    </div>
                    <div className={Css.ExperienceBody}>
                        <span className={Css.BodySubtitle}>Máster en Programación de Videojuegos con Unity 2020 y C#</span>
                        <span className={Css.BodyPlace}>Mariano Rivas, Udemy</span>
                    </div>                        
                </div>
                <div className={Css.ExperienceItem}>
                    <div className={Css.ExperienceTime}>
                    </div>
                    <div className={Css.ExperienceBody}>
                        <span className={Css.BodySubtitle}>Spring Framework 5: Creando webapp de cero a experto</span>
                        <span className={Css.BodyPlace}>Andrés Guzmán F, Udemy</span>
                    </div>                        
                </div>
                <div className={Css.ExperienceItem}>
                    <div className={Css.ExperienceTime}>
                    </div>
                    <div className={Css.ExperienceBody}>
                        <span className={Css.BodySubtitle}>Java Maven: Introducción paso a paso</span>
                        <span className={Css.BodyPlace}>Dico Training</span>
                    </div>                        
                </div>
            </div>
        </div>
    </div>
    );
}

export default Cv;