export const BUY_CAKE = 'BUY_CAKE'
export const ADD_CAKES = 'ADD_CAKES'
export const BUY_ICE = "BUY_ICE"

export const buyCake=()=>{
    return {
        type: BUY_CAKE,
        info: "buy cake here"
    }
}

export const addCakes =(number = 1)=>{
    return {
        type: ADD_CAKES,
        payload : number,
        info: "Add Cake to stocks"
    }
}


export const buyIce = () =>{
    return {
        type : BUY_ICE
    }
}