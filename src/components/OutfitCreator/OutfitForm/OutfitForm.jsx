import './OutfitForm.scss'
import { useState } from "react"
import top from './top.jpg'
import pants from './pants.jpg'
import shoes from './shoes.jpg'

export default function OutfitForm() {
  

  return (
  <div className="new-outfit-form">
<ul className="cards">
  <li>
    <a href="" className="card">
      <img src={top} className="card__image" alt="top" />
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
      <img src={pants} class="card__image" alt="" />
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
      <img src={shoes} class="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <div className="card__header-text">
            <h3 className="card__title">Shoes</h3>   
          </div>
        </div>
        <p class="card__description">Wow, you got shoes!</p>
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

      
  <div class="drops">
    <div class="drop drop-1"></div>
    <div class="drop drop-2"></div>
    <div class="drop drop-3"></div>
    <div class="drop drop-4"></div>
    <div class="drop drop-5"></div>
  </div>
    </div>
  </div>
  )
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
