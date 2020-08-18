import React from 'react';
import { connect } from 'react-redux';
import ActionTypes from '../reduxStore/actionTypes'

const Language = (WrappedComponent) => {
    return connect(null, mapActionsToProps) ((props) => {
        if ((''+props.match.params.lan).toUpperCase() === 'EN') {
            props.toggleEng();
        } else if ((''+props.match.params.lan).toUpperCase() === 'ES') {
            props.toggleEsp();
        }
        return <WrappedComponent {...props}/>;
    })
}

const mapActionsToProps = dispatch => {
    return {
        toggleEng : () => dispatch({type : ActionTypes.TOGGLE_ENG}), 
        toggleEsp : () => dispatch({type : ActionTypes.TOGGLE_ESP})
    }
}
export default Language;