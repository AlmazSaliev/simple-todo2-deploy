
const initalState={
    expense: [{title: 'Test', price: 100, date: '2022-02-02', id: 123123}]
}
let nextId = 0
export const reduserFunc=(state=initalState, action)=>{
    
        if(action.type==='ADD'){
            return {
            ...state, 
            expense:[...state.expense,
                
                {
                    title: action.title,
                    price: action.price,
                    date: action.date,
                    id: nextId++,
                }
                    ]
            }
                }
       if(action.type==='DELET') {return{
            ...state,
            expense: state.expense.filter((exp)=>exp.id !==action.id)
        }}
    return state
    
   
}