import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    brands: [],
};

const productsSlice = createSlice(
    name: 'allProducts',
    initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.data;
        },
        getBrands(state) {
            for(let i=0; i<state?.products.length; i++){
                const curr = state?.products[i].brand;
                if(state?.brands.indexOf(curr)=== -1){
                    state.brands = [...state.brands, curr];
                }
            }
        }
    }
);