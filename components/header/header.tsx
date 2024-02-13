import Link from 'next/link'
import React from 'react'

const Header = () => {
  return <header>
    <nav>
        <div className="navbar justify-between bg-base-300">
            <Link href="/" className="btn btn-ghost text-lg">
                Next Amazon V2
            </Link>
            <ul className="flex">
                <li>
                    <Link className="btn btn-ghost rounded-btn" href="/cart">Cart</Link>
                </li>
                <li>
                    <Link className="btn btn-ghost rounded-btn" href="/signin">Sign In</Link>
                </li>
            </ul>
        </div>
    </nav>
  </header>
}

export default Header