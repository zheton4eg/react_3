import React from 'react';
import './Range.css'

class Range extends React.Component
{
    state = {value:"0"}

changeValue=(event)=>
{
    this.setState({value:event.target.value})
}

    render()
    {
        return(
            <>
             <hr/>
             <input type="range" onChange={this.changeValue}/>
             <div>{this.state.value}</div>
                <hr/>
                 </>
        )
    }
}
export default Range;