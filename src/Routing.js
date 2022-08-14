import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import Loader from "./components/Loader/Loader";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import ProductsDetails from "./components/ProductDetails/ProductDetails";
import ProductsList from "./components/ProductsList/ProductsList";
import Registration from "./components/Registration/Registration";
import SuccessfullRegister from "./components/SuccessfullRegister/SuccessfullRegister";
import { authContext } from "./contexts/authContext";
import Payment from "./components/Payment/Payment";
import Forgot from "./components/Forgot/Forgot";
import OrderForm from "./components/OrderForm/OrderForm";
import ThankYou from "./components/ThankYou/ThankYou";
import Fav from "./components/Fav/Fav";

import SimpleMap from "./components/Address/Address";

const Routing = () => {
  const { loading, currentUser } = useContext(authContext);
  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Main />}>
        Main
      </Route>
      <Route
        path="/login"
        element={currentUser ? <Navigate to="/products" replace /> : <Login />}
      />
      <Route
        path="/registration"
        element={
          currentUser ? <Navigate to="/products" replace /> : <Registration />
        }
      />
      <Route
        path="/successfull-registration"
        element={
          currentUser ? (
            <Navigate to="/products" replace />
          ) : (
            <SuccessfullRegister />
          )
        }
      />
      <Route
        path="/products"
        element={
          currentUser ? <ProductsList /> : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/add"
        element={
          currentUser ? <AddProduct /> : <Navigate to="/login" replace />
        }
      />

      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order-form" element={<OrderForm />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/thank" element={<ThankYou />} />
      <Route path="/address" element={<SimpleMap />} />
      <Route path="/products/:id" element={<ProductsDetails />} />
      <Route path="/favorites" element={<Fav />} />
    </Routes>
  );
};

export default Routing;
