import React, {Component} from 'react';


class SideList extends Component{

    render(){
            var savedList = this.props.savedPlaces.map(name=>{
              return(

                <div className="alert alert-info" key={name}>
                  
                   <strong>{name}</strong>
                </div>
              )
            })

      return(

    <ul>
      <h3>Saved Places</h3>
      {savedList}
    </ul>
          )
    }
}

export default SideList;