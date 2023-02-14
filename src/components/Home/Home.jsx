import './Home.scss'
import cutepic from './cutepic.jpeg'

const Home = () => {
    return (
        <div>
            <img id="cute-pic" src={cutepic} alt="Cute-Pic"/>
        </div>
    )
}

export default Home