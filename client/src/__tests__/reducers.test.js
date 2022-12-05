// import out actions 
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from '../utils/actions';

import { reducer } from '../utils/reducers';

//create a sample of what our global state will look like 
const intitialState = {
    products: [],
    categories: [{ name: 'Food' }],
    currentCategory: '1',
};


// testing UPDATE_PRODUCTS  to see if we can add a product to the products array
test('UPDATE_PRODUCTS', () => {
    let newState = reducer(intitialState, {
        type: UPDATE_PRODUCTS,
        products: [{}, {}]
    });

    expect(newState.products.length).toBe(2);
    expect(intitialState.products.length).toBe(0);
});


// test how we can update categories 
test('UPDATE_CATEGORIES', () => {
    let newState = reducer(intitialState, {
        type: UPDATE_CATEGORIES,
        categories: [{}, {}]
    });

    expect(newState.categories.length).toBe(2);
    expect(intitialState.categories.length).toBe(1);
});

// with this test we are updating the state of `currentCategory` to a new string value instead of an array.
// when the test runs compare these values between newState and initialState to confirm that initialState has remained the same
test('UPDATE_CURRENT_CATEGORY', () => {
    let newState = reducer(intitialState, {
        type: UPDATE_CURRENT_CATEGORY,
        currentCategory: '2'
    });

    expect(newState.currentCategory).toBe('2');
    expect(intitialState.currentCategory).toBe('1');
})
