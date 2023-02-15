function ProductCard({product}) {
    const { link } = product;
    //destructuring link,name,style, category from product

    
    return (

        <div className="pic-ctn"> 
        <li className="productcard">
             <img src={link} /> 
        </li>
        </div>
            )}


export default ProductCard