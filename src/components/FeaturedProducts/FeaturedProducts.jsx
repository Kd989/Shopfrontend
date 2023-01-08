import React from 'react'
import Card from '../Card/Card'
import "./FeaturedProducts.scss"






const FeaturedProducts = ({type}) => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            title: "coat",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            title: "Long Sleeve Graphic T-shirt",
            isNew: false,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ]

    return (
        <div className='featuredProducts'>
            <div className='featuredProducts'>
                <div className="top">
                    <h1>{type}products</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quas beatae iusto impedit enim laborum labore magnam ipsum nobis! Ullam deleniti adipisci veritatis et quis ipsa magnam velit, quisquam maiores?</p>
                </div>
                <div className="bottom">
                    {
                       data.map((item)=>{
                        return(

                            <Card item={item} key={item.id}/>
                        )
                       })
                    }
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts
