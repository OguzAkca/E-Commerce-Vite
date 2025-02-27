import axios from "axios"

const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
})

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: "SET_FETCH_STATE", payload: "LOADING" }); // Spinner için

  try {
    const response = await api.get("/products");

    dispatch({ type: "SET_PRODUCT_LIST", payload: response.data.products });
    dispatch({ type: "SET_TOTAL", payload: response.data.total });
    dispatch({ type: "SET_FETCH_STATE", payload: "FETCHED" }); // Spinner kapatmak için
  } catch (error) {
    dispatch({ type: "SET_FETCH_STATE", payload: "ERROR" });
    console.error("Error fetching products:", error);
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await api.post("/login", {
      email: userData.email,
      password: userData.password,
    })

    const user = response.data

    dispatch({ type: "SET_USER", payload: user })

    // Store both token and user data
    if (userData.rememberMe) {
      localStorage.setItem("token", user.token)
      localStorage.setItem("userData", JSON.stringify(user))
    } else {
      sessionStorage.setItem("token", user.token)
      sessionStorage.setItem("userData", JSON.stringify(user))
    }

    return user
  } catch (error) {
    throw error.response?.data || error
  }
}

export const clearUser = () => {
  // Clear both token and user data
  localStorage.removeItem("token")
  localStorage.removeItem("userData")
  sessionStorage.removeItem("token")
  sessionStorage.removeItem("userData")
  return { type: "CLEAR_USER" }
}

// New action to initialize user from storage
export const initializeUserFromStorage = () => (dispatch) => {
  const userData = localStorage.getItem("userData") || sessionStorage.getItem("userData")
  if (userData) {
    dispatch({ type: "SET_USER", payload: JSON.parse(userData) })
  }
}

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
      const response = await fetch("https://workintech-fe-ecommerce.onrender.com/roles")
      const roles = await response.json()
      dispatch(setRoles(roles))
      dispatch(setFetchState("FETCHED"))
    } catch (error) {
      console.error("Error fetching roles:", error)
      dispatch(setFetchState("FAILED"))
    }
  }
}
