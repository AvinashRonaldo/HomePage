import React from 'react';
import './medTile.css';
export const MedTile = ({ product }) => {
  return (
    <div class="tile-card">
      <img src={product?.image} alt="productImage" class="image-view" />
    </div>
  );
};

export default MedTile;