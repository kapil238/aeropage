import React from 'react';
import BasicCard from './Componet/BasicCard';
import Talwind from './img/talwindcss.svg'; // Import the SVG image
import AirplayOutlinedIcon from '@mui/icons-material/AirplayOutlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import Figma from './img/icons8-figma-50.png';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Customizable from './img/drag_16887067.png';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Features = () => {
  return (
    <section id="Features">
      <div className="mar-top">
        <div className="demo-inner">
          <section id="Demos">
            <div className="mb">
              <div className="home-top d-flex">
                <div className="demo">Features</div>
              </div>
              <div className="mb">
                <div className="demo-med j-flex">
                  <h3 className='demo-text-1'>Awesome Template Features</h3>
                </div>
              </div>
              <div className="mb">
                <div className="Features-bot d-flex mar-top">
                  {/* Passing props for each card */}
                  <BasicCard 
                    icon={<img src={Talwind} alt="Talwind CSS" style={{ width: '40px', height: '40px' , padding:'5px'}} />} 
                    title="Built With Tailwind CSS" 
                    description="Rapidly build modern websites without ever leaving your HTML" 
                  />
                  <BasicCard 
                    icon={<AirplayOutlinedIcon style={{ fontSize: '40px', color: '#f97316', padding:'5px' }} />} 
                    title="Ultra Responsive" 
                    description="Our fully Responsive design ensures your content is beautifully presented no matter what device your audience is using." 
                    />
                  <BasicCard 
                    icon={<Brightness4OutlinedIcon style={{ fontSize: '40px', color: '#f97316', padding:'5px' }} />} 
                    title="Dark Mode Support" 
                    description="Embark on a Rich Experience: Unveiling a Host of Advanced Features within Our Dark Mode Support Environment." 
                    />
                   <BasicCard 
                    icon={<ViewInArOutlinedIcon style={{ fontSize: '40px', color: '#f97316', padding:'5px' }} />} 
                    title="Production Ready" 
                    description="Our solutions have undergone extensive testing to ensure they can handle the demands of a production environment." 
                    />
                     <BasicCard 
                    icon={<img src={Figma} alt="Talwind CSS" style={{ width: '40px', height: '40px', padding:'5px' }} />} 
                    title="Hygienic Design" 
                    description="Our designs feature smooth and continuous surfaces, minimizing areas where dirt, bacteria, or contaminants can accumulate." 
                  />
                     <BasicCard 
                    icon={<QueryStatsIcon style={{ fontSize: '40px', color: '#f97316', padding:'5px' }} />} 
                    title="High Performance" 
                    description="We understand that your requirements are unique. Our high-performance solutions are customizable to match your specific goals." 
                    />
                     <BasicCard 
                    icon={<PublicOutlinedIcon style={{ fontSize: '40px', color: '#f97316', padding:'5px' }} />} 
                    title="Multi Browser Support" 
                    description="Our e-commerce store is rigorously tested and optimized to work flawlessly on all major web browsers, offering a consistent shopping experience to all our customers." 
                    />
                    <BasicCard 
                    icon={<TextSnippetOutlinedIcon style={{ fontSize: '40px', color: '#f97316', padding:'5px' }} />} 
                    title="Well Documented" 
                    description="Our documentation is a treasure trove of valuable information, from getting started guides to advanced tutorials. It's all there to help you make the most of our services." 
                    />
                    <BasicCard 
                    icon={<PeopleAltOutlinedIcon style={{ fontSize: '40px', color: '#f97316', padding:'5px' }} />} 
                    title="Great Support" 
                    description="Our support team is always ready to help. Whether you have questions, encounter issues, or need guidance, we're just a message or call away." 
                    />
                    <BasicCard 
                    icon={<img src={Customizable} alt="Talwind CSS" style={{ width: '40px', height: '40px', padding:'5px' }} />} 
                    title="Highly Customizable" 
                    description="Our product is designed to adapt to your specific requirements. Whether you're an individual, a business, or an organization, we provide the tools to customize it to your liking." 
                  />
                    <BasicCard 
                    icon={<HistoryEduOutlinedIcon style={{ fontSize: '40px', color: '#f97316', padding:'5px' }} />} 
                    title="Light as a Feather" 
                    description="From our years of experience and expertise in Development, we know users vary, they could have slow of fast network. They all deserve seamless experience in shopping with you. That's why our product is developed with fewer lines." 
                    />
                     <BasicCard 
                    icon={<StarBorderIcon style={{ fontSize: '40px', color: '#f97316', padding:'5px' }} />} 
                    title="UX Considered" 
                    description="A good design does not need any explanation because a good design can speak for itself. Out app doesn't only have a good User Interface, we also have considered User experience." 
                    />
                    

                  {/* Add more cards with different props as needed */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Features;
