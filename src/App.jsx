import React ,{ useState } from 'react'
import Tours from './comp/Tours'
import data from './data'
import './App.css'

const App = () => {
  const [tours, setTours] = useState(data);
  
  function removeTour(id){
    const newTours=tours.filter(tour=>tour.id!==id);
    setTours(newTours);
  }

  if(tours.length===0){
    return(
      <div className="Refresh">
        <h2>No Tour Left</h2>
        <button className='btnWhite' onClick={()=>setTours(data)}>Refresh</button>
      </div>
    );
  }


  return (
    <div className="app">
      <Tours tours={tours} removeTours={removeTour} />
    </div>
  )
};


export default App;
