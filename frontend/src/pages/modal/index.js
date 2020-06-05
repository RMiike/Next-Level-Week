import React, {useState} from 'react';
import styled from 'styled-components'
import { BsX, BsSearch } from 'react-icons/bs'
import axios from '../../services/api'

const Modal = ({hide, handleClose}) => {
  const[state,setState]=useState()

  function handleChange(e){
    setState(e.target.value)
  }
  async function handleSubmit(e){
    e.preventDefault()
    try{
      const resp = await axios.get(`/${state}`)

      if(resp){
        console.log(resp)
      }
    } catch (e){
      alert(e)
    }
  }
  return (
  <ModalContainer hide={hide}>
      <div>
        <div>
          <h1>Pontos de coleta</h1>
          <BsX size={20} color='#fff' onClick={handleClose} />
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">Cidade ou Estado</label>
          <div className="search field">
            <input type="text" name='search' placeholder='Pesquise por Estado'  onChange={handleChange}/>
            <button type='submit'>
            <BsSearch size={20} color='#FFF'/>
            </button>
          </div>
        </form>
      </div>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #0e0a14ef;
  position: fixed;
  top: 0;
  display: ${props => props.hide ? 'none' : 'flex'} ;
  justify-content: center;
  align-items: center;
  transition:400ms;

  div {
    color: #fff;
    width: 420px;
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 48px;
      h1 {
        color: #fff;
        font-size: 36px;
        line-height:48px;
      }
      svg {
        cursor: pointer;
      }
    }

    form {

      label {
        font-size:  14px;
        line-height: 16px;
        display: block;
        margin-bottom: 8px;
      }
      .field {
        display: flex;
        input {
          flex: 1;
          background-color: var(--input-style);
          border-radius: 8px 0 0 8px;
          border: 0;
          padding: 16px 24px;
          height: 52px;

          outline: none;
          font-size: 16px; 
          color: #6c6c80;
        }
        button {
          width: 52px;
          background-color: var(--primary-color);
          border:0;
          border-radius: 0 8px 8px 0; 
          height: 52px;
          transition: 400ms;
            &:hover{ 
          background-color: #2fb86e;

            }
        }
      }
    }
  }
`
