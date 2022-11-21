const QuoteButton = ({getNewValues, backgroundObjet}) => {
    return (
        <button onClick={getNewValues} style={backgroundObjet}>
           <i className='bx bxs-chevron-right' ></i>
        </button>
    )
}

export default QuoteButton