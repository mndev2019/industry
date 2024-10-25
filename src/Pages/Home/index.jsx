//import React from 'react'

import Actionbox from "./Actionbox"
import Banner from "./Banner"
import Features from "./Features"
import Product from "./Product"
import Services from "./Services"
import Team from "./Team"
import Testimonial from "./Testimonial"

const Home = () => {
    return (
        <>
           <Banner/>
           <Services/>
           <Actionbox/>
           <Team/>
           <Product/>
           <Testimonial/>
           <Features/>
        </>
    )
}

export default Home