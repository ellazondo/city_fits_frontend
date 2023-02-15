function ProductCard({product}) {
    const { link, name } = product;
    //destructuring link,name,style, category from product

    
    return (

        <div className="pic-ctn"> 
        <li className="productcard">
             <img src={link} /> 
            <h4>{name}</h4>
        </li>
        </div>
            )}


export default ProductCard