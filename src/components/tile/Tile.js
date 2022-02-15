import React from "react";
import PropTypes from 'prop-types';


export const Tile = (props) => {
  
  /* this function doesn't work for some reason so I used Object.values().map()
  const display = () =>{
    let index = 0;
    for(let key in props.tile){
      const output = <p key={index} className={`${index === 0 ? "tile-title" : ""} tile`}>{props.tile[key]}</p>;
      index++;
      return output;
    }
  }
  */

  return (
        <div className="tile-container">
          {/* {display()} */}
          {Object.values(props.tile).map((value, index) => 
            <p key={index} className={`${index === 0 ? "tile-title" : ""} tile`}>
              {value}
            </p>
          )} 
        </div>
  );
};

Tile.prototypes = {
  tile: PropTypes.object.isRequired
}
