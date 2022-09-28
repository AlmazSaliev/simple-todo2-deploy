import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { deletExpenses } from './action/Action'
const Ul=styled.ul`
      padding-left: 0px;
    `
    const Li=styled.li`
      text-decoration: none;
      display: flex;
      width: 500px;
      height: 30px;
      background-color: white;
      align-items: center;
      justify-content: space-around;
      margin-top: 15px;
      border-radius: 10px;
    `
    const Span=styled.span`
      width: 80px;
      text-align: center;
      background-color: rgb(200, 61, 22);
      border-radius: 5px;
      cursor: pointer;
    `
export const Render=()=>{
    const dispatch=useDispatch()
    const expenses=useSelector((state)=>state.expense)
    const deletHandler=(id)=>{
        dispatch(deletExpenses(id))
      }
    
    return(
        <Ul>
        {expenses.map((i)=>{
          return(
            <Li key={i.id}>
              <span>{i.title}</span>
              <span>{i.price}</span>
              <span>{i.date}</span>
              <Span onClick={()=>deletHandler(i.id)}>delet</Span>
            </Li>
          )
        })}
      </Ul>
    )
}