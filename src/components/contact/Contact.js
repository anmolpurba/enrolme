import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div>
        <div class="formbold-main-wrapper">
            <div class="formbold-form-wrapper">
                <form action="https://formsubmit.co/4b295ea95bc275b1e1b804da1143f678" method="POST">
                <div className="title" style={{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"2rem"}}>
                    <h1>Contact Us</h1>
                </div>
                <div class="formbold-mb-5">
                    <label for="name" class="formbold-form-label"> Full Name </label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    class="formbold-form-input"
                    />
                </div>
                <div class="formbold-mb-5">
                    <label for="phone" class="formbold-form-label"> Phone Number </label>
                    <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone number"
                    class="formbold-form-input"
                    />
                </div>
                <div class="formbold-mb-5">
                    <label for="email" class="formbold-form-label"> Email Address </label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    class="formbold-form-input"
                    />
                </div>
                
                <div class="formbold-mb-5">
                    <label for="message" class="formbold-form-label block mb-2 text-sm text-gray-600 dark:text-gray-400">Your Message</label>

                    <textarea rows="5" name="message" id="message" placeholder="Your Message" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
                </div>
                <div>
                    <button type="submit" class="formbold-btn">Send Message <span><i class="fa-sharp fa-solid fa-paper-plane"></i></span></button>
                </div>
                </form>
            </div>
        </div>


        {/* --------------------- -- FOOTER --------------------- */}


        <div className="footer">
        <footer class="text-center text-lg-start text-muted" >
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
               
              

            
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
    
                    <h6 class="text-uppercase fw-bold mb-4" style={{fontSize:"1.3rem"}} >CANADA OFFICE</h6>
                    <class className="content" style={{fontSize:"1.1rem"}}>
                        <p><i class="fas fa-home me-3"></i> 5045 Orbitor Dr Unit 8-401, Mississauga, ON L4W 4Y4, Canada</p>
                        <p>
                            <i class="fas fa-envelope me-3"></i>
                            Jupor@consultant.com
                        </p>
                        <p><i class="fas fa-phone me-3"></i> +91 99999-99999</p>
                    </class>
                    
                </div>

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
    
                    <h6 class="text-uppercase fw-bold mb-4" style={{fontSize:"1.3rem"}}>INDIA OFFICE</h6>
                    <div className="content" style={{fontSize:"1.1rem"}}>
                        <p><i class="fas fa-home me-3"></i> SCO:142-143, 5th Floor, JUPOR Group Building, D - Block, Ranjit Avenue, Amritsar, Punjab 143001</p>
                        <p>
                            <i class="fas fa-envelope me-3"></i>
                            Jupor@consultant.com
                        </p>
                        <p><i class="fas fa-phone me-3"></i> +91 77105 00044</p>
                    </div>
                    
                </div>
              
        </section>
      
        </footer>
     
    </div>


    </div>
  )
}

export default Contact