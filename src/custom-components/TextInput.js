import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class TextInput extends Component {
    render() {
        const {type, label, labelClasses, inputClasses, labelText, placeholder, name, required, labelIconClasses, containerDivClasses } =this.props;

        return (

            <div className={classNames(containerDivClasses)}>
                <label className={classNames(labelClasses)} >
                    { labelIconClasses !== undefined && <i className={classNames(labelIconClasses)}></i> }
                    { labelText }</label>
                <input className={classNames(inputClasses)} type={type} placeholder={placeholder} name={name} required={required ? required : false}/>
            </div>
        );

    }


}

TextInput.propTypes = {
    type : PropTypes.string,
    label: PropTypes.string,
    labelClasses: PropTypes.string,
    inputClasses: PropTypes.string,
    labelText: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    labelIconClasses: PropTypes.string,
    containerDivClasses: PropTypes.string

};

export default TextInput;
