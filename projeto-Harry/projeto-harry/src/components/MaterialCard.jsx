import React from 'react';

const MaterialCard = ({ name, image, description }) => {
  return (
    <div className="card shadow-sm h-100 text-center">
      <img src={image} className="card-img-top" alt={name} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default MaterialCard;