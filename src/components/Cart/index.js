import React, {useEffect} from "react";

const Cart = ({products = [], cart = [], onDelete, onUpdate}) => {

    const handeClick = (e, index) => {
        e.preventDefault();
        onDelete(index);
    }

    useEffect(() => {

        cart.forEach((el, cart_index) => {
            let foundMatch = false;
            products.forEach((product, product_index) => {
                if (el.id === product.id) {

                    foundMatch = true;

                    if (el.title !== product.title || el.price !== product.price) {
                        onUpdate(cart_index, {
                            title: product.title,
                            price: product.price
                        });
                    }
                }
            })

            // If product was deleted, remove it from cart
            if (!foundMatch) {
                onDelete(cart_index);
            }
        });

        products.forEach((product, product_index) => {
            cart.forEach((el, cart_index) => {

            })
        })

    }, [products])

    return (
        <div className={"cart"}>
            {cart.map((el, index) => (
                <div className="cart-element" key={'c' + index}>
                    <div className="row align-items-center">
                        <div className="col">
                            <div className="details">
                                <div className="row">
                                    <div className="col">
                                        <div className="title">
                                            {el.title}
                                        </div>
                                    </div>
                                    <div className="col-auto text-right">
                                        <div className="price">
                                            {el.price}$
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="quantity-title">
                                            Quantity
                                        </div>
                                    </div>
                                    <div className="col-auto text-right">
                                        <div className="quantity-value">
                                            {el.qty}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-outline-primary btn-sm" onClick={(e) => handeClick(e, index)}>x
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            <div className="cart-total">
                <div className="row">
                    <div className="col">
                        <div className="total text-right">
                            <span className="name">
                                Total:
                            </span>
                            <span className="value">
                                {cart.reduce((sum, i) => (
                                    sum += i.qty * i.price
                                ), 0)}$

                            </span>
                        </div>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-outline-primary btn-sm" style={{visibility: "hidden"}}>x</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;