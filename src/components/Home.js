import React from 'react'
import Records from './Location.json';

const Home = () => {
  return (
    <>
   
    
          <div className="bodypart">
          <div className="firsttheme">
    Donate the Blood, Save the Life
          </div>
          <div className="secondtheme">
    Search the Donars
    <p></p>
          </div>
          <div className="frontform">
            <form>
              <select  onfocus='this.size=10;' 
onblur='this.size=1;' 
onchange='this.size=1; this.blur();' id='location' >
                <option value="0">--Locations--</option>
                {
                  Records.map((currentElement)=>{
                    return(
                      <option >{currentElement.name}</option>
                    )
                  })
                }
                
              </select>
              <select id="bloodgroup" className='bloodclass'>
                <option value="0">--Blood Group--</option>
                <option value="1">A+</option>
                <option value="1">A-</option>
                <option value="1">B+</option>
                <option value="1">B-</option>
                <option value="1">O+</option>
                <option value="1">O-</option>
                <option value="1">AB+</option>
                <option value="1">AB-</option>
              </select>
<div className="btn-home">

              <button id='btn'>Search</button>
</div>
            </form>
    
          </div>
        </div>
        
     
    
   
    
    </>
  )
}

export default Home
