import React from 'react'
import MainPage from './Main Page/MainPage'
import Committee from './Committee/Committee'
import Events_Grid from './Events_Grid/Events_Grid'
import './PastEvents.css'
import Testimonials from './Testimonials/Testimonials'
import Gallery from "./Gallery/Gallery"
import AboutGallery from './AboutGallery/AboutGallery'
import ContactUs from '../../ContactUs/ContactUs'
import Navbar2 from '../../Navbar2/Navbar2'
import GalleryData from '../../../data/GalleryImages'

const PastEvents = () => {
  return (
    <div className='past-events-main'>
        <Navbar2/>
        <MainPage/>
        <Committee/>
        <Events_Grid/>
        <Gallery Gallery={GalleryData.Gallery}/>
        <AboutGallery
        head1="CHAI PE CHARCHA"
        text="On October 9, 2023, MUN IIIT-NR hosted 'Chai Pe Charcha' to foster diverse perspectives through informal discussions over tea. Participants engaged in conversations on topics such as social equality, media's role in India, and education policies. Divided into teams, they explored various viewpoints, from social media trends to reservations. The provision of both coffee and tea enhanced the experience, leading to dynamic and insightful discussions. The presence of seniors added valuable insights, elevating the debates and contributing to an intellectually stimulating atmosphere." />
        <Gallery Gallery={GalleryData.Chai_Pe_Charcha}/>
        <AboutGallery
        head1="POLITICAL DRAMA"
        text="In collaboration with the Model United Nations and Club de Theatre clubs of IIIT NR, Viksit Bharat organized the event “Political Drama,” offering a unique platform for discussing India's development. Students showcased their creativity by dressing as various politicians, mimicking their personas, and participating in policy discussions. This format enabled a dynamic exchange of ideas, as participants responded to questions, addressed concerns, and presented their strategies for India's progress. The event successfully merged artistic expression with political discourse, creating an engaging and educational experience for both participants and the audience."/>
        <Gallery Gallery={GalleryData.Political_Drama}/>
        <AboutGallery
        head1="POLITICAL POWERPLAY"
        text="Organized by Take Da Bait and the Model United Nations on November 9, 2023, this event provided participants with the unique opportunity to assume the roles of either a politician or a journalist. Engaging in one-on-one debates with their counterparts, participants navigated through hypothetical scenarios designed to be both humorous and intellectually stimulating.Participants had the option to select their preferred role, either as a politician or a journalist, and were challenged by scenarios that added an enjoyable dimension to the debating experience. The event aimed to enhance participants' debating skills, expand their perspectives, and foster a strong sense of community within the college."/>
        <Gallery Gallery={GalleryData.Political_Powerplay}/>
        <Testimonials/>
        <ContactUs/>
    </div>
  )
}

export default PastEvents