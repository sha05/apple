import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
    <ul className='Footer'>
      <li>Follow Us On :</li>
      <li><Link className='link' href="https://www.facebook.com/">Facbook </Link></li>
      <li>|</li>
      <li><Link className='link' href="https://www.instagram.com/">Instaram </Link></li>
      <li>|</li>
      <li><Link className='link' href="https://www.linkedin.com">Linkedin</Link></li>
    </ul>
  </div>
  )
}

export default Footer