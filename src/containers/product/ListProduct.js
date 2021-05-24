import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct, listProducts } from "../../redux/actions/product.actions";

const Products = ({ products, getAllProducts, deleteProduct }) => {
    const [brand, setBrand] = useState("")

    const fieldDeleteProduct = id => {
        deleteProduct(id);
    };

    useEffect(() => {
        getAllProducts(brand);
    }, [brand, getAllProducts]);

    const handelBrand = (e, data) => {
        e.preventDefault()
        setBrand(data)
    }
    return (
        <>
            <div className="card text-center">
                <div className="card-header">List Of Products</div>
                <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Brands
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {products?.allProducts?.data?.map(product => {
                                return (
                                    <a key={product._id} className="dropdown-item" onClick={(e) => handelBrand(e, product.brand)}>{product.brand}</a>
                                )
                            })}

                        </div>
                    </div>
                </form>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Quantité</th>
                            <th scope="col">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.allProducts?.data?.map(product => (
                            <tr key={product._id}>
                                <th>{product.name}</th>
                                <td>{product.quantity}</td>
                                <td className="d-flex justify-content-around flex-wrap">
                                    <Link to={"/dashboard/update/" + product._id} className="btn btn-success">Update</Link>
                                    <a type="button" className="btn btn-danger" onClick={() => fieldDeleteProduct(product._id)}>Delete</a>
                                </td>
                            </tr>

                        ))}

                    </tbody>
                </table>
            </div>
        </>
    );
};

const mapStateToProps = state => ({
    products: state.products
});
const mapDispatchToProps = dispatch => ({
    getAllProducts: payload => dispatch(listProducts(payload)),
    deleteProduct: id => dispatch(deleteProduct(id))

});
export default connect(mapStateToProps, mapDispatchToProps)(Products);