import React, {Component} from 'react';
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

export default class Layout extends Component {

  colores=[];
  sudokuImgStyle = {width : '65px', height : '65px'};
  reactImgStyle = {width : '57px', height : '50px'};
  cvImgStyle = {width : '60px', height : '60px'};
  spaceshipImgStyle = {width : '50px', height : '50px'};
  javaImgStyle = {width : '60px', height : '60px'};

  constructor(props) {
    super(props);
    this.initializeColores();
  }

  render() {
    return (
      <div className={MainModule.main} onScroll={this.scrollFunction}>
        <Rhombus />
        <div className={MainModule.content}>
          <AppLink linkTo="cv" linkInterno>
            <Box img={CvImage} imgSelected={CvImageSelected} title='cv' imgStyle={this.cvImgStyle}
            colorId={this.colores[0]} description='' />
          </AppLink>
          <AppLink linkTo="../angularSudoku">
            <Box img={AngularLogo} imgSelected={AngularLogoSelected} title='angular' imgStyle={this.sudokuImgStyle}
            colorId={this.colores[1]} description='A game developed with Angular'/>
          </AppLink>
          <AppLink linkTo="../reactDomino">
            <Box img={ReactLogo} imgSelected={ReactLogoSelected} title='react' imgStyle={this.reactImgStyle}
            colorId={this.colores[2]} description='Domino developed in ReactJS'/>
          </AppLink>
          <Box colorId={this.colores[3]}
          description='This my website. You can find my experience and job history'/>
          <AppLink linkTo="blog" linkInterno>
            <Box colorId={this.colores[4]} title="blog"
            description='A blog with developing stuff' />
          </AppLink>
          <AppLink linkTo="spaceship" linkInterno>
            <Box colorId={this.colores[5]} title="c#" img={CsImage} imgSelected={CsImageSelected} 
            imgStyle={this.spaceshipImgStyle}
            description='A spaceship game as a university project made in c#' />
          </AppLink>
          <AppLink linkTo="java" linkInterno>
            <Box colorId={this.colores[6]} title="java" img={JavaImage} imgSelected={JavaImageSelected}
            description='A project developed in java' imgStyle={this.javaImgStyle}/>
          </AppLink>
        </div>
      </div>
    );
  }

  initializeColores() {
    this.colores = [0,1,2,3,4,5,6].sort((a, b) => (Math.random() * 3) - 1);
  }
}