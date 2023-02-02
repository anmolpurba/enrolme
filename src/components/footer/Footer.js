import React from 'react'
import "./Footer.css"
import logo from "../images/enrollf.png"

function Footer() {
  return (
    <div className="footer">
        <footer class="text-center text-lg-start text-muted" >
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

            <div class="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
            </div>
  

      
            <div>
                <a href="" class="me-4 text-reset">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="fab fa-google"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="" class="me-4 text-reset">
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>
  
        </section>
      
       
        <section class="" >
            <div class="container text-center text-md-start mt-5">
           
            <div class="row mt-3">
          
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         
                <h6 class="text-uppercase fw-bold mb-4">
                    {/* <i class="fas fa-gem me-3"></i>Enrolmes */}
                    <img src={logo} style={{height:"5rem",width:"5rem"}}></img>

                </h6>
                <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                </p>
                </div>
               
                
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
      
                <h6 class="text-uppercase mb-4" style={{fontWeight:"bold"}}>
                    Products
                </h6>
                <p>
                    <a href="https://jupor.in/" class="text-reset">Jupor</a>
                </p>
                <p>
                    <a href="#!" class="text-reset">Workly</a>
                </p>
                <p>
                    <a href="#!" class="text-reset">Buisnessblvd</a>
                </p>
                <p>
                    <a href="#!" class="text-reset">Enrolme</a>
                </p>
                </div>
               
              

            
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
    
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i class="fas fa-home me-3"></i> 5045 Orbitor Drive Building 8, Unit: 401, Mississauga, ON L4W 4Y4, Canada</p>
                <p>
                    <i class="fas fa-envelope me-3"></i>
                    Jupor@consultant.com
                </p>
                <p><i class="fas fa-phone me-3"></i> +91 99999-99999</p>
                </div>
              
            </div>
         
            </div>
        </section>
       

     
        <div class="text-center p-4 footerbottom" style={{backgroundColor: "white"}}>
            © 2023 Copyright:
            <a class="text-reset fw-bold">Enrolme</a>
        </div>
      
        </footer>
     
    </div>
  )
}

export default Footer