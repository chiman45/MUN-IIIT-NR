import React, { useState } from 'react';
import './FAQs.css';
import arrow from '../../../images/arrow.svg';

const FAQs = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="faq-container">
      <h1 data-aos="fade-up"  data-aos-easing="linear" data-aos-duration="3500" data-aos-delay="300">FAQs</h1>
      <div className='flex-container'>
        <div className="column">
          
          <div className='faq-block' data-aos="fade-right"    data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="3000"
     data-aos-delay="600">
            <div
              className={`question ${activeQuestion === 'q1' ? 'expanded' : 'collapsed'}`}
              onClick={() => toggleAnswer('q1')}
            >
              Question 1: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, qui!
              <div className='circle'>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className={`answer ${activeQuestion === 'q1' ? 'show' : ''}`} id="q1">
              Answer 1: Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
          </div>

          <div className='faq-block' data-aos="fade-right"   data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="3000"
     data-aos-delay="900">
            <div
              className={`question ${activeQuestion === 'q2' ? 'expanded' : 'collapsed'}`}
              onClick={() => toggleAnswer('q2')}
            >
              Question 2: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, qui!
              <div className='circle'>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className={`answer ${activeQuestion === 'q2' ? 'show' : ''}`} id="q2">
              Answer 2: Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
          </div>

          <div className='faq-block' data-aos="fade-right"    data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="3000"
     data-aos-delay="1200">
            <div
              className={`question ${activeQuestion === 'q3' ? 'expanded' : 'collapsed'}`}
              onClick={() => toggleAnswer('q3')}
            >
              Question 3: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, qui!
              <div className='circle'>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className={`answer ${activeQuestion === 'q3' ? 'show' : ''}`} id="q3">
              Answer 3: Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
          </div>

        </div>

        <div className='column'>

          <div className='faq-block' data-aos="fade-left" 
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="3000"
          data-aos-delay="600">
            <div
              className={`question ${activeQuestion === 'q4' ? 'expanded' : 'collapsed'}`}
              onClick={() => toggleAnswer('q4')}
            >
              Question 4: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, qui!
              <div className='circle'>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className={`answer ${activeQuestion === 'q4' ? 'show' : ''}`} id="q4">
              Answer 4: Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
          </div>

          <div className='faq-block' data-aos="fade-left"
           data-aos-anchor="#example-anchor"
           data-aos-offset="500"
           data-aos-duration="3000"
           data-aos-delay="900">
            <div
              className={`question ${activeQuestion === 'q5' ? 'expanded' : 'collapsed'}`}
              onClick={() => toggleAnswer('q5')}
            >
              Question 5: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, qui!
              <div className='circle'>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className={`answer ${activeQuestion === 'q5' ? 'show' : ''}`} id="q5">
              Answer 5: Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
          </div>

          <div className='faq-block' data-aos="fade-left"  
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="3000"
            data-aos-delay="1200">
            <div
              className={`question ${activeQuestion === 'q6' ? 'expanded' : 'collapsed'}`}
              onClick={() => toggleAnswer('q6')}
            >
              Question 6: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, qui!
              <div className='circle'>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className={`answer ${activeQuestion === 'q6' ? 'show' : ''}`} id="q6">
              Answer 6: Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
