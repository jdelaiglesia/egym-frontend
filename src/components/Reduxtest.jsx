import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../features/testSlice/testSlice'


const Reduxtest = () => {

const dispatch = useDispatch();
const testValue = useSelector(state => state.testSlice)



  return (
    <div>
        <h1>{testValue}</h1>
        <button onClick={()=> dispatch(increment())}>Sumar</button>
    </div>
  )
}

export default Reduxtest