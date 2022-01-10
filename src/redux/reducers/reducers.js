import { BUY_CAKE, ADD_CAKES, 
    BUY_ICE
 } from '../actions/actions'

const initialState = {
    numOfCakes : 10,
    //  numOfIce : 20
}

const iceState = {
    // numOfCakes : 10,
     numOfIce : 20
}


 

export const cakeReducer=(state = initialState, action)=>{
    switch(action.type){
        case BUY_CAKE : 
            return{
                ...state,
                numOfCakes : state.numOfCakes - 1
        }
        case ADD_CAKES : 
        return {
            ...state,
            numOfCakes : state.numOfCakes + action.payload
        }
        default: 
            return state;
    }
}

export const iceReducer=(state = iceState, action)=>{
        switch(action.type){
            case BUY_ICE :
                return{
                ...state,
                numOfIce : state.numOfIce - 1
            }
            default :
                return state;
        }
}



