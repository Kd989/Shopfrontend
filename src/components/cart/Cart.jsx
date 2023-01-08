import React from 'react'
import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Long Sleeve Graphic T-shirt",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, temporibus! Eos quas, doloremque eveniet tenetur beatae labore vel veniam! Ipsa quas voluptatem autem incidunt! Totam magni blanditiis incidunt illum doloremque?",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

            title: "coat",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, temporibus! Eos quas, doloremque eveniet tenetur beatae labore vel veniam! Ipsa quas voluptatem autem incidunt! Totam magni blanditiis incidunt illum doloremque?",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ]
    return (
        <div className='cart'>
            <h1>products in your cart</h1>
            {
                data.map((e)=>(
                    <div className="item" key={e.id}>
                        <img src={e.img} alt="sorry"/>
                        <div className="details">
                            <h1>{e.title}</h1>
                            <p>{e.desc?.substring(0,50)}</p>
                            <div className="price">
                               {e.price}
                            </div>
                        </div>
                        <DeleteOutlinedIcon className='delete'/>
                    </div>
                ))
            }
            <div className="total">
                <span>
                    SUBTOTAL
                </span>
                <span>
                   $124
                </span>
            </div>
            <button>PROCEED TP CHECKOUT</button>
          <span className='reset'>Reset Cart</span>
            
        </div>
    )
}

export default Cart