import React from 'react';

const Cards = ({ data }) => {

  if(data.length === undefined){
    return (
      <div className="cards">
          <div className="card" key={data.id}>
            <img src={data.url} alt="colectoria" />
            <h1>{data.name}</h1>
           <h3>{data.items}</h3>
            <p>
              {data.city}, {data.uf} <br />
            {data.adress}  <br />
            {data.adress2}
          </p>
          </div>
    </div>
    )
  }

  return (
    <div className="cards">
      {
        data.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.url} alt="colectoria" />
            <h1>{card.name}</h1>
           <h3>{card.items}</h3>
            <p>
              {card.city}, {card.uf} <br />
            {card.adress}  <br />
            {card.adress2}
          </p>
          </div>
        ))
      }
    </div>
  );
};

export default Cards;

