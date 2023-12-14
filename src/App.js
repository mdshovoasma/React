
import React,{useState} from 'react'
import './App.css'
import Exponses from './ExpensivItem/Exponses/Exponses'
import NewExponses from './ExpensivItem/newExponses/NewExponses'




let Duplicat=[
    {
    id:'e1',
    date:'this is first project',
    exam_name:'First exam',
    exam_fee:'100'

    },

    {
        id:'e2',
        date:'this is 2nd project',
        exam_name:'2nd exam',
        exam_fee:'200'

        },

        {
            id:'e3',
            date:'this is final project',
            exam_name:'Final exam',
            exam_fee:'300'
    
        },
]





function App(){
    const [Expenses,setNewExponses]=useState(Duplicat)

    const recevSendData=(recive)=>{
        // console.log(recive)
        const updateExponse = [recive,...Expenses];
        setNewExponses(updateExponse)
    
    }

    // let date = "this is s fast react project";
    // let exam_name = 'middle term';
    // let taka = 3000

  

    return (
        <div>

            <div>
            <NewExponses sendData={recevSendData} ></NewExponses>
            </div>
           <h1>Let gets star</h1>
           <Exponses item={Expenses}/>
             
             {/* <Exponsive 
             data={Expenses[2].date}
             title={Expenses[2].exam_name} 
             taka={Expenses[2].exam_fee}>
             </Exponsive> */}
           
        </div>
    )
}

export default App;