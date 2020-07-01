import React from "react";

const EditProducts = ({products = [], onEdit, onDelete}) => {


    const _updateInputsValue = (index, newValue) => {

        onSubmit(index, newValue);
    }

    const handleClick = (e, index) => {
        e.preventDefault();
        console.log(index);
        onDelete(index);
    }

    const onSubmit = (index, obj) => {

        for (const property in obj) {
            if (property === 'title') {
                if (obj[property] === '') {
                    alert('Please enter title');
                    return;
                }
            }

            if (property === 'price') {
                if (obj[property] === '') {
                    alert('Please enter price');
                    return;
                }
            }

            if (property === 'img') {

                if (obj[property] === '') {
                    alert('Please enter image URL');
                    return;
                }

                if (obj[property].match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) == null) {
                    alert('Please enter image URL');
                    return;
                }
            }

            if (property === 'desc') {

                if (obj[property] === '') {
                    alert('Please enter description');
                    return;
                }
            }
        }

        onEdit(index, obj);
    }

    const _productEditor = products.map((product, index) => {

        return (
            <div className="card" key={'i' + index}>
                <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Title"
                                       value={product.title}
                                       onChange={(e) => _updateInputsValue(index, {'title': e.target.value})}/>
                            </div>
                            <div className="col">
                                <input type="number" className="form-control" placeholder="Price"
                                       value={product.price}
                                       onChange={(e) => _updateInputsValue(index, {'price': e.target.value})}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type="url" className="form-control" placeholder="Image url"
                                       value={product.img}
                                       onChange={(e) => _updateInputsValue(index, {'img': e.target.value})}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <textarea className="form-control" placeholder="Description" value={product.desc}
                                      onChange={(e) => _updateInputsValue(index, {'desc': e.target.value})}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-primary btn-block"
                                        onClick={(e) => handleClick(e, index)}>Remove
                                    Product
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    });

    return (
        _productEditor
    );
}

export default EditProducts;