import { Link } from 'react-router-dom';
import { ReactComponent as CarImage } from  '../../assets/images/car-header.svg';
import Button from '../../components/Button/Button';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-card">
                <div className="home-image-container">
                    <CarImage className="home-image" />
                </div>
                <div className="home-content-container">
                    <h1>O carro perfeito para você</h1>
                    <p>Conheça nossos carros e dê mais um passo 
                        na realização do seu sonho
                    </p>
                </div>
            </div>

            <div className="home-sm-card">
                <div className="home-btn-container">
                    <Link to="/catalog">
                        <Button btnTitle="Ver Catálogo"></Button>
                    </Link>
                    <p>Comece agora a navegar</p>
                </div>
            </div>
        </div>
    );
};

export default Home;