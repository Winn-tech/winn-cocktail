import React from 'react';
import image from '../images/drinks-2578446_1920.jpg';
import image2 from '../images/leisure-time-2026506_1920.jpg';
import SideBar from '../components/sideBar';
import Footer from '../components/footer';
import BackToTop from '../components/toTopButton';


const About = () => {
    return ( 
        <>
           <SideBar/>
           <div className="main">
               <div className="heading">
                    <h3 className='heading'>About us</h3>
               </div>

               <div className="contents">
                    <div className="contents-center abt-sct">
                        <div className="about-image">
                            <img src={image} alt="" />
                        </div>
                        <div className='texts' >
                           <section>
                           <p>
                                At Winn-cocktail, we are passionate about the art of mixology
                                and the joy that comes from crafting and savoring exceptional cocktails. Our journey began with a 
                                shared love for unique flavors, creativity in mixology, and the desire to bring the world of cocktails closer to enthusiasts like you.
                            </p>
                            <p>
                                <h4>Who we are:</h4>
                                Winn-cocktail is a curated space where cocktail aficionados, both seasoned mixologists and enthusiastic beginners, come together to explore, learn, and elevate their cocktail experiences. Our team is composed of dedicated individuals who share a common goal – to inspire and empower
                                you to create memorable moments through the art of cocktail making.
                            </p>
                           </section>
                        </div>   
                   
                    </div>

                    <div className='contents-center'>
                    <div className="about-image">
                            <img src={image2} alt="" />
                        </div>

                        <div className='texts'>
                           <section> <h4>What we do:</h4>
                            <ol>
                                <li>
                                    <h5>Inspiration:</h5>
                                    Immerse yourself in a world of endless inspiration with our extensive collection of cocktail recipes. From classic concoctions to innovative creations, we've got something for every taste and occasion.
                                </li>
                                <li>
                                    <h5>Education:</h5>
                                    Whether you're a novice or a seasoned pro, our articles, tutorials, and guides provide valuable insights into the world of mixology. Learn about the history of your favorite spirits, master essential techniques, and discover the latest trends in the cocktail scene.
                                </li>
                            </ol></section>
                        </div>
                        
                    </div>
                   
               </div>
             
           </div>
           <BackToTop/>
           <Footer/>
        </>
     );
}
 
export default About;