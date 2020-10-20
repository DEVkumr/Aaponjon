import React from 'react'
import moment from 'moment'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import slider1 from '../Images/sliderimg1.png'
import slider2 from '../Images/sliderimg2.jpg'
import slider3 from '../Images/sliderimg3.jpeg'

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
    const sashtiTime = "11-10-2020 03:07:30"
    const fadeImages = [
        slider2,
        slider1,
        slider3
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
            {/* <div className="slideshow-holder">
                <Fade >
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
                    <div className="each-fade">
                        <div>
                            <img src={fadeImages[2]} />
                        </div>
                    </div>
                </Fade>
            </div> */}
            <div className="marquee-container">
                <marquee direction="left" scrollamount="10">
                The most awaited event of the year is coming soon.Enjoy this auspicious festival with your loved one.Stay safe, Stay at home.
                </marquee>
            </div>
            <div className="tab-container">
                <h2> Puja Schedule </h2>
                <div className="tab">
                    <button className="tablinks" onClick={checkDay} id="defaultOpen" value="Sashti">Maha Sashti</button>
                    <button className="tablinks" onClick={checkDay} value="Saptami">Maha Saptami</button>
                    <button className="tablinks" onClick={checkDay} value="Ashtami">Maha Ashtami</button>
                    <button className="tablinks" onClick={checkDay} value="Navami"> Maha Navami</button>
                    <button className="tablinks" onClick={checkDay} value="Dashami">Bijaya Dashami</button>
                </div>
                {console.log("Time: ", moment().format("DD-MM-YYYY") + ' ' + moment().format("hh:mm:ss"))}
                {this.state.isSashti &&
                <div id="Sashti" className="tabcontent">
                    <span> <b><i> হিমের পরশ লাগলো প্রাণে </i></b> </span>
                    <span> <b><i> শারদীয়ার আগমনে, </i></b>  </span>
                    <span> <b><i> আগমনীর খবর পেয়ে </i></b>  </span>
                    <span> <b><i> বনের পাখি উঠলো গেয়ে, </i></b>  </span>    
                    <span> <b><i> শিশির ভেজা নতুন ভোরে </i></b>  </span>    
                    <span> <b><i> মা আসছে আলো করে। </i></b>  </span>
                    <br/>   
                    <span>
                        <ul>
                        <a href="https://www.youtube.com/embed/live_stream?channel=UCwNsZ7DTlA8vhhqqCmwG-aw" target="_blank"> 
                            <li> Bangla 5 Kartik, 22nd October 2020 <b>Thrusday</b> 
                                {moment().format("DD-MM-YYYY") + ' ' + moment().format("hh:mm:ss") >= sashtiTime ? 
                                    <sup className="blink_me">
                                        Live 
                                    </sup> 
                                : ''}
                            </li>
                        </a>
                            <li> Saradia Durga Devi Kolpa Aarambho - <b>7:30 AM</b></li>
                            <li> Devi-er Aamontron Aadhivas - <b>7:30 PM</b> </li>
                        </ul>
                    </span>
                </div>
                }
                {this.state.isSaptami &&
                <div id="Saptami" className="tabcontent">
                    <span> <b><i> নীল আকাশের মেঘের ভেলা </i></b> </span>
                    <span> <b><i> পদ্ম ফুলের পাঁপড়ি মেলা, </i></b>  </span>
                    <span> <b><i> ঢাকের তালে কাশের খেলা </i></b>  </span>
                    <span> <b><i> আনন্দে কাটুক শারদবেলা। </i></b>  </span>
                    <br/>
                    <span>
                        <ul>
                            <li> Bangla 6 Kartik, 23rd October 2020 <b>Friday</b> </li>
                            <li> Nobopotrika Aagomon Jalashaya Roana - <b>7:30 AM</b> </li>
                            <li> Puja Aarambho - <b>9:30 AM</b> </li>
                            <li> Pushpanjali - <b>10:30 AM</b> </li>
                            <li> Bhog Nibedan - <b>12:00 Noon</b> </li>
                            <li> Sandhya Aarti - <b>7:00 PM</b> </li>
                        </ul>
                    </span> 
                </div>
                }
                {this.state.isAshtami &&
                <div id="Ashtami" className="tabcontent">
                    <span> <b><i> এলো খুশির শরৎ </i></b> </span>
                    <span> <b><i> একটু হিমেল হাওয়া, </i></b>  </span>
                    <span> <b><i> অনেক খুশি অনেক আলো </i></b>  </span>
                    <span> <b><i> পুজো এবার কাটুক ভালো। </i></b>  </span>
                    <br/>
                    <span>
                        <ul>
                            <li> Bangla 7 Kartik, 24th October 2020 <b>Saturday</b> </li>
                            <li> Puja Aarambho - <b>9:00 AM</b> </li>
                            <li> Chandi-Path - <b>9:30 AM</b> </li>
                            <li> Pushpanjali - <b>10:00 AM</b>(Only once)</li>
                            <li> Sandhi Puja - <b>11:00 AM - 11:48 AM</b></li>
                            <li> Balidan - <b>11:24 AM</b> </li>
                            <li> Sandhi Puja Pushpanjali - <b>11:30 AM</b></li>
                            <li> Bhog Nibedan - <b>12:00 Noon</b> </li>
                            <li> Sandhya Aarti - <b>7:00 PM</b> </li>
                        </ul>
                    </span>
                </div>
                }
                {this.state.isNavami &&
                <div id="Navami" className="tabcontent">
                    <span> <b><i> শরৎ মেঘে ভাসলো ভেলা </i></b> </span>
                    <span> <b><i> কাশ ফুলেতে লাগলো দোলা, </i></b>  </span>
                    <span> <b><i> ঢাকের উপর পড়লো কাঠি </i></b>  </span>
                    <span> <b><i> পুজো কাটুক ফাটাফাটি। </i></b>  </span>
                    <br/>
                    <span>
                        <ul>
                            <li> Bangla 8 Kartik, 25th October 2020 <b>Sunday</b> </li>
                            <li> Puja Aarambho - <b>9:00 AM</b> </li>
                            <li> Chandi-Path - <b>9:30 AM</b> </li>
                            <li> Pushpanjali - <b>10:30 AM</b> </li>
                            <li> Hom Kriya - <b>11:30AM</b> </li>
                            <li> Bhog Nibedan - <b>12:30 PM</b> </li>
                            <li> Sandhya Aarti - <b>7:00 PM</b> </li>
                        </ul>
                    </span>
                </div>
                }
                {this.state.isDashami &&
                <div id="Dashami" class="tabcontent">
                    <span> <b><i> উৎসবের আজ শেষবেলা </i></b> </span>
                    <span> <b><i> শুরু হবে সিঁদুর খেলা, </i></b>  </span>
                    <span> <b><i> মনের মাঝে রেখে মা কে </i></b>  </span>
                    <span> <b><i> জল ছল ছল এই দুচোখে।  </i></b>  </span>
                    <br/>
                    <span>
                        <ul>
                            <li> Bangla 9 Kartik, 26th October 2020 <b>Monday</b> </li>
                            <li> Puja Aarambho - <b>9:00 AM</b> </li>
                            <li> Pushpanjali - <b>10:30 AM</b> </li>
                            <li> Ghot Niranjon - <b>11:30 AM</b> </li>
                            <li> Devi Niranjon - <b>5:00 PM</b> </li>
                            <li> Shanti Jol </li>
                        </ul>
                    </span>
                </div>
                }
            </div>
            <div className="slideshow-container">
                <iframe 
                    title='sample-video'
                    height='350px'
                    width='100%'
                    src="https://www.youtube.com/embed/WeETd_pkj74" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
        </React.Fragment>
    )
    }
}

export default Home
