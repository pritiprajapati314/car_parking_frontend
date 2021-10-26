import React from 'react'
import {Checkbox,Collapse} from 'antd';
const {Panel} = Collapse
const filters = [
    {
       "_id":1,
       "name":"Price"
    },
    {
        "_id":2,
       "name":"Two wheeler"
    },
    {
        "_id":3,
        "name":"Popularity"
    },
    {
        "_id":4,
        "name":"Free cancellation"
    }
]
function CheckBox(){
    return (
        <div>
            
                <Panel header key="1">
                    {filters.map((value,index)=>{
                        <React.Fragment key={index} styles={{color:'black'}} >
                              <Checkbox type="checkbox"/>
                              <span>{value.name}</span>
                              hello
                            </React.Fragment>

                    })}
                </Panel>
            
        </div>
    )
}
export default CheckBox;


