export const cartReducer=(state, action) => {
  switch (action.type) {


    //CART
      case "ADD_TO_CART": 
      return {...state, cart:[...state.cart, { ...action.payload, qty: 1 }]};

      case "REMOVE_FROM_CART": 
      return {...state, cart: state.cart.filter((c) => c.id !== action.payload.id)};

      case "CHANGE_CART_QTY":
        return {
          ...state,
          cart: state.cart.filter((c) =>
            c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
          ),
        };

 //WISHLIST
          case "ADD_TO_WISHLIST":
            return {
              ...state, wishlist:[...state.wishlist, { ...action.payload, qty: 1 }]
            };

            case "REMOVE_FROM_WISHLIST":
            return {
              ...state, wishlist: state.wishlist.filter((c) => c.id !== action.payload.id)
            };


      default:
          return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case 'SORT_BY_PRICE' :
      return {...state, sort:action.payload};

      case 'FILTER_BY_RATING' :
        return {...state, byRating: action.payload};

        case 'CLEAR_FILTERS':
          return {
            byRating: 0,
          };

      default :
      return state
  }
  
};