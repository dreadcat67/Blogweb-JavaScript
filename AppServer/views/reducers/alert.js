/**
 * Created by matthewxfz on 7/30/17.
 */
const alert =(state = {msg:'hello world', isHidden:false}, action)=>{
    switch(action.type){
        case 'Toggle_Msg':
            return {msg:state.msg, isHidden:!state.isHidden}
        case 'Show_Msg':
            return {msg:state.msg, isHidden:true}
        case 'Hide_Msg':
            return {msg:state.msg, isHidden:false}

        default:
            return state;
    }
}

export default alert;