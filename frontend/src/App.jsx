import Footer from './Components/Footer/footer'
import Header  from './Components/Header/header'
import Library from './Components/Library/library'
import Homepage from './Components/Homepage/homepage'
//import AddSongForm from './Components/Forms/addsong'
import { useState } from "react";
import './index.css'

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <Header  setSearchResults={setSearchResults} />
      <Homepage searchResults={searchResults}/>
      <Footer/>
      {/* <Library/> */}
      
      {/* <AddSongForm></AddSongForm> */}
      </>
  )
}

export default App
