import React from 'react';
import MainModule from './main.module.css';
import Box from './components/Box';
import Rhombus from './components/Rhombus'
import AngularLogo from './assets/images/angular_logo.png';
import AngularLogoSelected from './assets/images/angular_logo_blue.png';
import ReactLogo from './assets/images/reactLogo.png';
import ReactLogoSelected from './assets/images/reactLogoBlue.png';
import CvImage from './assets/images/cv_black_trans.png';
import CvImageSelected from './assets/images/cv_trans_blue.png'
import CsImage from './assets/images/Csharp_Logo.png'
import CsImageSelected from './assets/images/Csharp_Logo_blue.png'
import JavaImage from './assets/images/java.png'
import JavaImageSelected from './assets/images/java_blue.png'
import AppLink from './components/AppLink'
import LanguageBar from './components/LanguageBar';
import {withNamespaces} from 'react-i18next';

  const Layout = ({t, colours}) => {
    let sudokuImgStyle = {width : '65px', height : '65px'};
    let reactImgStyle = {width : '57px', height : '50px'};
    let cvImgStyle = {width : '60px', height : '60px'};
    let spaceshipImgStyle = {width : '50px', height : '50px'};
    let javaImgStyle = {width : '60px', height : '60px'};

    return (
      <div className={MainModule.Website}>
        <div className={MainModule.Main} >
          <Rhombus />
          <div className={MainModule.Content}>
          <LanguageBar />
            <div className={MainModule.Header}>
              <div className={MainModule.NameDiv}>
                <div className={MainModule.Name}>
                  Alejandro Daniel Barreto
                </div>
              </div>
              <div className={MainModule.CopeteDiv}>
                <div className={MainModule.Copete}>
                {t("layout.elevator")}
                </div>
              </div>
            </div>
            <AppLink linkTo="../angularSudoku">
              <Box img={AngularLogo} imgSelected={AngularLogoSelected} title='angular' imgStyle={sudokuImgStyle}
              colorId={colours[1]} description={t("layout.box2.description")} />
            </AppLink>
            <AppLink linkTo="../reactDomino">
              <Box img={ReactLogo} imgSelected={ReactLogoSelected} title='react' imgStyle={reactImgStyle}
              colorId={colours[2]} description={t("layout.box3.description")} />
            </AppLink>
            <AppLink linkTo="blog" linkInterno>
              <Box colorId={colours[4]} title="blog"
              description={t("layout.box4.description")}  />
            </AppLink>
            <AppLink linkTo="cv" linkInterno>
              <Box img={CvImage} imgSelected={CvImageSelected} title={t("layout.box5.title")} imgStyle={cvImgStyle}
              colorId={colours[0]} />
            </AppLink>
            <AppLink linkTo="spaceship" linkInterno>
              <Box colorId={colours[5]} title="c#" img={CsImage} imgSelected={CsImageSelected} 
              imgStyle={spaceshipImgStyle}
              description={t("layout.box6.description")}  />
            </AppLink>
            <AppLink linkTo="java" linkInterno>
              <Box colorId={colours[6]} title="java" img={JavaImage} imgSelected={JavaImageSelected}
              description={t("layout.box7.description")} imgStyle={javaImgStyle}/>
            </AppLink>
          </div>
        </div>
      </div>
    );
  }

export default withNamespaces()(Layout)