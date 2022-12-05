// Hook is meant to manage a greater level of state, as useState is for managing simplier amounts of state
import { useReducer } from 'react';

// import out actions 
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        // if action type value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
        case UPDATE_PRODUCTS:
            return{
                ...state,
                products: [...action.products],
            };
        
        // if action type value is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categories array 
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            };
        
        //
        case UPDATE_CURRENT_CATEGORY: 
            return {
                 ...state,
                currentCategory: action.currentCategory
            }
                
       
        // if it's none of these actions, do not update state at all and keep things the same!    
        default:
            return state;
    }
}


// will be used to help intiialize our global state object., then provide updating functionality by running through reducer()
export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
  }