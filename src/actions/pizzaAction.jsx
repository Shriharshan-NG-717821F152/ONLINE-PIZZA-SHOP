import axios from 'axios'

export const getAllPizzas = () => dispatch =>{
    dispatch({type:'Get_PIZZAS_REQUEST'})
    try {
        const res = axios.get('/api/pizzas/getPizzas')
        console.log(res)
        dispatch({type:'Get_PIZZAS_SUCCESS',payload:res.data})
    } catch (err) {
        dispatch({type:'Get_PIZZAS_FAIL',payload:err})
    }
}