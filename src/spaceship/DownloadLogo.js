import React, {Component} from 'react';
import MainModule from '../main.module.css';
import DownloadImg from '../assets/images/descarga.png';
import DownloadImgBlue from '../assets/images/descarga_blue.png';

export default class DownloadLogo extends Component {

    state = {
        selected : false
    }

    render() {
        let imgLogo = this.state.selected? 
            <img className={MainModule.downloadLogo} src={DownloadImgBlue} alt={"downloadLogo"} 
                onMouseEnter={this.select.bind(this)} onMouseLeave={this.select.bind(this)} /> :
            <img className={MainModule.downloadLogo} src={DownloadImg} alt={"downloadLogo"} 
                onMouseEnter={this.select.bind(this)} onMouseLeave={this.select.bind(this)}/>;
        return (
            <div className={MainModule.downloadLink1} >
                <span className={MainModule.logoText}>
                    download game
                </span>
                {imgLogo}
            </div>
        );
    }

    select() {
        this.setState({selected : !this.state.selected});
    }
}
