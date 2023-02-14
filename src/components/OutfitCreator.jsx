import './OutfitCreator.scss';
import { useState, useEffect} from 'react';
import blackcorset from './assets/blackcorset.jpg';
import flowertop from './assets/flowertop.jpg';
import purpletop from './assets/purpletop.jpg';

const OutfitCreator = () => {

  const [indexImg, setIndexImg] = useState(0)

  const cards = [
    { id: 1, image: blackcorset },
    { id: 2, image: flowertop },
    { id: 3, image: purpletop }
  ]

  const mod = (n, m) => {
    let result = n % m

    //returns a positive value
    return result >= 0 ? result : result + m
  }

  useEffect(() => {
    setTimeout(() => {
      setIndexImg((indexImg + 1) % cards.length)
    }, 3000)
  }, [indexImg])
  
    return (
    <div className='carrusel'>
    {cards.map((item, i) => {
      const indexImgLeft = mod(indexImg - 1, cards.length)
      const indexImgRight = mod(indexImg + 1, cards.length)
      
      let className = ""
      if (i === indexImg) {
        className = "card card--active"
      } else if (i === indexImgRight) {
        className = "card card--right"
      } else if (i === indexImgLeft) {
        className = "card card--left"
      } else {
        className = "card"
      }
      return <img key={item.id} src={item.image} alt='top' className={className}/>
    })}
    </div>
)
}

export default OutfitCreator 