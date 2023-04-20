function ProductCard({ product, setProduct }) {

    function handleClick() {
        setProduct(product)
    }
    
    return (

        <div className="slider-container" onClick={handleClick}> 
        <li className="slider-pic">
             <img src={product.link} /> 
        </li>
        </div>
            )}


export default ProductCard