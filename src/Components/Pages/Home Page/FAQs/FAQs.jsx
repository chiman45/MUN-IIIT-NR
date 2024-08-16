import React, { useState } from 'react';
import './FAQs.css';
import arrow from '../../../../images/arrow.svg';

const FAQs = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="faq-container" id="FAQ">
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
              1: What is Model United Nations?
              {/* <div className='circle'>
                <img src={arrow} alt="arrow" />
              </div> */}
              <img src={arrow} alt="arrow"/>

            </div>
            <div className={`answer ${activeQuestion === 'q1' ? 'show' : ''}`} id="q1">
              Model United Nations (also Model UN or MUN) is an academic simulation of the United Nations that aims to educate and encourage participants to discuss about major issues concerning the world, topics in international relations, diplomacy and the United Nations agenda.
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
              2: What are the dates of MUN IIIT-NR 4.0?
              {/* <div className='circle'>
                <img src={arrow} alt="arrow" />
              </div> */}
              <img src={arrow} alt="arrow"/>

            </div>
            <div className={`answer ${activeQuestion === 'q2' ? 'show' : ''}`} id="q2">
              MUNC' 4.0, IIIT-NR is a two day conference and will be tentatively held in the month of April of 2025.
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
              3: Who can register for MUN, IIIT-NR?
              {/* <div className='circle'>
                <img src={arrow} alt="arrow" />
              </div> */}
              <img src={arrow} alt="arrow"/>

            </div>
            <div className={`answer ${activeQuestion === 'q3' ? 'show' : ''}`} id="q3">
              All students with a valid ID card of their high school or college can register for IIIT-NR MUN. However, exceptional cases are sometimes made for recent graduates.
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
              4: What is the venue location?
              {/* <div className='circle'>
                <img src={arrow} alt="arrow" />
              </div> */}
              <img src={arrow} alt="arrow"/>

            </div>
            <div className={`answer ${activeQuestion === 'q4' ? 'show' : ''}`} id="q4">
              Model United Nations IIIT-NR will be held on the campus of IIIT Naya Raipur.
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
              5: What to expect as a 1st time MUNner?
              {/* <div className='circle'>
                <img src={arrow} alt="arrow" />
              </div> */}
              <img src={arrow} alt="arrow"/>

            </div>
            <div className={`answer ${activeQuestion === 'q5' ? 'show' : ''}`} id="q5">
              An intellectual challenge! Follow basic steps, which include reading your study guides, being well prepared on your agendas, and being ready to speak during the conference. Take multiple opportunities and participate during the moderated and unmoderated caucus. Focus on managing your country's interests and speaking clearly.
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
              6: How do I apply to IIIT-NR MUN?
              {/* <div className='circle'>
                
              </div> */}
              <img src={arrow} alt="arrow"/>
            </div>
            <div className={`answer ${activeQuestion === 'q6' ? 'show' : ''}`} id="q6">
              Delegate and chair applications for IIIT-NR MUN 2024 will be out soon.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
