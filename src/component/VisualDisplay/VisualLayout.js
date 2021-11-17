import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Visual.css';
import { ReactDOM } from 'react';

class VisualLayout extends Component {
 
    constructor(props) {
        super(props);
       
    }
//     changeStyles = () => {
//         let element = document.getElementById('button') 
//   element.backgroundColor = 'blue'
//         console.log("style changed")
//     }
     
    render() {
        return (
            <div>
                
    
    <div className="box">
    <div className="container">
        {/* <div className="details">
         <div className="t1">
         <h2>Two Wheeler Parking</h2>
         </div>
         <div className="t2">
             <h2>Two Wheeler Parking</h2>
         </div>
        
        </div> */}
        
       
    {/* <div className="container"> */}
    {/* <div className="f1">
             <h2>Four Wheeler Parking</h2>
         </div>
         */}
    <div className='spaces'> 
       
    <div className="row1">
        <div className="slotr1" id="s1"></div>
        <button className="slotr1" id="button" ></button>
        <div className="slotr1"></div>
        <div className="slotr1"></div>
        <div className="slotr1"></div>
        <div className="slotr1"></div>
        <div className="slotr1"></div>
        <div className="slotr1"></div>
        <div className="slotr1"></div>
        <div className="slotr1"></div>
        <div className="slotr1"></div>
        <div className="slotr1"></div>
        <div className="slotr1"></div>
        <div className="slotr1" id="r7"></div>
        <div className="slotr1"></div>
        <div className="slotr1"></div>
        <div className="slotr1"></div>
        <div className="slotr1"></div>
        <div className="slotr1"></div>
        <div className="slotr1"></div>
        <div className="slotr1"></div> 
        <div className="slotr1"></div>
        <div className="slotr1"></div>
        <div className="slotr1"></div>
        <div className="slotr1"></div>
        <div className="slotr1"></div> 
        <div className="slotr1"></div> 
        <div className="slotr1"></div> 
        <div className="slotr1"></div> 
    </div>
    
  <div className="colmspaces">
    <div className="colm1">
       
        <div className="slotcl1"></div>
        <div className="slotcl1"></div>
        <div className="slotcl1"></div>
        <div className="slotcl1"></div>
        <div className="slotcl1"></div>
        <div className="slotcl1"></div>
        <div className="slotcl1"></div>
        <div className="slotcl1"></div>
        <div className="slotcl1"></div>
        <div className="slotcl1"></div>
        <div className="slotcl1"></div>
        <div className="slotcl1"></div>
        <div className="slotcl1"></div>
         <div className="slotcl1"></div> 
        <div className="slotcl1"></div>
         <div className="slotcl1"></div> 
      <div className="slotcl1"></div>
        {/* <div className="slotcl1"></div> 
        <div className="slotcl1"></div>
        <div className="slotcl1"></div>
        <div className="slotcl1"></div>  */}
    </div>
    <div className="colm2">
        <div className="slotcl2"></div>
        <div className="slotcl2"></div>
        <div className="slotcl2"></div>
        <div className="slotcl2"></div>
        <div className="slotcl2"></div>
        <div className="slotcl2" id="c8"></div>
        <div className="slotcl2"></div>
        <div className="slotcl2"></div>
        <div className="slotcl2"></div>
        <div className="slotcl2"></div>
        <div className="slotcl2"></div>
        <div className="slotcl2"></div>
        <div className="slotcl2"></div>
        <div className="slotcl2"></div>
        <div className="slotcl2"></div>
        <div className="slotcl2"></div>
        <div className="slotcl2"></div>
        {/* <!-- <div className="slotcl2"></div> --> */}
    </div>
     <div className="colm3">
        <div className="slotcl3"></div>
        <div className="slotcl3"></div>
        <div className="slotcl3"></div>
        <div className="slotcl3"></div>
        <div className="slotcl3"></div>
        <div className="slotcl3"></div>
        <div className="slotcl3"></div>
        <div className="slotcl3"></div>
        <div className="slotcl3"></div>
        <div className="slotcl3"></div>
        <div className="slotcl3"></div>
        <div className="slotcl3"></div>
        <div className="slotcl3"></div>
        <div className="slotcl3"></div>
        <div className="slotcl3"></div>
        <div className="slotcl3"></div>
        <div className="slotcl3"></div>
        {/* <!-- <div className="slot"></div> --> */}
    </div> 
     <div className="colm4">
        <div className="slotcl4"></div>
        <div className="slotcl4"></div>
        <div className="slotcl4"></div>
        <div className="slotcl4"></div>
        <div className="slotcl4"></div>
        <div className="slotcl4"></div>
        <div className="slotcl4" id="c12"></div>
        <div className="slotcl4"></div>
        <div className="slotcl4"></div>
        <div className="slotcl4"></div>
        <div className="slotcl4"></div>
        <div className="slotcl4"></div>
        <div className="slotcl4"></div>
        <div className="slotcl4"></div>
        <div className="slotcl4"></div>
        <div className="slotcl4"></div>
        <div className="slotcl4"></div>
        {/* <!-- <div className="slot"></div> --> */}
    </div>
    <div className="colm5">
        <div className="slotcl5"></div>
        <div className="slotcl5"></div>
        <div className="slotcl5"></div>
        <div className="slotcl5" id="c12"></div>
        <div className="slotcl5"></div>
        <div className="slotcl5"></div>
        <div className="slotcl5"></div>
        <div className="slotcl5"></div>
        <div className="slotcl5" id="v6"></div>
        <div className="slotcl5"></div>
        <div className="slotcl5"></div>
        <div className="slotcl5"></div>
        <div className="slotcl5"></div>
        <div className="slotcl5"></div>
        <div className="slotcl5"></div>
        <div className="slotcl5"></div>
        <div className="slotcl5"></div>
        {/* <!-- <div className="slot"></div> --> */}
    </div>
    <div className="colm6">
        <div className="slotcl6"></div>
        <div className="slotcl6"></div>
        <div className="slotcl6"></div>
        <div className="slotcl6"></div>
        <div className="slotcl6"></div>
        <div className="slotcl6"></div>
        <div className="slotcl6"></div>
        <div className="slotcl6"></div>
        <div className="slotcl6"></div>
        <div className="slotcl6"></div>
        <div className="slotcl6"></div>
        <div className="slotcl6"></div>
        <div className="slotcl6"></div>
        <div className="slotcl6"></div>
        <div className="slotcl6"></div>
        <div className="slotcl6"></div>
        <div className="slotcl6"></div>
        {/* <!-- <div className="slot"></div> --> */}
    </div>
    <div className="colm7">
        <div className="slotcl7"></div>
        <div className="slotcl7"></div>
        <div className="slotcl7"></div>
        <div className="slotcl7"></div>
        <div className="slotcl7" id="c11"></div>
        <div className="slotcl7"></div>
        <div className="slotcl7"></div>
        <div className="slotcl7"></div>
        <div className="slotcl7"></div>
        <div className="slotcl7"></div>
        <div className="slotcl7"></div>
        <div className="slotcl7"></div>
        <div className="slotcl7" id="c10"></div>
        <div className="slotcl7"></div>
        <div className="slotcl7"></div>
        <div className="slotcl7"></div>
        <div className="slotcl7"></div>
        {/* <!-- <div className="slot"></div> --> */}
    </div>
     <div className="colm8">
        <div className="slotcl8"></div>
        <div className="slotcl8"></div>
        <div className="slotcl8"></div>
        <div className="slotcl8"></div>
        <div className="slotcl8"></div>
        <div className="slotcl8" id="c12"></div>
        <div className="slotcl8"></div>
        <div className="slotcl8"></div>
        <div className="slotcl8"></div>
        <div className="slotcl8"></div>
        <div className="slotcl8"></div>
        <div className="slotcl8"></div>
        <div className="slotcl8" id="c13"></div>
        <div className="slotcl8"></div>
        <div className="slotcl8"></div>
        <div className="slotcl8"></div>
        <div className="slotcl8"></div>
        {/* <div className="slot"></div>  */}
  {/* <!--  </div> -->
  <!-- <i className="fas fa-arrow-right"></i> --> */}
 </div> 
 <div className="colm9">
        <div className="slotcl9"></div>
        <div className="slotcl9"></div>
        <div className="slotcl9"></div>
        <div className="slotcl9"></div>
        <div className="slotcl9" id="c12"></div>
        <div className="slotcl9"></div>
        <div className="slotcl9"></div>
        <div className="slotcl9"></div>
        <div className="slotcl9" id="c12"></div>
        <div className="slotcl9"></div>
        <div className="slotcl9"></div>
        <div className="slotcl9"></div>
        <div className="slotcl9"></div>
        <div className="slotcl9"></div>
        <div className="slotcl9"></div>
        <div className="slotcl9"></div>
        <div className="slotcl9"></div>
        </div>
        <div className="colm10">
        <div className="slotcl10"></div>
        <div className="slotcl10"></div>
        <div className="slotcl10"></div>
        <div className="slotcl10"></div>
        <div className="slotcl10"></div>
        <div className="slotcl10"></div>
        <div className="slotcl10"></div>
        <div className="slotcl10" id="c12"></div>
        <div className="slotcl10"></div>
        <div className="slotcl10"></div>
        <div className="slotcl10"></div>
        <div className="slotcl10"></div>
        <div className="slotcl10"></div>
        <div className="slotcl10"></div>
        <div className="slotcl10"></div>
        <div className="slotcl10" id="c12"></div>
        <div className="slotcl10"></div>
        </div>
        </div>
        </div>
      
 </div>

 {/* <!-- <i className="far fa-arrow-alt-circle-down"></i> --> */}
 <i className="fas fa-long-arrow-alt-up">Exit</i>
 {/* <i className="fas fa-long-arrow-alt-up two">Two Wheeler's Space</i> */}

 <i className="fas fa-long-arrow-alt-right">Entry</i>
 {/* <!-- <i className="fas fa-arrow-right"></i> --> */}
 

</div>

            </div>
        )
    }
}

export default VisualLayout
