
export default function ShopProducts(props) {
    const displayProducts = props.products.map((eachProduct) => <li>{eachProduct}</li>)

    return (
        <div>
            <div className="products">
                <div className="productsHeader">
                    <h1>Shop All</h1>
                </div>
                <ul>
                    {displayProducts}
                </ul>
            </div>
        </div>
    )
}