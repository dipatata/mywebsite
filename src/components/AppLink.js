import React from 'react';
import {Link} from 'react-router-dom'

const style = {
    textDecoration : 'none'
}

const AppLink = (props) => {
    if (props.linkInterno) {
        return (
            <Link to={props.linkTo} style={style}>
                {props.children}
            </Link>
        );
    } else {
        return (
            <a href={props.linkTo} style={style}>
                {props.children}
            </a>
        );  
    }
} 

export default AppLink;