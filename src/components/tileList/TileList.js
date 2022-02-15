import React from "react";
import PropTypes from 'prop-types';

import { Tile } from '../tile/Tile';

export const TileList = (props) => {
  return (
    <div>
      
        {props.tiles.map((tile, index) => 
          <Tile key={index} tile={tile} />
        )}
        
    </div>
  );
};

TileList.prototypes = {
  tiles: PropTypes.array.isRequired
}