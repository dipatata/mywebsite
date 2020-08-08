import React, {Component} from 'react';
import MainModule from '../main.module.css';
import DownloadImg from '../assets/images/descarga.png';
import DownloadImgBlue from '../assets/images/descarga_blue.png';
import GithubLogo from '../assets/images/github_logo.png';

export default class DownloadLogo extends Component {

    state = {
        selected : false
    }

    openGithubLink() {
        window.open("https://github.com/Bade99/2019_1C_3051_Padawans");
    }

    render() {
        let imgLogo = this.state.selected? 
            <img className={MainModule.DownloadLogo} src={DownloadImgBlue} alt={"downloadLogo"} 
                onMouseEnter={this.select.bind(this)} onMouseLeave={this.select.bind(this)} /> :
            <img className={MainModule.DownloadLogo} src={DownloadImg} alt={"downloadLogo"} 
                onMouseEnter={this.select.bind(this)} onMouseLeave={this.select.bind(this)}/>;
        return (
            <div className={MainModule.DownloadFrame} >
                <div className={MainModule.DownloadGroup}>
                    <span className={MainModule.logoText}>
                        download game
                    </span>
                    {imgLogo}
                </div>
                <div className={MainModule.DownloadGroup}>
                    <span className={MainModule.logoText} onClick={this.openGithubLink}>
                        github
                    </span>
                    <img className={MainModule.DownloadLogo} src={GithubLogo} alt='github logo' 
                        onClick={this.openGithubLink}/>
                </div>
            </div>
        );
    }

    select() {
        this.setState({selected : !this.state.selected});
    }
}
