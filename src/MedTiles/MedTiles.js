import React from 'react';
import MedTile from '../components/medTile/MedTile';
import './MedTiles.css';
export const MedTiles = ({ products }) => {
  return (
    <div>
      <div class="products-view">
        {products?.data.map((product, index) => {
          return (
            <div key={index}>
              <MedTile product={product} key={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MedTiles;