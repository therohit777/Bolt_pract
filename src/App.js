import './App.css';
import { BsArrowUpRight } from "react-icons/bs";
import logo1 from "../src/images/cola1.jpg";
import videos from "../src/images/ocean.mp4";

function App() {
  return (
    <div className="App">
      <div className="body">
        <div className="bodydivision1">
            <div className="subheader">Shopify Editions | Winter '23: <span className='yellowtxt' >Explore 100+ product updates <BsArrowUpRight style={{fontSize:'12px',fontWeight:'700',marginLeft:'2px'}}/></span></div>
            <div className="mainheader">The gobal commerce platform</div>
            <p>Build your business with Shopify to sell online, offline, and everywhere in between.</p>
            <div className='search'> 
              <input type="text" placeholder='Enter your email address'/>
              <button>Start free trial</button>
            </div>
            <h1 className='desck'>Try Shopify free for 3 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify.</h1>
        </div>

        <div className="bodydivision2">
          <div className="movingimg">
            <img src={logo1} alt="" width="200px"/>
            <img src={logo1} alt="" width="200px"/>
            <img src={logo1} alt="" width="200px"/>
            <img src={logo1} alt="" width="200px"/>
            <img src={logo1} alt="" width="200px"/>
            <img src={logo1} alt="" width="200px"/>
          </div>
          <div className="videos">
            <video src={videos} className="videoG" controls="yes"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
