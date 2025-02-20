// Client Actions
export const setUser = (user) => ({ type: "SET_USER", payload: user })
export const setRoles = (roles) => ({ type: "SET_ROLES", payload: roles })
export const setTheme = (theme) => ({ type: "SET_THEME", payload: theme })
export const setLanguage = (language) => ({ type: "SET_LANGUAGE", payload: language })

// Product Actions
export const setCategories = (categories) => ({ type: "SET_CATEGORIES", payload: categories })
export const setProductList = (productList) => ({ type: "SET_PRODUCT_LIST", payload: productList })
export const setTotal = (total) => ({ type: "SET_TOTAL", payload: total })
export const setFetchState = (fetchState) => ({ type: "SET_FETCH_STATE", payload: fetchState })
export const setLimit = (limit) => ({ type: "SET_LIMIT", payload: limit })
export const setOffset = (offset) => ({ type: "SET_OFFSET", payload: offset })
export const setFilter = (filter) => ({ type: "SET_FILTER", payload: filter })

// Shopping Cart Actions
export const setCart = (cart) => ({ type: "SET_CART", payload: cart })
export const setPayment = (payment) => ({ type: "SET_PAYMENT", payload: payment })
export const setAddress = (address) => ({ type: "SET_ADDRESS", payload: address })

// Thunk action creator for roles
export const fetchRoles = () => async (dispatch, getState) => {
  const { client } = getState()
  if (client.roles.length === 0) {
    dispatch(setFetchState("FETCHING"))
    try {
      // Simulating an API call
      const response = await fetch("https://api.example.com/roles")
      const roles = await response.json()
      dispatch(setRoles(roles))
      dispatch(setFetchState("FETCHED"))
    } catch (error) {
      console.error("Error fetching roles:", error)
      dispatch(setFetchState("FAILED"))
    }
  }
}

