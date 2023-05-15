import React from 'react';

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
            <a href="/">Login</a>
            </li>
            <li>
            <a href="/register">Register</a>
            </li>
            </>
            ) : 
            (                
                <>
                <li>
                <a href="/home">Home</a>
                </li>
                <li>
                <a href="/add">Add</a>
                </li>
                </>
                )
            }
            </ul>
            </nav>
            
            );
        };
        
        export default Header;