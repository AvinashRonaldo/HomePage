import React from 'react';
import './medTile.css';
export const MedTile = ({ product }) => {
  return (
    <div class="med-card">
      <img src={product?.image} alt="productImage" class="view" />
    </div>
  );
};

export default MedTile;