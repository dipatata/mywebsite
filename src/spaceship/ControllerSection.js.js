import React from 'react';
import i18next from 'i18next';
import {withNamespaces} from 'react-i18next';
import MainModule from '../main.module.css';

const SpaceshipSection = (props) => {
    return (
        <section className={MainModule.spaceshipSection}>
            <div className={MainModule.spaceshipTitle}>{i18next.t(props.titleSection)}</div>
            <div className={MainModule.screenshotFloat}>
                {props.controllers.map((elem) => {
                    return (
                        <div className={MainModule.listColumn} key={elem[0]}>
                            <div className={MainModule.spaceshipTitle + ' ' + MainModule.underline}>
                                {i18next.t(elem[0])}
                            </div>
                            <ul>
                                {elem[1].map((elem2) => {
                                    return (
                                        <li key = {elem2} className={MainModule.spaceshipText}>
                                            {i18next.t(elem2)}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </section> 
    );
}
export default withNamespaces()(SpaceshipSection);