import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({user}) => {
    
    return (
        <nav>
        <div className="logo">
        <img src="https://seeklogo.com/images/P/post-cereal-logo-A0D35CBD86-seeklogo.com.png" alt="logo" />
        </div>
        <ul className="nav-links">
        {!user ? (
            <>
            <li>
                <Link to="/">Login</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
            </>
            ) : 
            (                
                <>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/add">Add</Link>
                </li>
                </>
                )
            }
            </ul>
            </nav>
            
            );
        };
        
        export default Header;