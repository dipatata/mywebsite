import React from 'react';
import MainModule from './main.module.css';
import Rhombus from './components/Rhombus'
import Helmet from './assets/images/helmet_256.png'
import i18next from 'i18next';
import {withNamespaces} from 'react-i18next';

const WorkInprogress = () => {
    return (
        <div className={MainModule.MainWorkInProgress + ' ' + MainModule.MainSpaceship}>
            <Rhombus spaceship home/>
            <div className={MainModule.WorkInProgressContent}>
                <div className={MainModule.WorkInProgressBox}>
                    <div className={MainModule.WorkInProgressTitle + ' ' + MainModule.spaceshipTitle}>
                        {i18next.t("workInProgress.title")}
                    </div>
                    <img className={MainModule.HelmetImg} src={Helmet} alt="helmet" />
                </div>
            </div>
        </div>
    );
}

export default withNamespaces()(WorkInprogress)