import React from 'react';
import { Spinner } from 'react-activity'
import styled from 'styled-components'

const Cards = ({ data, loading }) => {


  if(loading){
    return (
      <DotContainer>
        <Spinner color='#222' size={100} />
      </DotContainer>
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


const DotContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items:center;
  height: 90vh;
  max-width: 1820px;
  background: #EEEEEE;
`