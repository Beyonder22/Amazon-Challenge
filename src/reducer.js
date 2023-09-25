export const initialState = {
	basket:[],
	user:null
};
export const getBasketTotal = (basket) =>
	 basket?.reduce((amount,item)=> item.price+amount ,0)

//when using arrow funciton be sure to use parenthesis when you want to return a value
//using curly braces will result in error	 



const reducer = (state, action) => {
	switch(action.type) {
		case 'ADD_TO_BASKET':
			return {
				...state,
				basket: [...state.basket,action.item],
			};
		case 'EMPTY_BASKET':
			return {
				...state,
				basket:[]
			}
		case 'REMOVE_FROM_BASKET':
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id===action.id);
			let newBasket = [...state.basket];
			if(index>=0){
				newBasket.splice(index,1);
			}
			return {
				...state,
				basket:newBasket
			}
		case 'SET_USER':
			return {
				...state,
				user:action.user
			}

		default:
			return state;
	}
};
export default reducer;