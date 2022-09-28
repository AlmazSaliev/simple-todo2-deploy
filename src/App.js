
import './App.css';

import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { addExpenses } from './component/action/Action';
import { Render } from './component/Render';
import { Input } from './component/Input';
import styled from 'styled-components';

const Section = styled.section`
    width: 800px;
    background-color: blueviolet;
    border-radius: 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
const H2=styled.h2`
    text-align: center;
`
const Button=styled.button`
    width: 200px;
    height: 30px;
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 150px;
    cursor: pointer;
`
const Div=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

function App() {
  const dispatch=useDispatch()

const [data, setData]=useState({
  title:'',
  price: '',
  date: '',
  prvkatitle: false,
  prvkaprice: false,
  prvkadate: false,
})
const inputHandler=(e)=>{
  const value=e.target.value
  if(e.target.name==='title'){
    setData({
      ...data,
      prvkatitle: data.prvkatitle = value.trim()!=='' && value.length > 3
    })
  }
  if(e.target.name==='price'){
    setData({
      ...data,
      prvkaprice: data.prvkaprice = value.trim()!==''
    })
  }
  if(e.target.name==='date'){
    setData({
      ...data,
      prvkadate: data.prvkadate = value.trim()!==''
    })
  }
  setData({
    ...data,
    [e.target.name]: value
  })
}
let btn = true
if(data.prvkatitle && data.prvkaprice && data.prvkadate){
  btn=false
}
const submit=(e)=>{
  e.preventDefault()
  dispatch(addExpenses(data))
  setData({
    title: '',
    price: '',
    date: '',
  })
}

  return (
    <Section>
      <H2>Redux Practice</H2>
      <form onSubmit={submit}>
        <Div>
          <label>Title</label>
          <Input type={'text'} name={'title'} fun={inputHandler} value={data.title}/>
        </Div>
        <Div>
          <label>Price</label>
          <Input type={'number'} name={'price'} fun={inputHandler} value={data.price}/>
        </Div>
        <Div>
          <label>Date</label>
          <Input type={'date'} name={'date'} fun={inputHandler} value={data.date}/>
        </Div>
        <Button disabled={btn}>Add</Button>
      </form>
      <Render/>
    </Section>
  )
}

export default App;
