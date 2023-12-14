import React,{useState} from 'react';

import './Multiexponsiv.css';
import Card from '../UI/Card'

function Multiexponsive(props){
    let data = props.data;
    // let title = props.title
    let [title,statetitle] = useState(props.title);
    let clickhandeler=()=>{
      // title='this is new title';
      // console.log(title);

      statetitle(newtitle)

      // statetitle(
      //   <div>  
      //     hello i am shovo
      //   <p>it p tag</p>
      //   </div>
      // )
      // 2 babai use kora jai

    }

    let [newtitle,setnewtitle]=useState('hi');
    let changehandeler=(event)=>{
        {/* onChange funtion ar jonno sb somoi event dea data recev korta hoba */}
      setnewtitle(event.target.value)
    }

    return(
        <Card>
         
          <h1>  {data}</h1>
          <div>{title}</div>
          <button onClick={clickhandeler}>on change</button>
          <input value={newtitle} onChange={changehandeler}></input>
          {/* onChange funtion ar jonno sb somoi event dea data recev korta hoba */}
        
        </Card>
        
    )
}
export default Multiexponsive;