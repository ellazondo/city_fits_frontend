import './OutfitCreator.scss';
import { useState, useEffect} from 'react';
import blackcorset from './assets/blackcorset.jpg';
import flowertop from './assets/flowertop.jpg';
import purpletop from './assets/purpletop.jpg';

// I had to import the pictures directly from react, but this should be gone once we fetch.

const OutfitCreator = () => {

  const [indexImg, setIndexImg] = useState(0)

  const cards = [
    { id: 1, image: blackcorset },
    { id: 2, image: flowertop },
    { id: 3, image: purpletop }
  ]

  // I'm not sure what this does, the nice indian man from YouTube said we needed it.
  const mod = (n, m) => {
    let result = n % m

    // so it returns a positive value
    return result >= 0 ? result : result + m
  }

  useEffect(() => {
    setTimeout(() => {
      setIndexImg((indexImg + 1) % cards.length)
    }, 3000) //3000 is the time that the images take to move, but we cant to change this logic so they move when clicked.
  }, [indexImg])

  // this maps over the images
    return (
    <div className='carrusel'>
    {cards.map((item, i) => {
      const indexImgLeft = mod(indexImg - 1, cards.length)
      const indexImgRight = mod(indexImg + 1, cards.length)
      
      // this tell the images where to move dependin on the possition of the front image.
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
      // the conditional returns this and populates the carousel
      return <img key={item.id} src={item.image} alt='top' className={className}/>
    })}
    </div>
)
}

export default OutfitCreator 