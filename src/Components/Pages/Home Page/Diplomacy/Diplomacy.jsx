import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import MUNImage from '../../../../images/MUN.jpg';
import './Diplomacy.css';

AOS.init({ once: true });

const Diplomacy = () => {
  return (
    <div className="contain" id="About Us">
      <h1 className="text-center" data-aos="fade-up" data-aos-duration="8000">
        WORLD WHERE DIPLOMACY BEGINS
      </h1>
      <p className='mt-5' data-aos="fade-up" data-aos-duration="3000">
      MUN IIIT NR stands as a pinnacle of intellectual exchange and diplomatic engagement, drawing together a diverse array of individuals from various backgrounds and disciplines. Hosted with pride by the renowned Indian Institute of Information Technology, Naya Raipur (IIIT NR), this Model United Nations conference serves as a crucible for passionate participants to immerse themselves in the intricacies of global issues through meticulously crafted simulations of diplomatic debates and negotiations.
      </p>
      <div className="text-center mt-5 image-container" data-aos="fade-up" data-aos-duration="3000">
        <img src={MUNImage} alt="MUN Event" className="image" />
      </div>
    </div>
  );
};

export default Diplomacy;
