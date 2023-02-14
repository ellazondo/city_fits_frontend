import './OutfitMap.scss'
import nycmap from './nycmap.jpg'

const OutfitMap = () => {

    return (
        <div>
            <img id="nyc-map" src={nycmap} alt="nycmap"/>
            <h2 id="comments">Comments:</h2>
                <div>
                    <li className="comment">This OutFit is Fire!!! -- by AnaInNyc</li>
                    <li className='comment'>I need this ASAP! -- by fashionlover88</li>
                    <li className='comment'>Perfect for the occasion... -- by UWSgirl</li>
                </div>
                <div>
                    <h2 id="fakeformtitle">Add your comment:</h2>
                </div>
        </div>
    )
}

export default OutfitMap