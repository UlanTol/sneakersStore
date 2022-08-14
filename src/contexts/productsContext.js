import React, { useReducer } from "react";
import axios from "axios";

export const productsContext = React.createContext();

const INIT_STATE = {
  products: [],
  oneProduct: null,
  pages: 0,
  categories: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.results,
        pages: Math.ceil(action.payload.count / 5),
      };

    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };

    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
  }
}

const API = "https://morning-depths-08273.herokuapp.com";

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //! Read

  //! Read - Get Products
  async function getProducts() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //configuration
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(
        `${API}/products/${window.location.search}`,
        config
      );
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }
  //! Read - Get Categories
  async function getCategories() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //configuration
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/category/`, config);
      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data.results,
      });
      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  //! Create

  //! Create a Product
  async function addProduct(newProduct, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //configuration
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/products/`, newProduct, config);
      console.log(res);
      navigate("/products");
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  //! Create a Comment
  async function addComment(comment, productId) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //configuration
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/comments/`, comment, config);
      // console.log(res);
      getOneProduct(productId);
    } catch (err) {
      console.log(err);
    }
  }

  //! Delete
  //! Delete a Product
  async function deleteProduct(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //configuration
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.delete(`${API}/products/${id}/`, config);
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  //! Delete a Comment
  async function deleteComment(id, productId) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //configuration
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.delete(`${API}/comments/${id}/`, config);
      getOneProduct(productId);
    } catch (err) {
      console.log(err);
    }
  }

  //! Details, Get One Product to Edit
  async function getOneProduct(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //configuration
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/products/${id}`, config);
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  //! Update

  async function updateProduct(id, editedProduct, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //configuration
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.patch(
        `${API}/products/${id}/`,
        editedProduct,
        config
      );
      navigate("/products");
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  //! likes functionality
  async function switchLike(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      //configuration
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/products/${id}/like/`, config);
      getProducts();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <productsContext.Provider
      value={{
        products: state.products,
        pages: state.pages,
        categories: state.categories,
        oneProduct: state.oneProduct,
        getProducts,
        getCategories,
        addProduct,
        deleteProduct,
        getOneProduct,
        updateProduct,
        switchLike,
        addComment,
        deleteComment,
      }}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
