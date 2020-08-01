import React from 'react';
import Css from './cv.module.css'

const Cv = ({t}) => {
    return  (
    <div className={Css.Main}>
        <div className={Css.Cv}>
            <div className={Css.Header}>
                <div className={Css.HeaderTitle}>Alejandro Daniel Barreto</div>
                <div className={Css.Subtitle}>{t("cv.header.subtitle")}</div>
                <div className={Css.PersonalInfo}>
                    <div className={Css.PersonalData}><b>{t("cv.header.personalData.web")}</b><span className={Css.PersonalText}>www.alejandrobarreto.com.ar</span></div>
                    <div className={Css.PersonalData}><b>Linkedin</b><span className={Css.PersonalText}>linkedin.com/in/aledbarreto</span></div>
                    <div className={Css.PersonalData}><b>{t("cv.header.personalData.email")}</b><span className={Css.PersonalText}>aledbarreto@gmail.com</span></div>
                </div>
            </div>
            <div className={Css.Body}>
                <div className={Css.Experience}>
                    <div className={Css.BodyTitle}>{t("cv.body.experience.title")}</div>
                    <hr></hr>
                    <div className={Css.ExperienceItem}>
                        <div className={Css.ExperienceTime}>
                            <span className={Css.BodyTime}>{t("cv.body.experienceItem1.bodyTime")}</span>
                        </div>
                        <div className={Css.ExperienceBody}>
                            <span className={Css.BodySubtitle}>Senior Software Developer</span>
                            <span className={Css.BodyPlace}>Sovanta SRL, Buenos Aires</span>
                            <span>
                                <ul className={Css.List}>
                                    <li>{t("cv.body.experienceItem1.item1")}</li>
                                    <li>{t("cv.body.experienceItem1.item2")} : Hibernate, Spring, Vaadin, Mockito, Maven</li>
                                    <li>{t("cv.body.experienceItem1.item3")}</li>
                                    <li>{t("cv.body.experienceItem1.item4")}</li>
                                    <li>{t("cv.body.experienceItem1.item5")}</li>
                                </ul>
                            </span>
                        </div>                        
                    </div>
                    <div className={Css.ExperienceItem}>
                        <div className={Css.ExperienceTime}>
                            <span className={Css.BodyTime}>{t("cv.body.experienceItem2.bodyTime")}</span>
                        </div>
                        <div className={Css.ExperienceBody}>
                            <span className={Css.BodySubtitle}>{t("cv.body.experienceItem2.title")}</span>
                            <span className={Css.BodyPlace}>Telecom Argentina S.A., Buenos Aires</span>
                            <span>
                                <ul className={Css.List}>
                                    <li>{t("cv.body.experienceItem2.item1")}</li>
                                    <li>{t("cv.body.experienceItem2.item2")}</li>
                                    <li>{t("cv.body.experienceItem2.item3")}</li>
                                    <li>{t("cv.body.experienceItem2.item4")}</li>
                                </ul>
                            </span>
                        </div>                        
                    </div>
                    <div className={Css.ExperienceItem}>
                        <div className={Css.ExperienceTime}>
                            <span className={Css.BodyTime}>{t("cv.body.experienceItem3.bodyTime")}</span>
                        </div>
                        <div className={Css.ExperienceBody}>
                            <span className={Css.BodySubtitle}>{t("cv.body.experienceItem3.title")}</span>
                            <span className={Css.BodyPlace}>Telecom Argentina S.A., Buenos Aires</span>
                            <span>
                                <ul className={Css.List}>
                                    <li>{t("cv.body.experienceItem3.item1")}</li>
                                    <li>{t("cv.body.experienceItem3.item2")}</li>
                                    <li>{t("cv.body.experienceItem3.item3")}</li>
                                    <li>{t("cv.body.experienceItem3.item4")}</li>
                                    <li>{t("cv.body.experienceItem3.item5")}</li>
                                    <li>{t("cv.body.experienceItem3.item6")}</li>
                                    <li>{t("cv.body.experienceItem3.item7")}</li>
                                    <li>{t("cv.body.experienceItem3.item8")}</li>
                                    <li>{t("cv.body.experienceItem3.item9")}</li>
                                    <li>{t("cv.body.experienceItem3.item10")}</li>
                                </ul>
                            </span>
                        </div>                        
                    </div>
                    <div className={Css.ExperienceItem}>
                        <div className={Css.ExperienceTime}>
                            <span className={Css.BodyTime}>{t("cv.body.experienceItem4.bodyTime")}</span>
                        </div>
                        <div className={Css.ExperienceBody}>
                            <span className={Css.BodySubtitle}>{t("cv.body.experienceItem4.title")}</span>
                            <span className={Css.BodyPlace}>{t("cv.body.experienceItem4.place")}</span>
                            <span>
                                <ul className={Css.List}>
                                    <li>{t("cv.body.experienceItem4.item1")}</li>
                                    <li>{t("cv.body.experienceItem4.item2")}</li>
                                    <li>{t("cv.body.experienceItem4.item3")}</li>
                                    <li>{t("cv.body.experienceItem4.item4")}</li>
                                </ul>
                            </span>
                        </div>                        
                    </div>
                    <div className={Css.ExperienceItem}>
                        <div className={Css.ExperienceTime}>
                            <span className={Css.BodyTime}>{t("cv.body.experienceItem5.bodyTime")}</span>
                        </div>
                        <div className={Css.ExperienceBody}>
                            <span className={Css.BodySubtitle}>{t("cv.body.experienceItem5.title")}</span>
                            <span className={Css.BodyPlace}>IBM Argentina S.A.</span>
                            <span>
                                <ul className={Css.List}>
                                    <li>{t("cv.body.experienceItem5.item1")}</li>
                                    <li>{t("cv.body.experienceItem5.item2")}</li>
                                </ul>
                            </span>
                        </div>                        
                    </div>
                </div>
                <div className={Css.Experience}>
                    <div className={Css.BodyTitle}>{t("cv.body.educacion")}</div>
                    <hr className={Css.Line} />
                    <div className={Css.ExperienceItem}>
                        <div className={Css.ExperienceTime}>
                            <span className={Css.BodyTime}>{t("cv.body.educacion.bodyTime")}</span>
                        </div>
                        <div className={Css.ExperienceBody}>
                            <span className={Css.BodySubtitle}>{t("cv.body.educacion.title")}</span>
                            <span className={Css.BodyPlace}>{t("cv.body.educacion.university")}</span>
                            <span>
                                <ul className={Css.List}>
                                    <li>{t("cv.body.educacion.approvedSubjects")}</li>
                                    <li>{t("cv.body.educacion.remainingSubjects")}</li>
                                </ul>
                            </span>
                        </div>                        
                    </div>
                    <div className={Css.ExperienceItem}>
                        <div className={Css.ExperienceTime}>
                            <span className={Css.BodyTime}>2000 - 2005</span>
                        </div>
                        <div className={Css.ExperienceBody}>
                            <span className={Css.BodySubtitle}>{t("cv.body.educacion.school.title")}</span>
                            <span className={Css.BodyPlace}>{t("cv.body.educacion.school.place")}</span>
                        </div>                        
                    </div>
                </div>
                <div className={Css.Experience}>
                    <div className={Css.BodyTitle}>{t("cv.body.tecnologies.title")}</div>
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
                                <span><b>{t("cv.body.tecnologies.basic.title")}</b></span>
                                <span className={Css.SkillDescription}>C#,PHP, Python</span>
                            </span>
                            <span className={Css.SkillItem}>
                                <span><b>{t("cv.body.tecnologies.other.title")}</b></span>
                                <span className={Css.SkillDescription}>JIRA, SoapUI, Postman</span>
                            </span>
                            <span className={Css.SkillItem}>
                                <span><b>{t("cv.body.tecnologies.ides.title")}</b></span>
                                <span className={Css.SkillDescription}>Eclipse, Visual Studio Code, IntelliJ IDEA</span>
                            </span>
                        </div>                        
                    </div>
                </div>
                <div className={Css.Experience}>
                    <div className={Css.BodyTitle}>{t("cv.body.languages.title")}</div>
                    <hr className={Css.Line} />
                    <div className={Css.ExperienceItem}>
                        <div className={Css.ExperienceTime}>
                        </div>
                        <div className={Css.ExperienceBody}>
                            <span className={Css.BodySubtitle}>{t("cv.body.languages.eng.title")}</span>
                            <span className={Css.BodyPlace}>{t("cv.body.languages.eng.level")}</span>
                        </div>                        
                    </div>
                    <div className={Css.ExperienceItem}>
                        <div className={Css.ExperienceTime}>
                        </div>
                        <div className={Css.ExperienceBody}>
                            <span className={Css.BodySubtitle}>{t("cv.body.languages.chinese.title")}</span>
                            <span className={Css.BodyPlace}>{t("cv.body.languages.chinese.level")}</span>
                        </div>                        
                    </div>
                </div>
                <div className={Css.Experience}>
                    <div className={Css.BodyTitle}>{t("cv.body.courses.title")}</div>
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
                        <br /><br /><br />
                    </div>                        
                </div>
            </div>
        </div>
    </div>
    );
}

export default Cv;