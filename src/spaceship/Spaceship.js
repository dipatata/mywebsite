import React from 'react';
import MainModule from '../main.module.css';
import SpaceshipSection from './SpaceshipSection';
import Architecture from '../assets/images/spaceship/spaceshipArch_trans.png';
import SpaceshipLogo from '../assets/images/Csharp_Logo.png';
import Screenshot1 from '../assets/images/spaceship/screenshot1.png';
import Screenshot2 from '../assets/images/spaceship/screenshot2.png';
import Screenshot3 from '../assets/images/spaceship/screenshot3.png';
import Screenshot4 from '../assets/images/spaceship/screenshot4.png';
import Screenshot5 from '../assets/images/spaceship/screenshot5.png';
import Screenshot6 from '../assets/images/spaceship/screenshot6.png';
import Screenshot7 from '../assets/images/spaceship/screenshot7.png';
import ControllerSection from './ControllerSection.js.js';
import DownloadLogo from './DownloadLogo'
import Rhombus from '../components/Rhombus'
import { withNamespaces } from 'react-i18next';

const Spaceship = ({ t }) => {
    return (
        <div className={MainModule.Main + ' ' + MainModule.MainSpaceship}>
            <Rhombus spaceship home/>
            <div className={MainModule.SpaceshipContent}>
                <div className={MainModule.LogoSection}>
                    <img className={MainModule.SpaceshipLogo} src={SpaceshipLogo} alt={"spaceshipLogo"} />
                </div>
                <SpaceshipSection titleSection={t('spaceship.section1.title')} descriptionSection={t('spaceship.section1')}/>
                <SpaceshipSection titleSection={t('spaceship.section2.title')} imgs={[Architecture]}/>
                <SpaceshipSection titleSection={t('spaceship.section3.title')} descriptionSection={t('spaceship.section3')} />
                <SpaceshipSection smallImg imgs={[Screenshot1, Screenshot2]} />
                <SpaceshipSection titleSection={t('spaceship.section4.title')} descriptionSection={t('spaceship.section4')} />
                <SpaceshipSection titleSection={t('spaceship.section45.title')} 
                    descriptionSection={t('spaceship.section45')} smallImg imgs={[Screenshot7]}/>
                <SpaceshipSection titleSection={t('spaceship.section5.title')} descriptionSection={t('spaceship.section5')} />
                <SpaceshipSection smallImg imgs={[Screenshot3]} />
                <SpaceshipSection titleSection={t('spaceship.section6.title')} descriptionSection={t('spaceship.section6')}
                    items={[t('spaceship.section6.item1'), t('spaceship.section6.item2'), t('spaceship.section6.item3'), 
                    t('spaceship.section6.item4'), t('spaceship.section6.item5'), t('spaceship.section6.item6')]} />
                <SpaceshipSection smallImg imgs={[Screenshot4, Screenshot5]} />
                <SpaceshipSection titleSection={t('spaceship.section7.title')} descriptionSection={t('spaceship.section7')} />
                <SpaceshipSection smallImg imgs={[Screenshot6]} />
                <ControllerSection titleSection={t('spaceship.section8.title')}
                    controllers = {[[t('spaceship.section8.item1'), [t('spaceship.section8.item1.item1'), t('spaceship.section8.item1.item2'), t('spaceship.section8.item1.item3'), t('spaceship.section8.item1.item4'), t('spaceship.section8.item1.item5'), t('spaceship.section8.item1.item6'), t('spaceship.section8.item1.item7'), t('spaceship.section8.item1.item8'), t('spaceship.section8.item1.item9'), t('spaceship.section8.item1.item10')]], 
                    [t('spaceship.section8.item2'), [t('spaceship.section8.item2.item1'), t('spaceship.section8.item2.item2'), t('spaceship.section8.item2.item3'), t('spaceship.section8.item2.item4'), t('spaceship.section8.item2.item5')]]]} />
                <SpaceshipSection titleSection={t('spaceship.section9.title')} descriptionSection={t('spaceship.section9')} />
                <DownloadLogo />
            </div>
        </div>
    );
}

export default withNamespaces()(Spaceship)