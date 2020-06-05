import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BsBoxArrowInLeft } from 'react-icons/bs'
import Logo from '../../assets/images/logo.svg'
import ufApi from '../../services/ufapi'
import styled from 'styled-components'
import lampadas from '../../assets/images/lampada.svg'
import bateria from '../../assets/images/bateria.svg'
import eletronicos from '../../assets/images/eletronicos.svg'
import oleo from '../../assets/images/oleo.svg'
import papeis from '../../assets/images/papeis.svg'
import organicos from '../../assets/images/organicos.svg'
import api from '../../services/api'

const CreatePoint = () => {
  const history = useHistory()
  const[form, setForm] = useState({
    adress: "",
    adress2: "",
    city: "",
    items:[],
    name: "",
    uf: ""
  })
  const[uf, setUf] = useState([])
  const[municipios,setMunicipios] = useState([])
  const[ufId, setUfId] = useState()
  const[selectedItems, setSelectedItems] = useState([])

  useEffect(()=>{
    async function handleFetchUf(){
      const { data } = await  ufApi.get('')
      setUf(data)
    }
    handleFetchUf()
  },[])

  useEffect(()=>{
    async function handleFetchState(){
    const { data } = await ufApi.get(`${ufId}/municipios`)
      setMunicipios(data)
    }
    handleFetchState()
  },[ufId])

  useEffect(()=>{
    let old = form
    old.items = selectedItems
    setForm(old)
  },[selectedItems])

  function handleChangeForm(e){
    let newForm = form
    form[e.target.name] = e.target.value
    if(e.target.name === 'uf' && e.target.value){
      const resp = uf.filter((item)=> item.nome === e.target.value)
      setUfId(resp[0].id)
    }
    setForm(newForm)
  }
  
  function handleSelection(e){
    let supSelectedItems = selectedItems
    const itemLi = e.target
    itemLi.classList.toggle('selected') 
     const itemId = itemLi.dataset.id
    
    const alreadySelected = supSelectedItems.findIndex(item =>  item == itemId )
    if(alreadySelected >= 0){
      setSelectedItems(supSelectedItems.filter(item => item != itemId))
      return
    }
    setSelectedItems([...supSelectedItems,itemId])
  }



  async function handleSubmit(e) {
    e.preventDefault()
    const config = {
    
      headers:{
         'accept': '*/*',
         'Accept-Language': 'en-US,en;q=0.8',
         'Content-Type': `application/json;`
      }
    }
    
    try {
    async function submit(){
      
        await api.post('/', form, config)
        history.replace('/search')
      }
      submit()
    } catch (err){
      alert(err)
    }
  } 
  
  
  return (
    <CreatePage>
      <div>

        <header>
          <h1><img src={Logo} alt="Logomarca" />Ecoleta</h1>
          <Link to="/"><BsBoxArrowInLeft size={20} color='#34CB79' />  Voltar para home.</Link>
        </header>
        <Form onSubmit={handleSubmit}>
          <h1>Cadastro do ponto de coleta</h1>

          <fieldset>

            <legend><h2>Dados da entidade</h2></legend>
          <div className='field-group'>
            <div className='field'>
              <label htmlFor="name">Nome da entidade</label>
              <input type="text" name='name' onChange={handleChangeForm}/>
              </div>
              <div className='field'>
              <label htmlFor="name">Imagem da Entidade</label>
              <input type="url" placeholder='http://' name='url' onChange={handleChangeForm}/>
              </div>
            </div>
            <div className='field-group'>
              <div className='field'>
                <label htmlFor="adress">Endereço</label>
                <input type="text" name='adress' onChange={handleChangeForm}/>
              </div>
              <div className='field'>
                <label htmlFor="adress2">Número/Complemento</label>
                <input type="text" name='adress2' onChange={handleChangeForm} />
              </div>
            </div>
            <div className='field-group'>
              <div className='field'>
                <label htmlFor="state">Estado</label>
                <select name="uf" onChange={handleChangeForm}>
                  <option value="">Selecione o estado</option>
                  { uf && (
                    uf.map((item)=> (
                      <option key={item.id} value={item.nome}>{item.nome}</option>
                    )))
                  }
                </select>
              </div>
              <div className='field'>
                <label htmlFor="state">Cidade</label>
                <select name="city" onChange={handleChangeForm} >
                  <option value="">Selecione a cidade</option>
                  {
                    municipios && (
                      municipios.map((item)=> (
                        <option key={item.id} value={item.nome}>{item.nome}</option>
                      ))
                    )
                  }
                </select>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend><h2>Ítens de coleta</h2></legend>
            <div className='grid'>
              <li data-id='Lâmpadas' onClick={handleSelection}> 
                <img src={lampadas} alt="lampadas"/>
                <span>Lâmpadas</span>
              </li>
              <li data-id='Pilhas e Baterias' onClick={handleSelection}>
                <img src={bateria} alt="PilhaseBaterias"/>
                <span>Pilhas e Baterias</span>
              </li>
              <li data-id='Papeis e Papelão' onClick={handleSelection}>
                <img src={papeis} alt="PapeisEPapelao"/>
                <span>Papeis e Papelão</span>
              </li>
              <li data-id='Resíduos Eletrônicos' onClick={handleSelection}>
                <img src={eletronicos} alt="eletronicos"/>
                <span>Resíduos Eletrônicos</span>
              </li>
              <li data-id='Resíduos Orgânicos' onClick={handleSelection}>
                <img src={organicos} alt="organicos"/>
                <span>Resíduos Orgânicos</span>
              </li>
              <li data-id='Óleo de Cozinha' onClick={handleSelection}>
                <img src={oleo} alt=" "/>
                <span>Óleo de Cozinha</span>
              </li>
            </div>
          </fieldset>

          <button type='submit'> Cadastrar ponto de coleta</button>

        </Form>
      </div>
    </CreatePage>
  );
};

export default CreatePoint;

const CreatePage = styled.div`
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
  }
`
const Form = styled.form`
  div {
  color: var(--title-color);

    margin: 0;
    padding: 0;
  font-family: 'Roboto', sans-serif;
    width: 100%;
  }
  background-color:#fff;
  margin: 80px auto;
  padding: 64px;
  border-radius: 8px;
  max-width: 730px;
  h1 {
    font-size: 36px;
  }
  fieldset {
    margin-top: 64px;
    border: 0;
  }
  legend {
    margin-bottom: 40px;
    h2 {
      font-size: 24px;
    }
  }
  .field {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
  }
  .field-group {
    display: flex;
    flex-direction: row;

    .field + .field {
      margin-left: 24px;
    }
  }
  input,
  select {
    background-color: #f0f0f5;
    border:0;
    padding: 16px 24px;
    font-size: 16px;
    outline: none;  
    border-radius: 8px;

  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  label {
    font-size: 14px;
    margin-bottom: 8px; 
  }
  button {
    width: 260px;
    height: 56px;
    background-color: var(--primary-color);
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    border: 0;
    margin-top: 40px;
    transition: 400ms;
    &:hover {
      background-color: #2fb86e;
    }
  }

  .grid  {
    img,
    span{
      pointer-events:none; 
    }
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
    li {
      background-color: #f5f5f5;
      list-style: none;
      border: 2px solid #f5f5f5;
      height: 180px;
      border-radius: 8px;
      padding: 32px 24px 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      text-align: center;
      cursor: pointer;

      span {
        margin-top: 12px;
        flex: 1;
        display: flex;
        align-items: center;
        color: var(--title-color);


      }
    }
    .selected {
      background-color: #e1faec;
      border: 2px solid #34cb79;
    }
  }
`

