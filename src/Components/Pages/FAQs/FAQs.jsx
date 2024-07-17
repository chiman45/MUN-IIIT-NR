import './FAQs.css';
import arrow from '../../../images/arrow.svg';

const FAQs = () => {
  return (
    <div className="faq-container">
      <h1>FAQs</h1>
      <div className='flex-container'>
        <div className="column">
          <div className='faq-block'>
            <div className='question collapsed' data-bs-toggle="collapse" data-bs-target="#q1">
              Question 1: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, qui!
              <div className='circle'><img src={arrow} alt="arrow" /></div>
            </div>
            <div className="collapse answer" id="q1">
              Answer 1: Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
          </div>
          <div className='faq-block'>
            <div className='question collapsed' data-bs-toggle="collapse" data-bs-target="#q2">
              Question 2: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, qui!
              <div className='circle'><img src={arrow} alt="arrow" /></div>
            </div>
            <div className="collapse answer" id="q2">
              Answer 2: Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
          </div>
          <div className='faq-block'>
            <div className='question collapsed' data-bs-toggle="collapse" data-bs-target="#q3">
              Question 3: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, qui!
              <div className='circle'><img src={arrow} alt="arrow" /></div>
            </div>
            <div className="collapse answer" id="q3">
              Answer 3: Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='faq-block'>
            <div className='question collapsed' data-bs-toggle="collapse" data-bs-target="#q4">
              Question 4: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, qui!
              <div className='circle'><img src={arrow} alt="arrow" /></div>
            </div>
            <div className="collapse answer" id="q4">
              Answer 4: Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
          </div>
          <div className='faq-block'>
            <div className='question collapsed' data-bs-toggle="collapse" data-bs-target="#q5">
              Question 5: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, qui!
              <div className='circle'><img src={arrow} alt="arrow" /></div>
            </div>
            <div className="collapse answer" id="q5">
              Answer 5: Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
          </div>
          <div className='faq-block'>
            <div className='question collapsed' data-bs-toggle="collapse" data-bs-target="#q6">
              Question 6: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, qui!
              <div className='circle'><img src={arrow} alt="arrow" /></div>
            </div>
            <div className="collapse answer" id="q6">
              Answer 6: Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
