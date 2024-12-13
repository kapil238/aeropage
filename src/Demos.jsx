import React from 'react';
import ImgMediaCard from './Componet/ImgMediaCard';
import img1card from './img/agency-D0FsEmBD.png'; 
import img2card from './img/agency-2-DqU9OO_Z.png'; 
import img3card from './img/charity-ANKbXGSr.png'; 
import img4card from './img/company-BYixSO4d.png'; 
import img5card from './img/creative-ayTu2DKC.png'; 
import img6card from './img/ebook-C_rZdJXN.png'; 
import img7card from './img/finance-DId5xO-g.png'; 
import img8card from './img/hosting-C_bWqr4i.png'; 
import img9card from './img/marketing-DXMDPFg3.png'; 
import img10card from './img/marketing-2-2esmZbfd.png'; 
import img11card from './img/marketing-3-BRunKE4o.png'; 
import img12card from './img/photography-DuKMqeXs.png'; 
import img13card from './img/portfolio-BnWlr3or.png'; 
import img14card from './img/portfolio-2-B3y-cUY0.png'; 
import img15card from './img/startup-kQNPImyg.png'; 
import img16card from './img/web-designer-BB2SjhPM.png'; 


const Demos = () => {
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
                <h3 className='demo-text-1'>Landing Demo</h3>
                <p className='d-flex'>
                  Elevate Your Presence: Unveiling the Power of Our Landing Demo!
                </p>
              </div>
            </div>
            <div className="mb">
              <div className="demo-bot d-flex mar-top">
                <ImgMediaCard
                  image={img1card}
                  title="Agency"
                  link="/Agency"
                />
                <ImgMediaCard
                  image={img2card}
                  title="Agency-2"
                />
                <ImgMediaCard
                  image={img3card}
                  title="Charity"
                />
                <ImgMediaCard
                  image={img4card}
                  title="Company"
                />
                <ImgMediaCard
                  image={img5card}
                  title="Creative"
                />
                <ImgMediaCard
                  image={img6card}
                  title="E-book"
                />
                <ImgMediaCard
                  image={img7card}
                  title="Finance"
                />
                <ImgMediaCard
                  image={img8card}
                  title="Hosting"
                />
                <ImgMediaCard
                  image={img9card}
                  title="Marketing"
                />
                <ImgMediaCard
                  image={img10card}
                  title="Marketing-2"
                />
                <ImgMediaCard
                  image={img11card}
                  title="Marketing-3"
                />
                <ImgMediaCard
                  image={img12card}
                  title="Photography"
                />
                <ImgMediaCard
                  image={img13card}
                  title="Portfolio"
                />
                 <ImgMediaCard
                  image={img14card}
                  title="Portfolio-2"
                />
                 <ImgMediaCard
                  image={img15card}
                  title="Startup"
                />
                 <ImgMediaCard
                  image={img16card}
                  title="Web-designer"
                />
              </div>
            </div>
          </div>
          <scroll/>
        </section>
      </div>
    </div>



    );
};

export default Demos;
