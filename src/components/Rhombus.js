import React, {Component} from 'react'
import RhombusBlue from '../assets/images/rhombusBlue.png'
import RhombusBlueNoBrg from '../assets/images/rhombusBlueOLD.png';
import MainModule from '../main.module.css';

export default class Rhombus extends Component {

    rhombusImageId="rhombusImage";
    rhombusImageParentId="rhombusParentId";
    menuId="navMenu";
    state = {
        vscroll : 0,
        onTop : true,
        runningRhombusShrink : false,
        headerStatus : false,
        burguerPresent : true,
        onProcess : false
    }
    componentDidMount() {
        window.onscroll=this.scrollHandler.bind(this);
        document.getElementById(this.rhombusImageId).addEventListener("animationiteration", 
            () => {
                this.stopRhombusAnimate();
                if (this.state.onTop && this.state.vscroll!==0 && !this.state.headerStatus) {
                    this.rhombusAnimate(true);
                } else if (!this.state.onTop && this.state.vscroll === 0 && !this.state.headerStatus) {
                    this.rhombusAnimate(false);
                }
        }, false);
    }

    render() {
        return (
            <div className={MainModule.nav}>
                <div id={this.menuId} className={MainModule.navMenu}>
                    <div className={MainModule.menuItem}>cv</div>
                    <div className={MainModule.menuItem}>c#</div>
                    <div className={MainModule.menuItem}>blog</div>
                    <div className={MainModule.menuItem}>angular</div>
                    <div className={MainModule.menuItem}>java</div>
                </div>
                <div id={this.rhombusImageParentId} className={MainModule.rhombusParent}>
                    <img id={this.rhombusImageId} src={this.getImageSrc()} alt={this.rhombusImageId}
                    className={MainModule.menuImage} onClick={this.menuClick.bind(this)}/>
                </div>
            </div>
        );
    }

    getImageSrc() {
        return this.state.burguerPresent? RhombusBlue : RhombusBlueNoBrg;
    }

    scrollHandler() {
        this.setState({vscroll : window.scrollY});    
        if (this.state.vscroll !== 0) {
            if (this.state.onTop && !this.state.runningRhombusShrink) {
                this.rhombusAnimate(true);
            }
        } else {
            if (!this.state.onTop && !this.state.runningRhombusShrink) {
                this.rhombusAnimate(false);
            }
        }
    }

    rhombusAnimate(smaller) {
        if (this.state.headerStatus) return;
        if (smaller) {
            document.getElementById(this.rhombusImageId).style.animationPlayState = "running";
            this.setState({onTop : false, runningRhombusShrink : true});
        } else {
            document.getElementById(this.rhombusImageId).style.animationPlayState = "running";
            this.setState({onTop : true, runningRhombusShrink : true});
        }
    }

    stopRhombusAnimate() {
        this.setState({runningRhombusShrink : false});
        document.getElementById(this.rhombusImageId).style.animationPlayState = "paused";
    }

    menuClick() {
        if (this.state.onProcess || this.state.runningRhombusShrink) return;
        if (!this.state.headerStatus && !this.state.onTop) {
            this.rhombusAnimate(false);
            setTimeout(this.animateRhombusParent.bind(this), 600);
        } else {
            this.animateRhombusParent();
        }
    }

    animateRhombusParent() {
        let currentHeaderStatus = !this.state.headerStatus;
        this.setState({onProcess : true, headerStatus : !this.state.headerStatus});
        let indexLimit = 150;
        if (currentHeaderStatus) {
            this.setState({burguerPresent : false});
            for (let index = 0; index < indexLimit; index++) {
                setTimeout(()=>{this.animationIteration(index, indexLimit);}, index * 3);
            }
            setTimeout(this.stopAnimation.bind(this), indexLimit * 3);
        } else {
            document.getElementById(this.menuId).style.visibility = 'hidden';
            for (let index = indexLimit; index > 0; index--) {
                setTimeout(()=>{this.animationIteration(index, indexLimit)}, 
                    (indexLimit - index) * 3);
            }    
            setTimeout(this.stopAnimation2.bind(this), indexLimit * 3);
        }
    }

    animationIteration(index, indexLimit) {
        let menu = document.getElementById(this.rhombusImageParentId);
        let scale = 1 + (index * 5) / indexLimit;
        menu.style = 'transform: scale('+ scale + ');';
    }

    stopAnimation() {
        this.setState({onProcess : false});
        document.getElementById(this.menuId).style.visibility = 'visible';
    }

    stopAnimation2() {
        this.setState({onProcess : false, burguerPresent : true});
        this.scrollHandler();
    }

    putAwayMenu() {
        if (this.state.headerStatus) {
            this.menuClick();
        }
    }
}

