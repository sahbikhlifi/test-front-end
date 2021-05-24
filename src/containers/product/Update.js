import React, { useState } from "react";
import { connect } from "react-redux";
import { updateProduct } from "../../redux/actions/product.actions";
import { useParams  } from "react-router-dom";

const UpdateProduct = ({ edit, products }) => {
  const { id } = useParams();
  const selectedProduct = products.find( b => b._id === id);
  const [product, setProduct] = useState(selectedProduct);

  const fieldChangeHandler = ({ target }) => {
    setProduct({
      ...product,
      [target.name]: target.value
    });
  };

  const submit = e => {
    e.preventDefault();
    edit(product);
};

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-header">
              <h3 className="text-center font-weight-light my-4">Edit Product</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label className="small mb-1">Name</label>
                  <input
                    onChange={fieldChangeHandler}
                    className="form-control py-4"
                    name="title"
                    type="text"
                    value={product.name}
                  />
                </div>
                <div className="form-group">
                  <label className="small mb-1">Product Code</label>
                  <input
                    onChange={fieldChangeHandler}
                    className="form-control py-4"
                    name="isbn"
                    type="text"
                    value={product.productCode}
                  />
                </div>
                <div className="form-group">
                  <label className="small mb-1">Quantity</label>
                  <input
                    onChange={fieldChangeHandler}
                    className="form-control py-4"
                    name="isbn"
                    type="text"
                    value={product.quantity}
                  />
                </div>
                <div className="form-group">
                  <label className="small mb-1">Price</label>
                  <input
                    onChange={fieldChangeHandler}
                    className="form-control py-4"
                    name="isbn"
                    type="text"
                    value={product.price}
                  />
                </div>
                <div className="form-group">
                  <label className="small mb-1">Brand</label>
                  <input
                    onChange={fieldChangeHandler}
                    className="form-control py-4"
                    name="isbn"
                    type="text"
                    value={product.brand}
                  />
                </div>
                <div className="form-group">
                  <label className="small mb-1">Model</label>
                  <input
                    onChange={fieldChangeHandler}
                    className="form-control py-4"
                    name="isbn"
                    type="text"
                    value={product.model}
                  />
                </div>
                <div className="form-group">
                  <label className="small mb-1">Category</label>
                  <input
                    onChange={fieldChangeHandler}
                    className="form-control py-4"
                    name="isbn"
                    type="text"
                    value={product.category}
                  />
                </div>
                <div className="form-group mt-4 mb-0">
                  <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    onClick={submit}
                  >
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products

});

const mapDispatchToProps = dispatch => {
  return {
    edit: product => {
      dispatch(updateProduct(product));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdateProduct);
