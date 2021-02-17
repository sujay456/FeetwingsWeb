import * as actionType  from './actions/actions'; 
const initialState={
    startingAnimDone:false
}

const reducer=(state=initialState,action)=>{

    switch(action.type)
    {
        case actionType.UPDATE_ANIMATION:
            return {
                ...state,
                startingAnimDone:true
            }
        default :
        return {
            ...state
        }
    }
}

export default reducer;