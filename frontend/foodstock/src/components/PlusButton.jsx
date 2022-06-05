const PlusButton = ({id, handlePlus}) => {
    return (
        <button  onClick={()=> handlePlus(id)}>+</button>
    );
}
 
export default PlusButton;