import React from 'react';
import MainModule from '../main.module.css';

const SpaceshipSection = (props) => {

    const openImg = (elem) => {
        window.open(elem);
    }

    const getImgs = (props) => {
        return props.imgs.map((elem, index) => {
            if (props.smallImg) {
                return (
                    <img className={MainModule.spaceshipScreenshot} key={'img' + index}
                    src={elem} alt={'screenshot' + index} onClick={() => openImg(elem)}/>
                );
            } else {
                return (
                    <img className={MainModule.spaceshipArchImg} key={'img' + index} 
                        src={elem} alt={'img' + index} />
                );
            }
        })
    }
    
    const getTitle = (props) => {
    
        if (typeof(props.titleSection) !== 'undefined') {
            return (<div className={MainModule.spaceshipTitle}>{props.titleSection}</div>);
        } else {
            return '';
        }   
    }

    const getDescription = (props) => {
    
        if (typeof(props.descriptionSection) !== 'undefined') {
            return (    <div className={MainModule.spaceshipText}>{props.descriptionSection}</div>);
        } else {
            return '';
        }   
    }

    
    const getList = (props) => {
        if (typeof(props.items) !== 'undefined') {
            let items = props.items.map((elem) => 
                <li key={elem} className={MainModule.spaceshipText}>{elem}</li>
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

    if (typeof(props.imgs) === 'undefined') {
        let list = getList(props);
        return (
        <section className={MainModule.spaceshipSection}>
            <div className={MainModule.spaceshipTitle}>{props.titleSection}</div>
            <div className={MainModule.spaceshipText}>{props.descriptionSection}</div>
            <div className={MainModule.screenshotFloat}>
                {list}
            </div>
        </section> 
        );
    } else {
        let imgs = getImgs(props);
        let title = getTitle(props);
        let description = getDescription(props);
        return (
            <section className={MainModule.spaceshipSection}>
                {title}
                {description}
                <div className={MainModule.screenshotFloat}>
                    {imgs}
                </div>
            </section> 
        );
    }
}
export default SpaceshipSection;