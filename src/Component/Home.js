import React from 'react';
import "./Home.css"
import About from "./About"
import Product from "./Product"
import Service from "./Service"
import Contact from "./Contact"





class Nav extends React.Component {
    state = {}
    render() {
        return (
            <>
                <div class="navbar">
                    <a class="logo" href="#"> &#9827; NAVID &#9827;</a>
                    <ul class="nav">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#Product">Product</a></li>
                        <li><a href="#services">Service</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <About />
                <Product />
                <Service />
                <Contact />
            </>
        );
    }
}

export default Nav;