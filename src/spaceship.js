import React from 'react';
import MainModule from './main.module.css';
import SpaceshipSection from './components/SpaceshipSection';
import Architecture from './assets/images/spaceship/spaceshipArch_trans.png';
import SpaceshipLogo from './assets/images/Csharp_Logo.png';
import Screenshot1 from './assets/images/spaceship/screenshot1.png';
import Screenshot2 from './assets/images/spaceship/screenshot2.png';
import Screenshot3 from './assets/images/spaceship/screenshot3.png';
import Screenshot4 from './assets/images/spaceship/screenshot4.png';
import Screenshot5 from './assets/images/spaceship/screenshot5.png';
import Screenshot6 from './assets/images/spaceship/screenshot6.png';
import ControllerSection from './components/ControllerSection.js';
import DownloadLogo from './components/DownloadLogo'

const Spaceship = () => {
    return (
        <div className={MainModule.main}>
            <div className={MainModule.content}>
                <div className={MainModule.logosection}>
                    <img className={MainModule.spaceshiplogo} src={SpaceshipLogo} alt={"spaceshipLogo"} />
                </div>
                <SpaceshipSection titleSection='spaceship.section1.title' descriptionSection='spaceship.section1'/>
                <SpaceshipSection titleSection='spaceship.section2.title' imgs={[Architecture]}/>
                <SpaceshipSection titleSection='spaceship.section3.title' descriptionSection='spaceship.section3' />
                <SpaceshipSection smallImg imgs={[Screenshot1, Screenshot2]} />
                <SpaceshipSection titleSection='spaceship.section4.title' descriptionSection='spaceship.section4' />
                <SpaceshipSection titleSection='spaceship.section5.title' descriptionSection='spaceship.section5' />
                <SpaceshipSection smallImg imgs={[Screenshot3]} />
                <SpaceshipSection titleSection='spaceship.section6.title' descriptionSection='spaceship.section6'
                    items={['spaceship.section6.item1', 'spaceship.section6.item2', 'spaceship.section6.item3', 
                    'spaceship.section6.item4', 'spaceship.section6.item5', 'spaceship.section6.item6']} />
                <SpaceshipSection smallImg imgs={[Screenshot4, Screenshot5]} />
                <SpaceshipSection titleSection='spaceship.section7.title' descriptionSection='spaceship.section7' />
                <SpaceshipSection smallImg imgs={[Screenshot6]} />
                <ControllerSection titleSection='spaceship.section8.title' 
                    controllers = {[['spaceship.section8.item1', ['spaceship.section8.item1.item1', 'spaceship.section8.item1.item2', 'spaceship.section8.item1.item3', 'spaceship.section8.item1.item4', 'spaceship.section8.item1.item5', 'spaceship.section8.item1.item6', 'spaceship.section8.item1.item7', 'spaceship.section8.item1.item8', 'spaceship.section8.item1.item9', 'spaceship.section8.item1.item10']], 
                    ['spaceship.section8.item2', ['spaceship.section8.item2.item1', 'spaceship.section8.item2.item2', 'spaceship.section8.item2.item3', 'spaceship.section8.item2.item4', 'spaceship.section8.item2.item5']]]} />
                <SpaceshipSection titleSection='spaceship.section9.title' descriptionSection='spaceship.section9' />
                <DownloadLogo />
            </div>
        </div>
    );
}

export default Spaceship