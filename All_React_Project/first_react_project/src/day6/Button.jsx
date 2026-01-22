let CustomButton = ({title, onClickCustomButton})=>{
    return(
        <div>
            <button onClick={onClickCustomButton}>
                {title}
            </button>
        </div>
    )
}
export default CustomButton