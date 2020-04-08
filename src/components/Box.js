import React, {Component} from 'react';
import BoxModule from './components.module.css';

export default class Box extends Component {

    state = {
        selected : false
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.selected !== nextState.selected;
    }

    render() {
        let selected = this.state.selected? BoxModule.selected : BoxModule.unselected;
        let img = this.state.selected? this.props.imgSelected : this.props.img;
        if (typeof(this.props.title) !== 'undefined' && typeof(this.props.img) !== 'undefined') {
            return (
                <section className={BoxModule.section + ' ' + this.getColor(this.props.colorId) + 
                    ' ' + BoxModule.hoverSection} 
                    onMouseEnter={this.mouseEnterHandler.bind(this)}
                    onMouseLeave={this.mouseOutHandler.bind(this)}>
                    <img className={BoxModule.iconImage} src={img} style={this.props.imgStyle}
                        alt={this.props.title}/>
                    <div className={BoxModule.titleSection + ' ' + selected}> 
                            {this.props.title}</div>
                    <div className={BoxModule.descriptionSection + ' ' + selected}> 
                            {this.props.description}</div>
                </section>
            );
        } else if (typeof(this.props.title) !== 'undefined') {
            return (
                <section className={BoxModule.section + ' ' + this.getColor(this.props.colorId) + 
                    ' ' + BoxModule.hoverSection} 
                    onMouseEnter={this.mouseEnterHandler.bind(this)}
                    onMouseLeave={this.mouseOutHandler.bind(this)}>
                    <div className={BoxModule.titleSection + ' ' + selected}> 
                        {this.props.title}</div>
                    <div className={BoxModule.descriptionSection + ' ' + selected}> 
                            {this.props.description}</div>
                </section>
                );
        } else {
            return (
                <section className={BoxModule.section + ' ' + this.getColor(this.props.colorId) + 
                    ' ' + BoxModule.hoverSection} 
                    onMouseEnter={this.mouseEnterHandler.bind(this)}
                    onMouseLeave={this.mouseOutHandler.bind(this)}>
                    <div className={BoxModule.descriptionSection + ' ' + selected}> 
                            {this.props.description}</div>
                </section>
                );
        }
    }

    mouseEnterHandler(event) {
        this.setState({selected : true});
    }

    mouseOutHandler() {
        this.setState({selected : false});
    }

    getColor(color) {
        if (color===0) {
            return BoxModule.s1;
        } else if (color===1) {
            return BoxModule.s2;
        } else if (color===2) {
            return BoxModule.s3;
        } else if (color===3) {
            return BoxModule.s4;
        } else if (color===4) {
            return BoxModule.s5;
        } else if (color===5) {
            return BoxModule.s6;
        } else if (color===6) {
            return BoxModule.s7;
        }
    }
}