import './OutfitForm.scss'
import { useState, useEffect } from "react"

export default function OutfitForm({outfitFormTop, outfitFormBottom, outfitFormShoes}) {
  const [outfitCreatorTop, setOutfitCreatorTop] = useState("https://images.urbndata.com/is/image/FreePeople/69346104_010_c/?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1080")
  const [outfitCreatorBottom, setOutfitCreatorBottom] = useState("https://images.urbndata.com/is/image/FreePeople/69346104_010_c/?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1080")
  const [outfitCreatorShoe, setOutfitCreatorShoe] = useState("https://images.urbndata.com/is/image/FreePeople/69346104_010_c/?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1080")
  console.log("outfitCreatorBottom", outfitCreatorBottom)
  console.log("outfitCreatorTop", outfitCreatorTop)
  console.log("outfitcreatorshoes", outfitCreatorShoe)
  


  useEffect(() => {
  setOutfitCreatorTop(outfitFormTop?.link);
  setOutfitCreatorBottom(outfitFormBottom?.link);
  setOutfitCreatorShoe(outfitFormShoes?.link);

  }, [outfitFormShoes, outfitFormBottom, outfitFormTop])


  return (
    <div className="new-outfit-form">
      <ul className="cards">
        <li>
          < div className="card">
          <img className="card__image" src={outfitCreatorTop} alt="choose a top"  />
      <div className="card__overlay">
        <div className="card__header">                       
          <div className="card__header-text">
            <h3 className="card__title">Top</h3>            
          </div>
        </div>
        <p className="card__description">Congrats, you picked a top!</p>
      </div>
    </div>      
  </li>
  <li>
    < div className="card">
    <img className="card__image" src={outfitCreatorBottom} alt="choose a bottom"  />
      <div className="card__overlay">        
        <div className="card__header">                 
          <div className="card__header-text">
            <h3 className="card__title">Bottom</h3>
          </div>
        </div>
        <p className="card__description">Yay, you chose a bottom!</p>
      </div>
    </div>
  </li>
  <li>
    < div className="card">
    <img className="card__image" src={outfitCreatorShoe} alt="choose a pair of shoes" ></img>
      <div className="card__overlay">
        <div className="card__header">
          <div className="card__header-text">
            <h3 className="card__title">Shoes</h3>   
          </div>
        </div>
        <p className="card__description">Wow, you got shoes!</p>
      </div>
    </div>
  </li> 
</ul>

    <div className="form-container">
      {/* <form>
        <div>
        <input
          type="text"
          name="name"
          placeholder="Outfit name"
        />
         <input
          type="text"
          name="name"
          placeholder="Latitude"
        />
        <input
          type="text"
          name="name"
          placeholder="Longitude"
        />
        </div>
        <div>
        <button type="save">Save Outfit</button>
        </div>
        <p>Don't have an account? Sign In</p>
      </form> */}

      
    </div>
  </div>
  )
}

      