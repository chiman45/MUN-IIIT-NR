import CampusImage from '../../../images/Campus.png';
import './About.css';

const About = () => {
  return (
    <div className="container mt-5 div">
      <h1 className="text-center">ABOUT IIITNR</h1>
      <div className="row align-items-center mt-5">
        <div className="col-md-6">
          <img src={CampusImage} alt="Campus" className="img-fluid custom-image"/>
        </div>
        <div className="col-md-6 text-center">
          <p className='about-p'>
            The International Institute of Information Technology, Naya Raipur (IIIT-NR), was established by the Government of Chhattisgarh with a mission to 
            achieve excellence in higher education, research, and development in Information Technology (IT) and related fields. The institute is dedicated to 
            the dissemination of knowledge and the cultivation of entrepreneurial skills among its students, empowering them to tackle real-world challenges effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
