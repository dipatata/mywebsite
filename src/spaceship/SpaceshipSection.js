import React from 'react';
import i18next from 'i18next';
import {withNamespaces} from 'react-i18next';
import MainModule from '../main.module.css';

const getImgs = (props) => {
    return props.imgs.map((elem, index) => {
        if (props.smallImg) {
            return (
                <img className={MainModule.spaceshipScreenshot} src={elem} alt={'screenshot' + index}/>
            );
        } else {
            return (
                <img className={MainModule.spaceshipArchImg} src={elem} alt={'img' + index}/>
            );
        }
    })
}

const getTitle = (props) => {
    if (typeof(props.titleSection) !== 'undefined') {
        return (<div className={MainModule.spaceshipTitle}>{i18next.t(props.titleSection)}</div>);
    } else {
        return '';
    }   
}

const getList = (props) => {
    if (typeof(props.items) !== 'undefined') {
        let items = props.items.map((elem) => 
            <li className={MainModule.spaceshipText}>{i18next.t(elem)}</li>
        );
        return (
            <ul>
                {items}
            </ul>
        )
    } else {
        return '';
    }   
}

const SpaceshipSection = (props) => {
    if (typeof(props.imgs) === 'undefined') {
        let list = getList(props);
        return (
        <section className={MainModule.spaceshipSection}>
            <div className={MainModule.spaceshipTitle}>{i18next.t(props.titleSection)}</div>
            <div className={MainModule.spaceshipText}>{i18next.t(props.descriptionSection)}</div>
            <div className={MainModule.screenshotFloat}>
                {list}
            </div>
        </section> 
        );
    } else {
        let imgs = getImgs(props);
        let title = getTitle(props);
        return (
            <section className={MainModule.spaceshipSection}>
                {title}
                <div className={MainModule.screenshotFloat}>
                    {imgs}
                </div>
            </section> 
        );
    }
}
export default withNamespaces()(SpaceshipSection);