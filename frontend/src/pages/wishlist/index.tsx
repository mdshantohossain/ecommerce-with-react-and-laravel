


const Wishlist = () => {


    return(
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="table-responsive wishlist_table">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th className="product-thumbnail">&nbsp;</th>
                                    <th className="product-name">Product</th>
                                    <th className="product-price">Price</th>
                                    <th className="product-stock-status">Stock Status</th>
                                    <th className="product-add-to-cart"></th>
                                    <th className="product-remove">Remove</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="product-thumbnail"><a href="#"><img src="assets/images/product_img1.jpg" alt="product1" /></a></td>
                                    <td className="product-name" data-title="Product"><a href="#">Blue Dress For Woman</a></td>
                                    <td className="product-price" data-title="Price">$45.00</td>
                                    <td className="product-stock-status" data-title="Stock Status"><span className="badge badge-pill badge-success">In Stock</span></td>
                                    <td className="product-add-to-cart"><a href="#" className="btn btn-fill-out"><i className="icon-basket-loaded"></i> Add to Cart</a></td>
                                    <td className="product-remove" data-title="Remove"><a href="#"><i className="ti-close"></i></a></td>
                                </tr>
                                <tr>
                                    <td className="product-thumbnail"><a href="#"><img src="assets/images/product_img2.jpg" alt="product2" /></a></td>
                                    <td className="product-name" data-title="Product"><a href="#">Lether Gray Tuxedo</a></td>
                                    <td className="product-price" data-title="Price">$55.00</td>
                                    <td className="product-stock-status" data-title="Stock Status"><span className="badge badge-pill badge-success">In Stock</span></td>
                                    <td className="product-add-to-cart"><a href="#" className="btn btn-fill-out"><i className="icon-basket-loaded"></i> Add to Cart</a></td>
                                    <td className="product-remove" data-title="Remove"><a href="#"><i className="ti-close"></i></a></td>
                                </tr>
                                <tr>
                                    <td className="product-thumbnail"><a href="#"><img src="assets/images/product_img3.jpg" alt="product3" /></a></td>
                                    <td className="product-name" data-title="Product"><a href="#">woman full sliv dress</a></td>
                                    <td className="product-price" data-title="Price">$68.00</td>
                                    <td className="product-stock-status" data-title="Stock Status"><span className="badge badge-pill badge-success">In Stock</span></td>
                                    <td className="product-add-to-cart"><a href="#" className="btn btn-fill-out"><i className="icon-basket-loaded"></i> Add to Cart</a></td>
                                    <td className="product-remove" data-title="Remove"><a href="#"><i className="ti-close"></i></a></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )
}


export default Wishlist