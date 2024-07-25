import MUNImage from '../../../images/MUN.jpg';
import './Diplomacy.css';

const Diplomacy = () => {
  return (
    <div className="contain div">
      <h1 className="text-center">WORLD WHERE DIPLOMACY BEGINS</h1>
      <p className='mt-5'>
        MUN IIIT NR stands as a pinnacle of intellectual exchange and diplomatic engagement, drawing together a diverse array of individuals from various backgrounds and disciplines. Hosted with pride by the renowned Indian Institute of Information Technology, Naya Raipur (IIIT NR), this Model United Nations conference serves as a crucible for passionate participants to immerse themselves in the intricacies of global issues through meticulously crafted simulations of diplomatic debates and negotiations.
        With an unwavering commitment to fostering collaboration, nurturing leadership qualities, and broadening perspectives, MUN IIIT NR plays a pivotal role in empowering its delegates to emerge as informed global citizens, equipped with the skills and insights necessary to navigate the complexities of our interconnected world. Whether students eager to expand their horizons, working professionals seeking to contribute their expertise, or enthusiasts driven by a shared commitment to positive change, all find a welcoming and stimulating environment within the vibrant tapestry of MUN IIIT NR.
        Here, amidst the spirited exchange of ideas and the pursuit of innovative solutions, the seeds of transformation are sown, and the promise of a brighter future is embraced with zeal and determination.
      </p>
      <div className="text-center mt-5 image-container">
        <img src={MUNImage} alt="MUN Event" className="image"/>
      </div>
    </div>
  );
};

export default Diplomacy;
