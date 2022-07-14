
export default function ShopProducts(props) {
    const displayProducts = props.products.map((eachProduct) => <li>{eachProduct}</li>)

    return (
        <div>
            <div className="shop">
                <div className="shopsHeader">
                    <h1>Shop All</h1>
                </div>
                <div className="products1">
                    <img src="glenna.jpg" alt="glenna" />
                <div className="products2">
                    <img src="kinn.jpg" alt="kinn" />
                </div>
                <div className="products3">
                    <img src="harper.jpg" alt="harper" />
                </div>
                </div>
                    <ul>
                        {displayProducts}
                    </ul>
                  </div>  
            </div>
    )
}