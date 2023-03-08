function Testimonials () {
    return (
        <section class="testimonials">
            <div class="subtitle">
                TESTIMONIALS
            </div>
            <div class="title">
                Client says about us
            </div>
            <div class="testimonials__slider">
                <div class="testimonials__slider-previous-button">                        
                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.99353 1L1.99353 5L5.99353 9" stroke="#646464" stroke-width="2"/>
                    </svg>    
                </div>
                <div class="testimonials__slider-next-button"> 
                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.99353 1L4.99353 5.5L0.99353 10" stroke="#646464" stroke-width="2"/>
                    </svg>
                </div>
            </div>
            <div class="testimonials-reviews-block">
                <div class="review-item">
                    <div class="review-item__customer-photo">
                        <img src="../img/client-1.jpg" alt="Client photo" />
                    </div>
                    <div class="review-item__customer-info">
                        <div class="review-item__customer-name">
                            Louis Saville
                            <div class="review-item__customer-position">
                                /CEO at Google inc
                            </div>
                        </div>
                        <div class="review-item__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                        </div>
                    </div>
                    <div class="review-item__deco">                          
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.39353 31.6V26.128L1.54553 25.744C5.19353 23.888 7.27353 20.816 7.78553 16.528L7.88153 14.992H0.87353V0.879997H14.7935V13.648C14.7935 17.04 14.0895 20.016 12.6815 22.576C9.80153 27.696 5.70553 30.704 0.39353 31.6ZM18.2495 31.6V26.128L19.4015 25.744C23.0495 23.888 25.1295 20.816 25.6415 16.528L25.7375 14.992H18.7295V0.879997H32.6495V13.648C32.6495 17.04 31.9455 20.016 30.5375 22.576C27.6575 27.696 23.5615 30.704 18.2495 31.6Z" fill="#B0855B"/>
                        </svg>    
                    </div>
                </div>
                <div class="review-item">
                    <div class="review-item__customer-photo">
                        <img src="../img/client-2.jpg" alt="Client photo" />
                    </div>
                    <div class="review-item__customer-info">
                        <div class="review-item__customer-name">
                            Rekha Varadwaz 
                            <div class="review-item__customer-position">
                                /Manager at Nike inc
                            </div>
                        </div>
                        <div class="review-item__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                        </div>
                    </div>
                    <div class="review-item__deco">                          
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.39353 31.6V26.128L1.54553 25.744C5.19353 23.888 7.27353 20.816 7.78553 16.528L7.88153 14.992H0.87353V0.879997H14.7935V13.648C14.7935 17.04 14.0895 20.016 12.6815 22.576C9.80153 27.696 5.70553 30.704 0.39353 31.6ZM18.2495 31.6V26.128L19.4015 25.744C23.0495 23.888 25.1295 20.816 25.6415 16.528L25.7375 14.992H18.7295V0.879997H32.6495V13.648C32.6495 17.04 31.9455 20.016 30.5375 22.576C27.6575 27.696 23.5615 30.704 18.2495 31.6Z" fill="#B0855B"/>
                        </svg>    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;