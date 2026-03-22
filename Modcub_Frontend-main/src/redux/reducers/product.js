import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const productReducer = createReducer(initialState, {
  productCreateRequest: (state) => {
    state.isLoading = true;
  },
  productCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.product = action.payload;
    state.success = true;
  },
  productCreateFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  // get all products of shop
  getAllProductsShopRequest: (state) => {
    state.isLoading = true;
  },
  getAllProductsShopSuccess: (state, action) => {
    state.isLoading = false;
    state.products = action.payload;
  },
  getAllProductsShopFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // delete product of a shop
  deleteProductRequest: (state) => {
    state.isLoading = true;
  },
  deleteProductSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  },
  deleteProductFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get all products
  getAllProductsRequest: (state) => {
    state.isLoading = true;
  },
  getAllProductsSuccess: (state, action) => {
    state.isLoading = false;
    state.allProducts = action.payload;
  },
  getAllProductsFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  
  
  // get product by id
  
  getProductById: (state) => {
    state.isLoading = true;
  },
  getShopProductByIdSuccess: (state, action) => {
    state.isLoading = false;
    state.productById = action.payload;
  },
  getShopProductByIdFailed: (state, action) => {
    state.isLoading = false;
    state.producterror = action.payload;
  },

  // Edit product
  productEditRequest: (state) => {
    state.isLoading = true;
},
productEditSuccess: (state, action) => {
    state.isLoading = false;
    state.editproduct = action.payload;
    state.success = true;
},
productEditFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
},
  
  clearErrors: (state) => {
    state.error = null;
  },
});

