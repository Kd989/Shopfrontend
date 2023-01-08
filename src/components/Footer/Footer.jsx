import React from 'react'
import "./Footer.scss"

const Footer = () => {
    return (
        <div className='footer'>
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span >Women</span>
                    <span >Men</span>
                    <span >Shoes</span>
                    <span >ACcerioes</span>
                    <span >New Arrivals</span>
                </div>
                <div className="item">
                  
                    <span>Links</span>
                    <span >FAQ</span>
                    <span >Pages</span>
                    <span >Store</span>
                    <span >Compare</span>
                    <span >cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde velit pariatur iste harum delectus atque maiores? Dolorum, et laudantium! Illo consectetur necessitatibus sequi eos corporis ab ducimus, veritatis molestiae tenetur!
                    </span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde velit pariatur iste harum delectus atque maiores? Dolorum, et laudantium! Illo consectetur necessitatibus sequi eos corporis ab ducimus, veritatis molestiae tenetur!
                    </span>
                </div>

            </div>
            <div className="bottom">
                <div className="left">
                    <span className='logo'>DASTORE</span>
                    <span className='copyright'>
                        Copyright 2023. All RIghts Reserved
                    </span>
                </div>
                <div className="right">
                <img alt="sorry" src='/img/payment.png'/>
                </div>
            </div>
        </div>
    )
}

export default Footer
