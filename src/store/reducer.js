import {createSlice} from '@reduxjs/toolkit'
import products from '../products.json'

const initialState = {
  products,
  selectedItem: {
    partNo: '',
    price: ''
  }
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadAllProducts: state => {
      state
    },
    addProduct: (state, action) => {
      state += action.payload 
    }
  }
})
