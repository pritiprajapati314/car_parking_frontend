
import { red } from '@mui/material/colors'
import React from 'react'
import Navbar2 from '../UserStyles/Navbar2'
import SlotsDisplay from './SlotsDisplay'
import CheckBox from './CheckBox'
import { Grid } from '@material-ui/core'
const Searchpage = () => {
    return (
        <div>
            <Navbar2/>
            <div className="top" style={{background:'#ccffdd',height:'100px',width:'max-width',borderRadius:'10px'}}>
              <h2 >  Recommended Parking Places near you </h2>   
            </div>
            {/* <div className="searchFilters" style={{height:'800px',width:'280px',borderRadius:'10px',alignContent:'left'}}>
                 <h4 style = {{color:'black',alignSelf:'left'}}> Select filters </h4>
                 <br/>
                 <h6> Popular filters</h6>
                
              </div> */}
             <div className="cards" style={{height:'400px',marginLeft:'300px'}}>
             <Grid container item lg={12} sm={8} xs={12}>
         
           <SlotsDisplay/>
           <SlotsDisplay/>
           <SlotsDisplay/>
           <SlotsDisplay/>
             </Grid> 
             </div>
            

        </div>
    )
}

export default Searchpage
