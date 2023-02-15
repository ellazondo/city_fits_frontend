import ProductCard from "./ProductCard";
import Slider from "react-slick";


 function ProductList ({ displayTops, displayBottoms, displayShoes }) {
    //products is passed as a prop. so far we can access each product as an object.

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };

    const displayTopsComponents = displayTops.map(top => {
        return <ProductCard key={top.id} product={top}/>
    })

    const displayBottomsComponents = displayBottoms.map(bottom => {
        return <ProductCard key={bottom.id} product={bottom}/>
    })

     const displayShoesComponents = displayShoes.map(shoe => {
        return <ProductCard key={shoe.id} product={shoe}/>
    })

    return (
        <>

        <Slider {...settings}>
       { displayTops.map(top => {
        return <ProductCard key={top.id} product={top}/>
            })
        }
        </Slider>
        <Slider {...settings}>
        {displayBottoms.map(bottom => {
        return <ProductCard key={bottom.id} product={bottom}/>
        })
        }
        </Slider>
        <Slider {...settings}>
        {displayShoes.map(shoe => {
        return <ProductCard key={shoe.id} product={shoe}/>
        })
        }
        </Slider>
        </>
   
    )}

    export default ProductList