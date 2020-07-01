import React, {useRef} from "react";
import {v4 as uuidv4} from "uuid";

const AddProduct = ({onAdd}) => {

    const titleRef = useRef(null);
    const priceRef = useRef(null);
    const imgRef = useRef(null);
    const descRef = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();
        if(!titleRef.current.value) {
            alert('Please enter title');
            return;
        }
        if(!priceRef.current.value) {
            alert('Please enter price');
            return;
        }


        if(!imgRef.current.value || !imgRef.current.checkValidity()) {
            alert('Please enter image URL');
            return;
        }

        if(!descRef.current.value) {
            alert('Please enter description');
            return;
        }

        onAdd({
            id: uuidv4(),
            title: titleRef.current.value,
            desc: descRef.current.value,
            img: imgRef.current.value,
            price: priceRef.current.value
        });

        // Clear values
        titleRef.current.value = '';
        descRef.current.value = ''
        imgRef.current.value = '';
        priceRef.current.value = '';
    }

    return (
        <div className="card">
            <div className="card-body">
                <form>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Title" ref={titleRef}/>
                        </div>
                        <div className="col">
                            <input type="number" className="form-control" placeholder="Price" ref={priceRef}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="url" className="form-control" placeholder="Image url" ref={imgRef}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <textarea className="form-control" placeholder="Description" ref={descRef}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-primary btn-block" onClick={(e) => onSubmit(e)}>Add Product</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProduct;