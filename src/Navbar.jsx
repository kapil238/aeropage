import React, { useState } from 'react';
import { Link } from 'react-scroll';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const Navbar = ({ navClass, linkClassName }) => (
    <NavComponent navClass={navClass} linkClassName={linkClassName} />
);

export const NavComponent = ({ onClick, navClass, linkClassName }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className={navClass}>
            {["Home","About", "Demos", "Features"].map(section => (
                <Link 
                    key={section}
                    to={section}
                    smooth={true}
                    className={linkClassName}
                    onClick={onClick}
                >
                    {section}
                </Link>
            ))}
            <div onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                <Link 
                    to="Landing"
                    smooth={true}
                    className={linkClassName}
                    onClick={onClick}
                >
                    Landing
                </Link>
                {isDropdownOpen && (
                    <div className="dropdown-menu">
                        <Link 
                            to="Agency"
                            smooth={true}
                            className={linkClassName}
                            onClick={onClick}
                        >
                            Agency
                        </Link>
                        <Link 
                            to="Agency Two"
                            smooth={true}
                            className={linkClassName}
                            onClick={onClick}
                        >
                            Agency Two
                        </Link>
                        <Link 
                            to="Charity"
                            smooth={true}
                            className={linkClassName}
                            onClick={onClick}
                        >
                            Charity
                        </Link>
                        <Link 
                            to="Company"
                            smooth={true}
                            className={linkClassName}
                            onClick={onClick}
                        >
                            Company
                        </Link>
                        <Link 
                            to="Creative"
                            smooth={true}
                            className={linkClassName}
                            onClick={onClick}
                        >
                            Creative
                        </Link>
                        <Link 
                            to="Ebook"
                            smooth={true}
                            className={linkClassName}
                            onClick={onClick}
                        >
                            Ebook
                        </Link>
                        <Link 
                            to="Finance"
                            smooth={true}
                            className={linkClassName}
                            onClick={onClick}
                        >
                            Finance
                        </Link>
                        <Link 
                            to="Hosting"
                            smooth={true}
                            className={linkClassName}
                            onClick={onClick}
                        >
                            Hosting
                        </Link>
                        <Link 
                            to="Marketing"
                            smooth={true}
                            className={linkClassName}
                            onClick={onClick}
                        >
                            Marketing
                        </Link>
                        <Link 
                            to="Marketing 2"
                            smooth={true}
                            className={linkClassName}
                            onClick={onClick}
                        >
                            Marketing 2
                        </Link>
                        <Link 
                            to="Marketing 3"
                            smooth={true}
                            className={linkClassName}
                            onClick={onClick}
                        >
                            Marketing 3
                        </Link>
                        <Link 
                            to="Photography"
                            smooth={true}
                            className={linkClassName}
                            onClick={onClick}
                        >
                            Photography
                        </Link>
                        <Link 
                            to="Portfolio"
                            smooth={true}
                            className={linkClassName}
                            onClick={onClick}
                        >
                            Portfolio
                        </Link>
                        <Link 
                            to="Portfolio 2"
                            smooth={true}
                            className={linkClassName}
                            onClick={onClick}
                        >
                            Portfolio 2
                        </Link>
                        <Link 
                            to="Startup"
                            smooth={true}
                            className={linkClassName}
                            onClick={onClick}
                        >
                            Startup
                        </Link>
                        <Link 
                            to="Web Designer"
                            smooth={true}
                            className={linkClassName}
                            onClick={onClick}
                        >
                            Web Designer
                        </Link>
                        
                      
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;