import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "cantidad productos",
    value : 0
}


const testSlice = createSlice({
   name: 'testeo',
    initialState,
    reducers : {
        increment(state){
            state.value +=1;
            console.log('funciona el estado con su reducer desde la store con redux toolkit', state.value)
        }
    }
})


export const {increment} = testSlice.actions;
export default testSlice.reducer;