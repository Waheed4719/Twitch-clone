type ButtonProps = {
    text: string
}

const Button = ({ text }: ButtonProps) => (
    <button type='button' className='custom-button'>
        {text}
    </button>
);


export default Button;
