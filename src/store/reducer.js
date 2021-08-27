import {createSlice} from '@reduxjs/toolkit'
import products from '../products.json'

const initialState = {
  products,
}

/**
 * @description: creates a slice of one particular data set, in this case products,
 * all reducers are associated with the products slice
 */
export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadAllProducts: state => state,
    addProduct: (state, action) => {
      const itemInfo = {
        partNo: `#${action.payload.partNumber}`,
        price: action.payload.pricing.list
      }
      console.log(itemInfo)
    },
  }
})

export const {loadAllProducts, addProduct} = productsSlice.actions

export default productsSlice.reducer