import React,{ useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCakes, buyCake , buyIce } from './redux/actions/actions';

const Cake = () => {
    const [number, setNumber] = useState()
    const numOfCakes = useSelector(state=>state.cake.numOfCakes)
    const numOfIce = useSelector(state=> state.ice.numOfIce)
    const dispatch = useDispatch();
    
    return (
        <div>
            <div>
                <h5>Num Of Cakes :: {numOfCakes}</h5>
                {
                numOfCakes === 0 
                ?
                <div>
                    <h4>out of stock...! Plzz add stock</h4>
                    <input type="text" onChange={(e)=> setNumber(e.target.value)} value={number}/>
                    <button onClick={()=>dispatch(addCakes(number))}>Add cake stock</button> 
                </div>
                : <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
                }
            </div>

            <div>
                <h2>ICE CREAM PARLOUR</h2>
                <h5>Num Of ICECREAM :: {numOfIce}</h5>
                <button onClick={()=> dispatch(buyIce())}>Buy ICeCREAM</button>
            </div>
        </div>
    )
}

export default Cake
