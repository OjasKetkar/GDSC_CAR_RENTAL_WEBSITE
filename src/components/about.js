import React from "react"
import SideBar from "./Sidebar";

//UI design about page
export default function About(){
 const [isShown,setIsShown] = React.useState(true);

const handleClick = () =>{
    setIsShown(current=>!current)
    console.log(`Function in about clicked`)
}

    return (
        <div className="about">
            {/* Navbar */}
             
            <div className="navbar">
                {/* main website logo */}
                <img src="./images/website-logo.png" alt="website logo" className="website-logo" />
                {/* navbar options */}
                
            <ul className="navbar-options">
                <li className="opts"><a href="./try.js"  className="a">About Home</a></li>
                <li className="opts"><a href="./about.js"  className="a">About</a></li>
                <li className="opts"><a href="./"  className="a">Car List</a></li>
                <li className="opts"><a href=""  className="a">Blog</a></li>
                <li className="opts" ><a href="" className="a">Contact Us</a></li>
        </ul>
        
                <img src="./images/menu.png" alt="menu" className="sidebar-menulogo" onClick={handleClick}/>
               
            </div>
                {
                    !isShown && <SideBar/>
                }

            {/* first container having about us section */}
            <div className="aboutus">
                <div className="aboutus-image">

                <img src="./images/about1.jpg" alt="image1" className="about-mainimg1"/>
                </div>

                <div className="aboutus-text">
                    <div className="abt-text">
                    <h6 className="aboutus-head1">ABOUT US</h6>

                    <h4 className="aboutus-head2">Luxury Cars at less</h4>
                    <p className="aboutus-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, doloremque!.</p>
                    </div>


                <div className="aboutus-boxes">

                    <div className="box1">
                            <h6>Sports Car</h6>             <p className="box1-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, ad.</p>
                    
                    </div>
                            {/* <img src="./images/bluedots.png" alt="bluedots" className="dots" /> */}
                    <div className="box2">
                            <h6>Low Price</h6>             <p className="box2-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, ad.</p>
                    </div>
                    <div className="box3">
                            <h6>Easy Book</h6>             <p className="box3-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, ad.</p>
                    </div>
                </div>
                </div>
            

            </div>

            {/* second container having the "we bring comfort" section */}

            <div className="comfort-panel">
                <div className="comfort-pic">
                <img src="./images/comfortpic.png" alt="" className="comfortpanel-pic"/>
                </div>

                <div className="textpanel">
                <h4 className="comfort-head1">WE BRING COMFORT</h4>

                <h2 className="comfort-head2">The Best Solution for Vehicles</h2>

                <p className="comfort-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, temporibus? Laudantium, cum placeat? Doloremque tempore neque officiis voluptate cupiditate quaerat eaque necessitatibus, quo in excepturi error omnis est quae maxime sint quibusdam sequi quas suscipit, nisi corporis ut ex provident?</p>
                </div>
            </div>

                <div className="comfort-dec">
                <button className="comfortBtn">DISCOVER MORE
                <img src="./images/dwnarr.png" alt="down-arrow" className="down-arr1"/>
                </button>
                <img src="./images/bluedots.png" alt="bluedots" className="bluedots" />
                </div>

            {/* Third container having the "why choose us section" */}

            <div className="choose-panel">
                <div className="progress-tab">
            <h5 className="choose-head1">WHY CHOOSE US</h5>
            <h3 className="choose-head2">Best Services With The Best Work</h3>
            <p className="choose-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, corrupti?</p>

            {/* Progress Bar */}
                <div className="prg-container">
                    <label htmlFor="prg1">Car Brands</label>
                    <label htmlFor="pA2"  className="prg-perc">90%</label>
                    <div className="prg1">
                        <div className="pA1"></div>
                        <div className="pA2"></div>
                    </div>

                    <label htmlFor="prg2">Price</label>
                    <label htmlFor="pB2"  className="prg-perc">80%</label>
                    
                    <div className="prg2">
                        <div className="pB1"></div>
                        
                        <div className="pB2"></div>
                    </div>

                    <label htmlFor="prg3">Quality</label>
                    <label htmlFor="pC2"  className="prg-perc3">95%</label>
                    <div className="prg3">
                        <div className="pC1"></div>
                        <div className="pC2"></div>
                    </div>

                    <label htmlFor="prg4">Service</label>
                    <label htmlFor="pD2"  className="prg-perc">85%</label>
                    <div className="prg4">
                        <div className="pD1"></div>
                        <div className="pD2"></div>
                    </div>
                </div>
                </div>

            {/* Advertisment Boxes */}
            <div className="ad-boxes">
                <div className="adbox1">
                    <h3 className="box-head">Luxury Cars</h3>
                    <p className="box-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, fuga!</p>
                </div>
                <div className="adbox2">
                    <h3 className="box-head">Full Service</h3>
                    <p className="box-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, fuga!</p>
                </div>
                <div className="adbox3">
                    <h3 className="box-head">Security Lock</h3>
                    <p className="box-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, fuga!</p>
                </div>
                <div className="adbox4">
                    <h3 className="box-head">Full Tank</h3>
                    <p className="box-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, fuga!</p>
                </div>
                
            </div>
            </div>

        </div>
    )
}

    