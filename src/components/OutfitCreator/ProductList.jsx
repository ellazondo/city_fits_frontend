import ProductCard from "./ProductCard";
import Slider from "react-slick";


 function ProductList ({ displayTops, displayBottoms, displayShoes, setOutfitFormTop, setOutfitFormBottom, setOutfitFormShoes }) {
    //products is passed as a prop. so far we can access each product as an object.

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1
      };

    return (
        <div className="product-list">
        <h2 className="pl-5 mb-22 text-8xl font-bold font-heading items-center">The Collection.</h2>
    <div className="slider-card-container">
        
        <div className="cards">
            <Slider {...settings}>
                {displayTops.map(top => {
                return <ProductCard 
                key={top.id} 
                product={top}
                setProduct={setOutfitFormTop}
                />
                    })
                }
          </Slider>
        </div>
        <div className="cards">
            <Slider {...settings}>
                {displayBottoms.map(bottom => {
                return <ProductCard 
                key={bottom.id} 
                product={bottom}                
                setProduct={setOutfitFormBottom}
                />
                    })
             }
            </Slider>
        </div>
        <div className="cards">
            <Slider {...settings}>
                {displayShoes.map(shoe => {
                return <ProductCard 
                key={shoe.id} 
                product={shoe}                
                setProduct={setOutfitFormShoes}
                />
                    })
            }
            </Slider>
        </div>
    </div>
    </div>
   
    )}

    export default ProductList