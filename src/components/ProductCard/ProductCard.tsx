import './ProductCard.css';
import ProductImg from '../../assets/images/car-card.svg';
import Button from '../Button/Button';

const ProductCard = () => {
    return (
        <div className="product-container">
            <div className="product-title">
                <img src={ProductImg} alt="Nome do produto" />
                <h6>Audi Supra TT</h6>
            </div>
            <div className="product-content">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, nisi</p>
                <Button btnTitle="Comprar" />
            </div>
        </div>
    );
};

export default ProductCard;