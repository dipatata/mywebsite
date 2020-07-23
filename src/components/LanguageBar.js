import React from 'react'
import ComponentsModule from './components.module.css'
import Esp from '../assets/images/esp.png'
import Eng from '../assets/images/eng.png'
import { connect } from 'react-redux';
import ActionTypes from '../reduxStore/actionTypes'
import LocalStorageVars from '../reduxStore/localStorageVars'

const LanguageBar = (props) => {
    let engSelected = props.language === LocalStorageVars.eng? ComponentsModule.Selected : '';
    let espSelected = props.language === LocalStorageVars.esp? ComponentsModule.Selected : '';
    return (
        <div className={ComponentsModule.LanguageBar} >
            <div className={ComponentsModule.LanguageContainer}>
                <div className={ComponentsModule.LanguageBox} onClick={props.toggleEsp}>
                    <img src={Esp} className={ComponentsModule.LanguageImgBox + ' ' + espSelected} />
                </div>
                <div className={ComponentsModule.LanguageBoxR} onClick={props.toggleEng}>
                    <img src={Eng} className={ComponentsModule.LanguageImgBox + ' ' + engSelected} />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        language : state.language
    }
}

const mapActionsToProps = dispatch => {
    return {
        toggleEng : () => dispatch({type : ActionTypes.TOGGLE_ENG}), 
        toggleEsp : () => dispatch({type : ActionTypes.TOGGLE_ESP})
    }
}
export default connect(mapStateToProps, mapActionsToProps)(LanguageBar)