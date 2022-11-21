import QuoteBox from "./assets/components/QuoteBox"
import quoteDB from "./db/quotes.json"
import colors from "./db/colors.js"
import { useState } from "react"

function App() {
  const getRandom = (array) => {
    const randomIndex = Math.floor(array.length*Math.random())
    return array[randomIndex]
  }

  const [quote, setQuote] = useState(getRandom(quoteDB))
  const [color, setColor] =useState(getRandom(colors))

  const getNewValues = () => {
    const newQuote = getRandom(quoteDB)
    const newColor = getRandom(colors)
    setQuote(newQuote)
    setColor(newColor)
  }

  const backgroundObjet = {
    backgroundColor: color
  }

  const colorObjet = {
    color: color
  }

  return (
    <div className="App" style={backgroundObjet}>
     <QuoteBox 
     quote={quote} 
     getNewValues={getNewValues}
     backgroundObjet={backgroundObjet}
     colorObjet={colorObjet}
     />
    </div>
  )
}

export default App
