import React from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import slider1 from '../Images/sliderimg1.png'
import slider2 from '../Images/sliderimg2.jpg'

class Home extends React.Component {
constructor(props){
    super(props);
    this.state = {
        isSashti: true,
        isSaptami: false,
        isAshtami: false,
        isNavami: false,
        isDashami: false
    }
    }

    render(){

    const fadeImages = [
        slider2,
        slider1
    ]

    const checkDay = (event) => {
        const val = event.target.value
        if(val==="Sashti"){
        this.setState({
            isSashti: !this.state.isSashti,
            isSaptami: false,
            isAshtami: false,
            isNavami: false,
            isDashami: false
        })
        }
        if(val==="Saptami"){
        this.setState({
            isSaptami: !this.state.isSaptami,
            isSashti: false,
            isAshtami: false,
            isNavami: false,
            isDashami: false
        })
        }
        if(val==="Ashtami"){
        this.setState({
            isAshtami: !this.state.isAshtami,
            isSaptami: false,
            isSashti: false,
            isNavami: false,
            isDashami: false
        })
        }
        if(val==="Navami"){
        this.setState({
            isNavami: !this.state.isNavami,
            isSaptami: false,
            isAshtami: false,
            isSashti: false,
            isDashami: false
        })
        }
        if(val==="Dashami"){
        this.setState({
            isDashami: !this.state.isDashami,
            isSaptami: false,
            isAshtami: false,
            isNavami: false,
            isSashti: false
        })
        }
    }
    
    return(
        <React.Fragment>
            <div className="slide-container">
                <Fade>
                <div className="each-fade">
                    <div>
                    <img src={fadeImages[0]} />
                    </div>
                </div>
                <div className="each-fade">
                    <div>
                    <img src={fadeImages[1]} />
                    </div>
                </div>
                </Fade>
            </div>
            <div className="marquee-container">
                <marquee direction="left" scrollamount="10">
                The most awaited event of the year is coming soon.Enjoy this auspicious festival with your loved one.Stay safe, Stay at home.
                </marquee>
            </div>
            <div className="tab-container">
                <h2> Puja Schedule </h2>
                <div class="tab">
                <button className="tablinks" onClick={checkDay} id="defaultOpen" value="Sashti">Maha Sashti</button>
                <button className="tablinks" onClick={checkDay} value="Saptami">Maha Saptami</button>
                <button className="tablinks" onClick={checkDay} value="Ashtami">Maha Ashtami</button>
                <button className="tablinks" onClick={checkDay} value="Navami"> Maha Navami</button>
                <button className="tablinks" onClick={checkDay} value="Dashami">Bijaya Dashami</button>
                    </div>
                
                {this.state.isSashti &&
                <div id="Sashti" className="tabcontent">
                <h3>Sashti</h3>
                <p>Devotees welcomes the goddess and festive celebrations are inaugurated</p>
                </div>}
                {this.state.isSaptami &&
                <div id="Saptami" className="tabcontent">
                    <h3>Saptami</h3>
                <p>The Maha Puja (Great Ceremony) starts on Maha Saptami.</p> 
                </div>}
                {this.state.isAshtami &&
                <div id="Ashtami" className="tabcontent">
                    <h3>Ashtami</h3>
                    <p>This is the eighth day of Durga Puja celebrations, when the weapons used by Durga are worshipped.</p>
                </div>}
                {this.state.isNavami &&
                <div id="Navami" className="tabcontent">
                    <h3>Navami</h3>
                <p>This is the ninth day of Durga Puja. On this day, the victory of Durga over the evil buffalo demon Mahishasura is celebrated. </p>
                </div>}
                {this.state.isDashami &&
                <div id="Dashami" class="tabcontent">
                <h3>Dashami</h3>
                <p>Also known as Dashain or Tenth day of Navratri or Durgotsav, Vijaya Dashami commemorates the day that Durga appeared riding a lion to slay the Mahisasura.</p>
                </div>}
            </div>
            <div class="slideshow-container">
                <iframe 
                    title='sample-video'
                    height='500px'
                    width='100%'
                    src="https://www.youtube.com/embed/_1uWeph1zEE" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        </React.Fragment>
    )
    }
}

export default Home