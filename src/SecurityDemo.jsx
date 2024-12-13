import React from 'react';
import ImgMediaCard from './Componet/ImgMediaCard';
import img1card from './img/auth-login-5XvF4QKP.png';
import img2card from './img/auth-register-Rwvlw2jD.png';
import img3card from './img/auth-logout-Di-X3u-g.png';
import img4card from './img/auth-recoverpw-r8H76cS5.png';
import img5card from './img/auth-reset-password-CmbYlnOX.png';
import Login from './Login'

const SecurityDemo = () => {
  return (
    <div className="mar-top">
      <div className="demo-inner">
        <section id="Demos">
          <div className="mb">
            <div className="home-top d-flex">
              <div className="demo">Demo</div>
            </div>
            <div className="mb">
              <div className="demo-med j-flex">
                <h3 className="demo-text-1">Security Demo</h3>
                <p className="d-flex">
                  Serves as the perfect starting point for your next project, showcasing expertise in building real websites with Tailwind CSS.
                </p>
              </div>
            </div>
            <div className="mb">
              <div className="demo-bot d-flex mar-top">
                <ImgMediaCard
                  image={img1card}
                  title="Sign In"
                  link="./Login"
                />
                <ImgMediaCard
                  image={img2card}
                  title="Sign Up"
                  link="/signup"
                />
                <ImgMediaCard
                  image={img3card}
                  title="LogOut"
                  link="/logout"
                />
                <ImgMediaCard
                  image={img4card}
                  title="Forgot Password"
                  link="/forgot-password"
                />
                <ImgMediaCard
                  image={img5card}
                  title="Reset Password"
                  link="/reset-password"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SecurityDemo;
