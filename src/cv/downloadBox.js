import React from 'react';
import Pdf from '../assets/images/PDF-logo.png'
import Html from '../assets/images/HTML5_Logo_256.png'
import Css from './cv.module.css'

const DownloadBox = (props) => {

    const loadPdf = () => {
        if (props.lng === 'es') {
            window.open('downloads/cvEsp.pdf', "_blank");
        } else {
            window.open('downloads/cvEng.pdf', "_blank");
        }
    }

    const loadHtml = () => {
        if (props.lng === 'es') {
            window.open('downloads/cvEsp.html', "_blank");
        } else {
            window.open('downloads/cvEng.html', "_blank");
        }
    }

    return (
    <div className={Css.DownloadBox}>
        <div className={Css.DownloadTitle}>
            Download
        </div>
        <div className={Css.ListRow}>
            <img className={Css.Icon} src={Html} alt='Html' onClick={loadHtml}/>
            <img className={Css.Icon} src={Pdf} alt='Pdf' onClick={loadPdf}/>
        </div>
    </div>
    );
}

export default DownloadBox;