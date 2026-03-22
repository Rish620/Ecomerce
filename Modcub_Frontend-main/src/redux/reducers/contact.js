import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  contactList: [], // Initialize with an empty array
  error: null,
  success: false,
};

export const contactReducer = createReducer(initialState, {
    contactCreateRequest: (state) => {
    state.isLoading = true;
  },
  contactCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.contact = action.payload;
    state.success = true;
  },
  contactCreateFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  // get all products of shop
  getAllContactRequest: (state) => {
    state.isLoading = true;
  },
  getAllContactSuccess: (state, action) => {
    state.isLoading = false;
    state.contactList = action.payload;
  },
  getAllContactFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  
  
  clearErrors: (state) => {
    state.error = null;
  },
});

