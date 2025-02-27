const bosKume = {
    product : [],
    total: 0,
    loading: false,
  };

  const productSlice = createSlice({
    name:'product',
    bosKume,
    reducers: {
      setProducts: (state, action) => {
        state.products = action.payload.product;
        state.total = action.payload.total;
      },
      setLoading: (state, action) => {
        state.loading = action.payload;
      }
    }
  });

  export const {setProducts, setLoading} = productSlice.actions;
  export default productSlice.reducer;
  