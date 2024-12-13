import React from 'react';
import ImgMediaCard from './Componet/ImgMediaCard';
import img1card from './img/admin-dashboard-D3COAjKW.png'; 
import img2card from './img/admin-chat-BrRPXtAI.png'; 
import img3card from './img/admin-project-CmZtqSg8.png'; 
import img4card from './img/ui-components-B-3V3jSh.png'; 


const AdminDemo = () => {
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
                <h3 className='demo-text-1'>Admin  Demo</h3>
                <p className='d-flex'>
                a cutting-edge, one-page template designed for unparalleled performance and seamless user experiences
                </p>
              </div>
            </div>
            <div className="mb">
              <div className="demo-bot d-flex mar-top">
                <ImgMediaCard
                  image={img1card}
                  title="Dashboard"
                />
                <ImgMediaCard
                  image={img2card}
                  title="Chat"
                />
                <ImgMediaCard
                  image={img3card}
                  title="Project"
                />
                <ImgMediaCard
                  image={img4card}
                  title="Ui-Components"
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

export default AdminDemo;
