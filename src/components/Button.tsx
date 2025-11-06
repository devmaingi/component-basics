interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    text: string;
    onClick?: () => void;
    disabled?: boolean;
}


function Button ({type, text,onClick, disabled}: ButtonProps) {

    return <button className="p-2 bg-blue-500 text-white rounded" type={type} onClick={onClick} disabled={disabled }>{text}
    </button>;
}
export default Button;