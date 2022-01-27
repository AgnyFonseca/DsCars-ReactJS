import './Button.css';

type Props = {
    btnTitle: string;
}

const Button = ({ btnTitle }: Props) => {
    return (
        <button className="btn btn-secondary">
            <h6>{btnTitle.toUpperCase()}</h6>
        </button>
    );
};

export default Button;