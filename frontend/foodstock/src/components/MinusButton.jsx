const MinusButton = ({id, handleMinus}) => {
    return (
        <button onClick={()=> handleMinus(id)}>-</button>
    );
}
 
export default MinusButton;