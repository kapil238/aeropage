import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-scroll';
import SmallScreensNavbar from './SmallScreensNavbar';
import { useWindowWidthAndHeight } from './CustomHooks';
import Button from '@mui/material/Button';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const Header = () => {
    const [width, height] = useWindowWidthAndHeight();
    
    return (
        <header>
            <div className="header-inner">
                <Link to="Home" 
                      smooth={true} 
                      className="logo nav-link">
                    <img src="https://themes.coderthemes.com/aeropage/assets/logo-dark-CbL8c2A5.png" alt="" />
                </Link>
                {width > 1000 ? (
                    <Navbar navClass="nav-big" linkClassName="nav-big-link" />
                ) : (
                    <SmallScreensNavbar navClass="nav-small" linkClassName="nav-small-link" />
                )}
                <Button 
                    variant="contained" 
                    disableElevation
                    sx={{
                        borderRadius: '20px',
                        backgroundColor: 'RGBA(234,88,12,1)',
                        gap: '10px',
                    }}
                >
                    <CloudDownloadIcon /> Download
                </Button>
            </div>
        </header>
    );
};

export default Header;
