import React from 'react';
import SideBar from '../components/sideBar';
import Footer from '../components/footer';
import BackToTop from '../components/toTopButton';
const Training = () => {
    return ( 
        <>
           <SideBar/>
          <div className="main">
            <div className="heading">
               <h3>Training</h3>
            </div>
            
            <div className="contents">
               <div className="contents-center">
                  <div>
                    <article>
                    <div className='abt li'>
                        Welcome to the Training Hub at Winn-cocktail
                        <br/>
                        Embark on a journey of discovery and mastery with our comprehensive training resources designed to elevate your mixology skills. Whether you're a novice looking to shake up your first cocktail or an experienced bartender aiming to refine your craft, 
                        our training page is your go-to destination for learning and growth.
                     </div>
                     <div className='abt li'>
                        <ol>
                           <li>
                              <h4>Mixology Basics:</h4>
                              <ul>
                                 <li>Learn the fundamental techniques of mixology, including shaking, stirring, muddling, and layering.</li>
                                 <li>Understand the key components of a well-balanced cocktail and the importance of proper measurements.</li>
                              </ul>
                           </li>

                           <li>
                              <h4>Spirit Spotlight:</h4>
                              <ul>
                                 <li>Dive deep into the world of spirits. Explore the unique characteristics of different types of liquor, from classic favorites to emerging trends.</li>
                              </ul>
                           </li>
                           <li>
                              <h4>Cocktail Recipes & Techniques:</h4>
                              <ul>
                                 <li>Explore a diverse range of cocktail recipes, each accompanied by step-by-step instructions and pro tips.</li>
                                 <li>Master advanced techniques to take your cocktail game to the next level.</li>
                              </ul>
                           </li>
                        </ol>
                     </div>
                    </article>
                  </div>
                  <div className="training-form">
                     <form action="">
                        <div className="form-center">
                           <label htmlFor="">full name</label>
                           <input type="text" placeholder='John Doe' />
                        </div>

                        <div className="form-center">
                           <label htmlFor="">email address</label>
                           <input type="text"  placeholder='john@gmail.com'/>
                        </div>

                        <div className="form-center">
                           <label htmlFor="">
                              Level of Expertise:
                              <select name="" id="">
                                 <option value="Novice">Novice</option>
                                 <option value="Intermediate">Intermediate</option>
                                 <option value="Advanced">Advanced</option>
                              </select>
                           </label>
                        </div>

                        <div className="form-center">
                           <label htmlFor="">
                               Preferred Learning Format:
                              <select name="" id="">
                                 <option value="Video Tutorials">Video Tutorials</option>
                                 <option value="Written Guides">Written Guides</option>
                                 <option value="Live Webinars">Live Webinars</option>
                              </select>
                           </label>
                             
                        </div>

                        <div className="submit">
                           <input type="submit" />
                        </div>
                     </form>
                  </div>
               
                </div>  
            </div>
            
          </div>
          <BackToTop/>
          <Footer/>
        </>
     );
}
 
export default Training;   