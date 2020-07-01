import React from "react";


const ProductList = ({products = [], small = false,  onDelete, onCartAdd}) => {
    let _list = '';

    const AddProductToCart = (e, product)  => {
        e.preventDefault();
        onCartAdd(product);
    }

    const onSubmit = (e, index) => {
        e.preventDefault();
        onDelete(index);
    }

    if (small) {
        _list = products.map((product, index) => (
            <div className="row" key={'p' + index}>
                <div className="col">
                    {product.title}
                </div>
                <div className="col col-auto">
                    <button className="btn btn-outline-primary btn-sm" onClick={(e) => onSubmit(e, index)}>x</button>
                </div>
            </div>
        ))
    } else {
        _list = products.map((product, index) => (
            <div className="card" key={'pl' + index}>
                <div className="inner">
                    <div className="card-horizontal">
                        <div className="img-wrapper">
                            <div className="inner">
                                <img className="" src={product.img} alt={'Card image cap' + index}/>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="card-title">{product.title}</h5>
                                </div>
                                <div className="price">{product.price}$</div>
                            </div>
                            <p className="card-text">{product.desc}</p>
                            <button className="btn btn-primary btn-sm" onClick={(e) => AddProductToCart(e, product)}>Add
                                to Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ))
    }

    return (
        _list
    )
}

export default ProductList;