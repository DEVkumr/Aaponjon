import React from 'react'
import 'react-slideshow-image/dist/styles.css'

import MaaDurgaAboutHome from '../Images/About/MaaDurgaAboutHome.png'

class About extends React.Component {

    render(){
        return (
            <React.Fragment>
                <div className="slideshow-container">
                <p className="aboutfontstyle">
                    Aapanjon is a non-profit organization based in Ranchi,India.Founded in 2015 and run by a dedicated group
                    living at Hesag, Aapanjon seeks to support the ethnic diversity and culture at Hesag , Hatia 
                    as well as provide economic support for the charitable institutes. 
                </p>
                </div>
                <table className="slideshow-container">
                    <tr>
                    <td style={{fontFamily: "Snell Roundhand", align:"center", valign:"center"}}>
                        <h2> Durga Puja 2020 </h2>
                    </td>
                </tr>
                </table>
                <table className="slideshow-container">
                    <tr>
                    <td className="aboutfontstyle">
                        With the completion of Pitrupakhsha, we are closer to possibly the most awaited event of the year. 
                        We are ready to welcome Maa Durga once again among us. Even though we are currently besieged by one 
                        of the most events many of us will possibly ever see in our lifetime, we will not let this stop us 
                        from hosting the event that you all eagerly await.

                        Aaponjon Durga Puja will be held from Thursday, Oct 22, 2020 to Monday, Oct 26, 2020, and like 
                        every year, we will remain honest to our tradition, follow all the ceremonies, and adhere to the correct calendar.

                        However, keeping the health and safety concerns of our members and well-wishers as our top priority this year, 
                        we have decided to organize the event completely virtually. This will enable us to adhere to the Puja calendar 
                        and the correct schedule and ceremonies, yet keep our members safe. The ceremonies will be held privately, and 
                        will be streamed LIVE for free to the entire world. 
                    </td>
                    <td>
                        <img className="imgabout" src={MaaDurgaAboutHome} ></img>
                    </td>
                    </tr>
                </table>
            </React.Fragment>
        )
    }
}

export default About