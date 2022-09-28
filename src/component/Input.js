import styled from "styled-components"
const Innput=styled.input`
        width: 500px;
        height: 25px;
        border-radius: 10px;
    `
export const Input =(props)=>{
    
    return <Innput name={props.name} type={props.type} onChange={props.fun} value={props.value}/>
    
}