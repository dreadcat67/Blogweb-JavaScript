/**
 * Created by matthewxfz on 7/28/17.
 */
import React from 'react';

export default class MsgBand extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        this.reset();
    }

    // setMsg(msg) {
    //     this.setState({
    //         msg: msg,
    //         isHidden: false
    //     });
    // }

    reset() {
        this.setState({
            msg: '',
            isHidden: true
        });
    }

    render() {
        if (this.props.isHidden == true)
            return <div></div>
        else
            return (
                <div className="alert alert-danger" id="msg-brand">
                    <strong>oops</strong>
                    <div id="msg">{this.props.msg}</div>
                </div>
            )
    }
}


