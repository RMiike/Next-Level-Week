import React,{useState} from 'react';
import styled from 'styled-components'
import homebackground from '../../assets/images/home-background.svg'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.svg'
import { BsBoxArrowInRight, BsSearch } from 'react-icons/bs'
import { device } from '../../assets/mediasize'
import Modal from '../modal'

const Home = () => {
  const[hide,setHide]=useState(true)
  function handleClose(){
    setHide(true)
  }
  return (
    <>
    <PageHome>
      <div>

        <header>

          <h1><img src={Logo} alt="Logomarca" />Ecoleta</h1>
          <Link to="/create"><BsBoxArrowInRight size={22} color='#34CB79' />  Cadastre um ponto de coleta.</Link>
        </header>
        <div>

          <h1>Seu marketplace de coleta de resíduos.</h1>

          <p>Ajudamos pessoas a encontrar pontos de coletas de forma eficiente.</p>
          <button onClick={()=>{setHide(false)}}> <span><BsSearch  size={20}/></span><strong> Pesquisar pontos de coleta.</strong></button>
        </div>
      </div>
    </PageHome>
      <Modal hide={hide} handleClose={handleClose}/> 
    </>

  );
};

export default Home;

const PageHome = styled.div`
  height:100vh;
  background: url(${homebackground}) no-repeat ;
  background-position: 25vw bottom; 

  @media(min-width: 1441px){
    background-position: 45vw bottom;
  }

@media(max-height: 750px){
  background-position-y:200px;
  background-position-x: 35vw;
}
  @media (max-width: 1005px) {
    background-position: 725vw;
  }
  div{
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media ${device.tablet} {
    align-items:center;
    text-align: center;
    }
  
    header{
      margin-top: 40px; 
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      a{
        color: var(--title-color);
        font-weight:700;
        @media ${device.tablet}  {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
      }
        svg {
          margin-right: 15px; 
        }
      }
    }
    div {
      max-width: 560px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0;
      h1 {
        color: var(--title-color);
        font-size: 54px;
        @media ${device.tablet} {
          font-size: 44px;
        }
        @media ${device.mobileM} {
          font-size: 34px;

        }
      }
      p {
        font-size: 24px;
        line-height: 38px;
        margin-top: 24px;
        @media (max-height: 568px){
          font-size: 14px;
        }
      }
      button {
        width: 100%;
        max-width: 360px;
        background: var(--primary-color);
        height: 72px;
        border-radius: 8px;
        display: flex;
        outline:none;
        border: 0;
        align-items: center;
        margin-top: 40px;
        transition: 400ms;
        color: white;
        @media ${device.tablet} {
          height: 52px;
        }
        @media ${device.mobileM} {
          height: 30px;
          margin: 0 auto;
        }
        
        &:hover{
          background-color: #2fb86e;
        }
        span {
          width: 72px;
          height: 72px;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
          background-color: rgb(0,0,0,.08);
          display: flex;
          align-items: center;
          justify-content: center;
          @media ${device.tablet}  {
            width: 52px;
          height: 52px;
          }
          @media ${device.mobileM} {
          height: 30px;
          margin: 0 auto;
        }
          
        }
        strong {
          flex: 1;
          text-align: center;
        }
      }
    }
  }
`
