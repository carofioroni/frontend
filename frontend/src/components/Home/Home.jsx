import './Home.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom'

function Home( ){
    const navigate = useNavigate();
  const goToContextual = () => {
    navigate("/contextual");
  };
return(
    <div className='homeContainer'>
        <button onClick={goToContextual}>MUSICA CONTEXTUAL</button>
        <button>TINDER MUSICAL</button>

    </div>
)
}
export default Home