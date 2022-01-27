import Button from '../Button/Button';
import './Input.css';

const Input = () => {
    return (
        <div className="input-container">
            <input type="text" placeholder="Digite sua busca" />
            <Button btnTitle="Buscar"></Button>
        </div>
    );
};

export default Input;