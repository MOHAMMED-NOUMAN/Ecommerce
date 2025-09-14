import React from 'react'
import Heading from "../Shared/Heading"
import ProductCard from './ProductCard'

import Img1 from './../../assets/product/p-1.jpg';
import Img2 from './../../assets/product/p-2.jpg';
import Img3 from './../../assets/product/p-3.jpg';
import Img4 from './../../assets/product/p-4.jpg';
import Img5 from './../../assets/product/p-5.jpg';
import Img7 from './../../assets/product/p-7.jpg';




const ProductsData=[
  {
    id:1,
    img:Img1,
    title:"Boat Headphone",
    price:"120",
    aosDelay:"0",
  },
  {
    id:2,
    img:Img2,
    title:"Rocky Mountain",
    price:"240",
    aosDelay:"200",
  },
  {
    id:3,
    img:Img3,
    title:"Goggles",
    price:"320",
    aosDelay:"400",
  },
  {
    id:4,
    img:Img4,
    title:"Boat Headphone",
    price:"120",
    aosDelay:"600",
  },
]

const Products = () => {
  return (
    <div>
      <div className="container">
        {/*Header Section*/}
        <Heading title="Our Products"
        subtitle={"Explore our products"}/>
        {/*Body Section*/}
        <ProductCard data={ProductsData}/>
      </div>
    </div>
  )
}

export default Products
