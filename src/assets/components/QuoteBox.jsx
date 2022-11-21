import QuoteButton from "./QuoteButton"

const QuoteBox = ({quote, getNewValues, backgroundObjet, colorObjet}) => {
   return (
    <article className="quoteBox">
     <p className="p" style={colorObjet}>{quote.quote}</p>
     <h4 className="h4" style={colorObjet}>{quote.author}</h4>
     <section className="quoteBox-footer">
        <QuoteButton getNewValues={getNewValues} backgroundObjet={backgroundObjet}/>
        <i style={colorObjet} className='bx bxs-quote-alt-left'></i>
     </section>
    </article>
   )
}

export default QuoteBox