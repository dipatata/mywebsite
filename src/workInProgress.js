import React from 'react';
import MainModule from './main.module.css';
import Rhombus from './components/Rhombus'
import Helmet from './assets/images/helmet_256.png'

const WorkInprogress = () => {
    return (
        <div className={MainModule.Main + ' ' + MainModule.MainSpaceship}>
            <Rhombus spaceship home/>
            <div className={MainModule.WorkInProgressContent}>
                <div className={MainModule.WorkInProgressBox}>
                    <div className={MainModule.WorkInProgressTitle + ' ' + MainModule.spaceshipTitle}>
                        Work in progress
                    </div>
                    <img className={MainModule.HelmetImg} src={Helmet} />
                </div>
            </div>
        </div>
    );
}

export default WorkInprogress