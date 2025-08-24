import { Link } from "react-router-dom"
import Banner from "../images/bg_tt.png";
import "../styles/HomeStyle.css"

const Home = () => {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1>Tasty Treat Cafe</h1>
        <p>Flavor That Delight Every Bite</p>
        <Link to="/menu">
          <button>
            ORDER NOW
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home