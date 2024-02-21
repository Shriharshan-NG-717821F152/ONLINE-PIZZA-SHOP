export const getAllPizzaReducer = (state = {} , action ) => {
    switch(action.type){
        case 'Get_PIZZAS_REQUEST':
            return{
                ...state
            }
        case 'GET_PIZZAS_SUCCESS':
                return{
                    pizzas : action.payload
                }
        case 'GET_PIZZAS_FAIL':
            return{
                erroe : action.payload
            }
        default:
            return state;
    }
};