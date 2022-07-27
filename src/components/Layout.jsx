import React from "react";

import Hero from "./OnePage/Hero";
import NavBar from "./OnePage/NavBar";




const Layout = ({children}) => {

    return (
        <div className="container">

            <header>
                <NavBar/>
            </header>
            <body>
                <Hero/>
            </body>


        </div>
    )
}

export default Layout;