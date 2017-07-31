/**
 * Created by matthewxfz on 7/28/17.
 */
import React from 'react';
import PropTypes from 'prop-types'



const PageAlert =({msg, isHidden})=>{
    if (isHidden == true)
        return <div></div>
    else
        return (
            <div className="alert alert-danger" id="msg-brand">
                <strong>oops</strong>
                <div>{msg}</div>
            </div>
        );

}

PageAlert.propTypes = {
    msg: PropTypes.string.isRequired,
    isHidden: PropTypes.bool.isRequired
}


export  default  PageAlert;
