import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Shop from "../components/Shop/Shop";
import Header from "../components/Header/Header";
import styles from "./AppRouter.module.scss";
import Footer from "../components/Footer/Footer";
import {DataProvider} from "../context/GlobalContext";
import {CartProvider} from "react-use-cart";
import Cart from "../components/Cart/Cart";
import Wishlist from "../components/Wishlist/Wishlist";
import Account from "../components/Account/Account";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {WishlistProvider} from "react-use-wishlist";

import {useContext} from "react";
import {GlobalTheme} from "../context/ThemeContext";
import Blog from "../components/Blog/Blog";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Dashboard from "../components/Dashboard/Dashboard";
// import { AddBlog } from "../redux/Actions/Actions";
import AddBlog from "../components/AddBlog/AddBlog";
import {UseSelector, useSelector} from "react-redux";
import Faq from "../components/Faq/Faq.jsx";
import EditBlog from "../components/EditBlog/EditBlog";
import ScrollBtn from "../ScrollBtn/ScrollBtn";

const AppRouter = () => {
    const blogs = useSelector((state) => state.BlogReducer);

    useEffect(() => {
        localStorage.setItem("Blog", JSON.stringify(blogs));
    }, [blogs]);

    const {darkMode} = useContext(GlobalTheme);
    return (
        <main className={darkMode ? "dark" : "light"}>
            <WishlistProvider>
                <CartProvider>
                    <DataProvider>
                        {/*<ScrollBtn/>*/}
                        <BrowserRouter>
                            <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss={true}
                                draggable
                                pauseOnHover
                                theme="light"
                            />
                            <Header />
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/wishlist" element={<Wishlist/>}/>
                                <Route path="/cart" element={<Cart/>}/>
                                <Route path="/about" element={<About/>}/>
                                <Route path="/contact" element={<Contact/>}/>
                                <Route path="/shop" element={<Shop/>}/>
                                <Route path="/blogs" element={<Blog/>}/>
                                <Route path="/faq" element={<Faq/>}/>
                                <Route path="/addBlog" element={<AddBlog/>}/>
                                <Route path="/editBlog/:id" element={<EditBlog/>}/>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="/register" element={<Register/>}/>
                                <Route path="/dashboard" element={<Dashboard/>}/>
                                <Route path="/product/:id" element={<ProductDetail/>}/>
                            </Routes>
                            <Footer/>
                        </BrowserRouter>
                    </DataProvider>
                </CartProvider>
            </WishlistProvider>
        </main>
    );
};

export default AppRouter;
