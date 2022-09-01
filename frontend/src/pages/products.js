import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Iphone11 from '../../public/Admin/images/iphone11.png'
import Iphone12 from '../../public/Admin/images/iphone12.png'
import Iphone13 from '../../public/Admin/images/iphone13.png'
import Iphonex from '../../public/Admin/images/iphonex.png'
import Latest1 from '../../public/Admin/images/latest1.png'
import Latest2 from '../../public/Admin/images/latest2.png'
import Header from '../modules/Header/header'
function products() {
  return (
  <div>
    <Header/>
    <section className="latest">
      <div className="latestproduct">
        <h1>IPHONE 13</h1>
        <section className="maindes">
        <li  className='Content'><h1>Your new superpower.</h1><span className="maincont">A lightning‑fast chip. A leap in battery life. And all‑new photo and video capabilities.IPhone 13 lets you do things you never could before in two great sizes.</span></li>
        <div className="firstimg"><Image src={Latest1} alt='latest1' width='1000' height='600' /></div>
        </section>
        <section className="Content2">
        <div className="img2">
        <li><Image src={Latest2} alt='latest2' width='800' height='600' /></li>
        </div>
        <div className="img2cont">
        <li className="img2name"><h1 ClassName='headeriphone'>IPHONE 13</h1></li>
        <li ClassName="myreal"><h2 ClassName='headeriphone'>My.Real.Pro</h2></li>
        <li><p>From &#8377;119900.0 before trade-in</p></li>
        <div className='buynow' ><Link href="#listofproducts">Buy Now</Link></div>
        </div>
        </section>
        </div>
    </section>
    <h1 className="Title">Which iPhone is right for you?</h1>
    <section className="listofproducts" id ="listofproducts">
      <div className="addtocart">
        <div className="iphone13">
        <li><Image src={Iphone13} width='350' height='300' alt='iphone13'/></li>
        <li ClassName='addtocart'><button ClassName="addtobutton" type="button">ADD TO CART</button></li>
        </div>
        <div> 
        <li><Image src={Iphone11} width='350' height='300' alt='iphone11'/></li>
        <li ClassName='addtocart'><button ClassName="addtobutton" type="button">ADD TO CART</button></li>
        </div>
        <div className='iphone12'>
        <li><Image src={Iphone12} width='300' height='300' alt='iphone12'/></li>
        <li ClassName='addtocart'><button ClassName="addtobutton" type="button">ADD TO CART</button></li>
        </div>
        <div className='iphonex'>
        <li><Image src={Iphonex} width='250' height='300' alt='iphonex'/></li>
        <li ClassName='addtocart'><button ClassName="addtobutton" type="button">ADD TO CART</button></li>
        </div>
      </div>
    </section>
    </div>

  )
}

export default products