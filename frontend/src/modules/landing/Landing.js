import React from 'react'
import Header from '../Header/header'
import Image from 'next/image'
import Link from 'next/link'
import Latest1 from '../../../public/Admin/images/latest1.png'
import Latest2 from '../../../public/Admin/images/latest2.png'
function Landing() {
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
        
        </div>
        </section>
        </div>
    </section>
       </div>
     )
}

export default Landing