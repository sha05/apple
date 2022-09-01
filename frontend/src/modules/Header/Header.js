import React from 'react'
import Link from 'next/link'
import icon from '../../../public/Admin/images/icon.png'
import Image from 'next/image'
function Header() {
  return (
    <div>
    <ul className='Header'>
      
      <li><Link className='Credentials' href="/home" >Home</Link></li>
      <li><Link className='Credentials' href="/products">Products</Link></li>
      <li className='icon'><Link href=""><Image src={icon} alt='icon'/></Link></li>
      <li><Link className='Credentials' href="/login" >Login</Link></li>
      <li><Link className='Credentials' href="www.instagram.com">Sign Up</Link></li>
    </ul>
    </div>
 
  )
}

export default Header