import React from 'react';
import Button from '@mui/material/Button';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import AirplayRoundedIcon from '@mui/icons-material/AirplayRounded';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    return (
        <div className="mar-top">
            <div className="home-inner">
                <section id="Home">
                    <div className="mb">
                        <div className="home-top d-flex">
                            <img src="https://themes.coderthemes.com/aeropage/assets/logo-sm-BYukjoxL.png" alt="" />
                            <div className="ver">v1.0.0</div>
                        </div>
                    </div>
                    <div className="mb">
                        <div className="home-med">
                            <h1 className='cl-2'><span className='cl-1'>AeroPage</span> - Multipurpose Landing Template</h1>
                        </div>
                    </div>
                    <div className="mb">
                        <div className="home-cen d-flex">
                            <p>The Make your website or web application perfect starting point for your next project and the ultimate resource for learning how experts build real websites with Tailwind CSS.</p>
                        </div>
                    </div>
                    <div className="mar-top">
                        <div className="home-bot">
                            <h4>Available In</h4>
                            <div className="available d-flex mar-top">
                                <div className="box-avail d-flex"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s" alt="" /><h4>Tailwind CSS 3</h4></div>
                                <div className="box-avail d-flex"><img src="https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png" alt="" /><h4>React 18</h4></div>
                                <div className="box-avail"><h4>Tailwind CSS 3</h4></div>
                                <div className="box-avail"><h4>Tailwind CSS 3</h4></div>
                                <div className="box-avail"><h4>Tailwind CSS 3</h4></div>
                                <div className="box-avail"><h4>Tailwind CSS 3</h4></div>
                                <div className="box-avail"><h4>Tailwind CSS 3</h4></div>
                                <div className="box-avail"><h4>Tailwind CSS 3</h4></div>
                                <div className="box-avail"><h4>Tailwind CSS 3</h4></div>
                                <div className="box-avail"><h4>Tailwind CSS 3</h4></div>
                                <div className="box-avail"><h4>Tailwind CSS 3</h4></div>

                            </div>
                            <div className="avail-but d-flex">
                                <Button variant="contained" sx={{backgroundColor:'rgb(234 88 12 )', gap:'10px'}} disableElevation>
                                    Landing Demos 
                                    <RemoveRedEyeOutlinedIcon />
                                </Button>
                                <Button 
                                    variant="contained" 
                                    sx={{
                                        backgroundColor: '#ea580c33', 
                                        gap:'10px',
                                        '&:hover': {
                                        backgroundColor: 'rgb(234 88 12 )',  // Hover background color
                                        }
                                    }} 
                                    disableElevation
                                    >
                                    Admin Demos
                                    <AirplayRoundedIcon/>
                                    </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mar-bot"></div>
            </div>
        </div>
    )
}

export default Home;