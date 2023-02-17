import './OutfitForm.scss'
import { useState } from "react"

export default function OutfitForm({outfitFormTop, outfitFormBottom, outfitFormShoes}) {
  const topLink = outfitFormTop.link
  const bottomLink = outfitFormBottom.link
  const shoesLink = outfitFormShoes.link

  return (
    <div className="new-outfit-form">
<ul className="cards">
  <li>
    <a href="" className="card">
    <picture ><img className="card__image" src={topLink} /></picture>
      <div className="card__overlay">
        <div className="card__header">                       
          <div className="card__header-text">
            <h3 className="card__title">Top</h3>            
          </div>
        </div>
        <p className="card__description">Congrats, you picked a top!</p>
      </div>
    </a>      
  </li>
  <li>
    <a href="" className="card">
    <picture ><img className="card__image" src={bottomLink} /></picture>
      <div className="card__overlay">        
        <div className="card__header">                 
          <div className="card__header-text">
            <h3 className="card__title">Bottom</h3>
          </div>
        </div>
        <p className="card__description">Yay, you chose a bottom!</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" className="card">
    <picture ><img className="card__image" src={shoesLink}></img></picture>
      <div className="card__overlay">
        <div className="card__header">
          <div className="card__header-text">
            <h3 className="card__title">Shoes</h3>   
          </div>
        </div>
        <p className="card__description">Wow, you got shoes!</p>
      </div>
    </a>
  </li> 
</ul>

    <div id='form-div'>
      <form id='outfit-form'>
        <div className='inputs-div'>
        <input
          className='form-input'
          type="text"
          name="name"
          placeholder="Outfit name"
        />
         <input
          className='form-input'
          type="text"
          name="name"
          placeholder="Latitude"
        />
        <input
         className='form-input'
          type="text"
          name="name"
          placeholder="Longitude"
        />
        </div>
        <div>
        <button id='form-btn' type="save">Save Outfit</button>
        </div>
        <p href="#">Don't have an account? Sign In</p>
      </form>

      
  <div className="drops">
    <div className="drop drop-1"></div>
    <div className="drop drop-2"></div>
    <div className="drop drop-3"></div>
    <div className="drop drop-4"></div>
    <div className="drop drop-5"></div>
  </div>
    </div>
  </div>
  )
}

    // <div className="new-outfit-form">
    //   <form className='saved-outfit'>
    //     <div className='box'>
    //     <span className='imgBox'>
    //       <picture ><img className="productcard-form" src={topLink} /></picture>
    //     </span>
    //     </div>
            
    //         <div className='box'>
    //     <span className='imgBox'>
    //       <picture ><img className="productcard-form" src={bottomLink} /></picture>
    //     </span>
    //     </div>
            

    //         <div className='box'>
    //     <span className='imgBox'>
    //       <picture ><img className="productcard-form" src={shoesLink}></img></picture>						
    //     </span>
    //     </div>
    //   </form>

       

      // <div id='form-div'>
      // <form id='outfit-form'>
      //   <input
      //     type="text"
      //     name="name"
      //     placeholder="Outfit name"
      //   />
      //    <input
      //     type="text"
      //     name="name"
      //     placeholder="Latitude"
      //   />
      //            <input
      //     type="text"
      //     name="name"
      //     placeholder="Longitude"
      //   />
      //   <button id='form-btn' type="save">Save Outfit</button>
      //   {/* <p href="#">Don't have an account? Sign In</p> */}
      // </form>

      