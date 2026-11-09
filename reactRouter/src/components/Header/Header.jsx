
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {

    const navLinkClass = ({ isActive }) =>
        `block py-2 px-3 duration-200 ${
            isActive
                ? "text-[#8B5E3C] font-semibold"
                : "text-[#4B3621]"
        } hover:text-[#A47148]`

    return (
        <header className="shadow-md sticky z-50 top-0">

            <nav className="bg-[#FFF9F0] border-b border-[#E8DCCB] px-4 lg:px-6 py-4">

                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <span className="text-2xl font-bold text-[#4B3621]">
                            Brewed <span className="text-[#A47148]">&</span> Co.
                        </span>
                    </Link>

                    {/* Navigation */}
                    <div className="flex items-center">
                        <ul className="flex flex-row gap-5 font-medium">

                            <li>
                                <NavLink to="/" className={navLinkClass}>
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/about" className={navLinkClass}>
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/menu" className={navLinkClass}>
                                    Menu
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/contact" className={navLinkClass}>
                                    Contact
                                </NavLink>
                            </li>

                        </ul>
                    </div>

                    {/* Order Button */}
                    <Link
                        to="/menu"
                        className="text-[#FFF9F0] bg-[#6F4E37] hover:bg-[#4B3621] font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                        Order Now
                    </Link>

                </div>
            </nav>
        </header>
    )
}

export default Header
