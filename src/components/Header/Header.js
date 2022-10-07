import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar header bg-slate-700 py-6">
            <div className="flex-1">
                <img src={logo} alt="" />
            </div>
                <div className="hidden lg:flex mr-5">
                <div>
                        <Link to="/">Shop</Link>
                        <Link to="/inventory">Inventory</Link>
                        <Link to="/orders">Orders</Link>
                        <Link to="/about">About</Link>
                    </div>
                </div>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar block lg:hidden">
                        <div className="w-10 rounded-full">
                            <i class="fa-solid fa-bars text-white mt-4"></i>
                        </div>
                    </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-slate-700 rounded-box w-52">
                        <li>
                            <a href="/shop">Shop</a>
                        </li>
                        <li><a href="/order">Inventory</a></li>
                        <li><a href="/order">Orders</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
        </div>
    );
};

export default Header;