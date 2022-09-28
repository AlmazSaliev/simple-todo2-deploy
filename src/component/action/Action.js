export const addExpenses=({title, price, date})=>({
    type: 'ADD',
    title: title,
    price,
    date,
})
export const deletExpenses=(id)=>({
    type: 'DELET',
    id: id
})