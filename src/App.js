import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {v4 as uuidv4} from 'uuid';

import ProductList from './components/ProductList'
import Cart from './components/Cart'
import AddProduct from './components/AddProduct'
import EditProducts from './components/EditProducts'

import './App.css';

const App = () => {


    const [products, setProduct] = useState([
        {
            id: uuidv4(),
            title: 'Title of Item 1',
            desc: 'Description lorem ipsum Lorem ipsum lorem ipsum',
            img: 'https://loremflickr.com/100/100/product?id' + Math.floor(Math.random() * 11),
            price: 24
        },
        {
            id: uuidv4(),
            title: 'Title of Item 2',
            desc: 'Description lorem ipsum Lorem ipsum lorem ipsum',
            img: 'https://loremflickr.com/100/100/product?id' + Math.floor(Math.random() * 11),
            price: 34
        }
    ]);

    const [cart, setCart] = useState([]);

    const addProduct = (product) => {
        setProduct([...products, product]);
    };

    const editProduct = (index, product) => {
        const newProducts = [...products];
        newProducts[index] = {...newProducts[index], ...product};
        setProduct(newProducts);
    };

    const removeProduct = (index) => {
        const newProducts = [...products];
        newProducts.splice(index, 1);
        setProduct(newProducts);
    };

    const addToCart = (product) => {

        let newCart = [...cart];
        let index = cart.map(item => item.id).indexOf(product.id);

        if (index > -1) {

            newCart[index] = {
                ...newCart[index],
                ...{
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    qty: newCart[index].qty + 1
                }
            };
            setCart(newCart);
        } else {
            setCart([...cart,
                {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    qty: 1
                }
            ]);
        }
    }

    const updateFromCart = (index, product) => {
        let newCart = [...cart];

        newCart[index] = {
            ...newCart[index],
            ...product
        }

        setCart(newCart);
    }

    const removeFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    }

    return (
        <div className="app">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4 className="title text-center">List of Products</h4>
                        <ProductList products={products} onCartAdd={addToCart}/>
                    </div>
                    <div className="col">
                        <h4 className="title text-center">Shopping Cart</h4>
                        <Cart products={products} cart={cart} onUpdate={updateFromCart} onDelete={removeFromCart}/>
                    </div>
                    <div className="col">
                        <h4 className="title text-center">Inventory</h4>

                        <div className="inventory">
                            <EditProducts products={products} onDelete={removeProduct} onEdit={editProduct}/>
                            <AddProduct onAdd={addProduct}/>
                        </div>

                        <div className="products-list">
                            <div className="row">
                                <div className="col">
                                    <h6 className="title">List of products</h6>
                                </div>
                            </div>
                            <ProductList products={products} small onDelete={removeProduct}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
