import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { BsBoxArrowInLeft } from 'react-icons/bs'
import Logo from '../../assets/images/logo.svg'
import styled from 'styled-components'
import axios from '../../services/api'
import Cards from './card'

const CreatePoint = () => {
  const[data,setData] = useState({})
  const[loading,setLoading] = useState(true)

  useEffect(()=>{
    async function handleFetch(){
      setLoading(true)
      const res = await axios.get('/') 
      setData(res.data)
      setLoading(false)
    }
    handleFetch()
  },[])
  
  


  return (
    <SearchResults>
      <div>
        <header>
          <h1><img src={Logo} alt="Logomarca" />Ecoleta</h1>
          <Link to="/"><BsBoxArrowInLeft size={20} color='#34CB79' />  Voltar para home.</Link>
        </header>
        <div className='main'>
          <h4>
            <strong> {data.length} pontos </strong> encontrados
          </h4>
          <Cards data={data} loading={loading}/>
        </div>
      </div>
    </SearchResults>
  );
};

export default CreatePoint;

const SearchResults = styled.div`
  height:100vh;

  
  div{
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    
    
    header{
      margin-top: 40px; 
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      a{
        color: var(--title-color);
        font-weight:700;
      
        svg {
          margin-right: 15px; 
        }
      }
    }
    .main {
      margin-top: 48px;
      h4 {
        font-weight: normal;
        margin-bottom: 32px;
      }
      .cards {
        display: grid;
        grid-template-columns: repeat(3,1fr) ;
        gap: 24px;

        @media(max-width: 900px){
          grid-template-columns: 1fr;
        }
        @media(min-width: 1400px){
          flex:1;
          margin:0 auto;
          grid-template-columns: repeat(4,1fr) ;
        }
      
        img {
          width: 100%;
          height: 150px;
          border-radius: 8px 8px 0 0;
          @media(max-width: 900px){
            height: 300px;
        }
        @media(max-width: 380px){
          height: 150px;
          width: 100%;
        }
        }
        h1 {
          margin-top: 32px;
          font-size: 35px;
          line-height: 41px;
        }
        h3 {
          margin: 20px 0;
          font-family: Roboto;
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height:34px;
          color: var(--primary-color);
        }
        p {
          font-size:16px;
          line-height:25px;
          color: #6c6c80;
        }
      }
    }
  }
  body &:after{
    content:"";
    position: fixed;
    background: #fff;
    top: 260px;
    right:0;
    left: 0;
    bottom:0;
    z-index:-1;
  }
`

