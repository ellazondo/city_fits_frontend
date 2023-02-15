import './OutfitForm.scss'
import { useState } from "react"

export default function OutfitForm() {
  // const { link, name } = product;
  // const [outfitTop, setOutfitTop] = useState("")
  // const [outfitBottom, setOutfitBottom] = useState("")
  // const [outfitShoes, setOutfitShoes] = useState("")
  // const [newOutfitName, setNewOutfitName] = useState("");

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch("http://localhost:3000/outfit_products", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       outfitTop: outfitTop,
  //       outfitBottom: outfitBottom,
  //       outfitShoes: outfitShoes,
  //       name: name
  //     }),
  //   })
  //     .then((r) => r.json())
  //     .then((newOutfit) => onAddOutfit(newOutfit));
  // }

  return (
    <div className="new-outfit-form">
      <h2>Create Outfit</h2>
      <div>
        <div>
          <h2>Top</h2>
          <span>
        <picture ><img className="productcard" src="https://images.urbndata.com/is/image/FreePeople/80826902_266_a/?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=720" /></picture>
        </span>
        
          <h2>bottom</h2>
          <span>
        <picture ><img className="productcard" src="https://images.urbndata.com/is/image/FreePeople/79292488_060_c/?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640" /></picture>
        </span>
        
          <h2>Shoes</h2>
          <span>
        <picture ><img className="productcard" src="https://images.urbndata.com/is/image/FreePeople/69311884_009_b/?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640" /></picture>
        </span>
        </div>
      </div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Outfit name"
        />
        <button type="save">Save Outfit</button>
      </form>
    </div>
  );
}

      // <form onSubmit={handleSubmit}>
      //   <input
      //     type="text"
      //     name="name"
      //     placeholder="Outfit name"
      //     value={name}
      //     onChange={(e) => setNewOutfitName(e.target.value)}
      //   />
      //   <button type="save">Save Outfit</button>
      // </form>
