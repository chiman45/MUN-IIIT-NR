import React from 'react';
import CampusImage from '../../../images/Campus.png';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({once:true});
const About = () => {

  return (
    <div>
<div className="contain div" id="About Us">
        <h1 className="text-center" data-aos="fade-up"
     data-aos-duration="6000">ABOUT IIITNR</h1>
      <div className="mt-5 about-container">
        <div className="col-md-6 text-center img-container" data-aos="fade-up"  data-aos-duration="3000">
          <img src={CampusImage} alt="Campus" className="custom-image" />
        </div>
        <div className="col-md-6 text-center p-container">
          <p className='about-p'  data-aos="fade-up"  data-aos-duration="3000">
            The International Institute of Information Technology, Naya Raipur (IIIT-NR), was established by the Government of Chhattisgarh with a mission to
            achieve excellence in higher education, research, and development in Information Technology (IT) and related fields. The institute is dedicated to
            the dissemination of knowledge and the cultivation of entrepreneurial skills among its students, empowering them to tackle real-world challenges effectively.
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default About;
