export const initialState = {
  basket: [
    
  //   {
  //   id:"2",
  //   title:"Atomic Habits",
  //   price: 11.96,
  //   rating: 5,
  //   image: "https://images-na.ssl-images-amazon.com/images/I/51vSbWpF+dS._SX329_BO1,204,203,200_.jpg"
  // },

  // {
  //   id:"4",
  //   title:"Atomic Habits",
  //   price: 11.96,
  //   rating: 5,
  //   image: "https://images-na.ssl-images-amazon.com/images/I/51vSbWpF+dS._SX329_BO1,204,203,200_.jpg"
  // }

],
  user: null,
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount,item) => item.price + amount, 0);

const reducer = (state, action) =>  {
  console.log(action);
  switch(action.type){
    case 'ADD_TO_BASKET':
      // logic for adding item to basket...
      return {
        ...state,
      basket: [...state.basket, action.item]};
      
      case 'REMOVE_FROM_BASKET' :
         // logic for removing item from basket...

         //we clone the basket
         let newBasket = [...state.basket];

        //  return{
        //    ...state,
        //    basket: state.basket.filter(item => item.id !== action.id)
        //  }

         const index = state.basket.findIndex(
           (basketItem) => basketItem.id === action.id);

         if (index >= 0) {
           //item exists in basket, remove it...
           newBasket.splice(index, 1);
         } else {
           console.warn(
             `Can't remove product (id: ${action.id} as its not in basket.)`
           );
         }

         return {...state, basket: newBasket};

         case "SET_USER":
           return {
             ...state,
             user: action.user
           };

         default:
         return state;
  }
}

export default reducer;