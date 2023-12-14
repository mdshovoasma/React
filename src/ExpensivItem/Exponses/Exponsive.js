import Card from '../UI/Card';
import './Exponsive.css';
import Multiexponsive from './Multiexponsiv';

function Exponsive(props){
   
    return(
        <div className='exam'>
             {/* <div> {props.data} </div> */}
          <Multiexponsive data={props.data} title='hello test'/>

            <div>
            <h1>{ props.title}</h1>
            </div>  
            <div>
            ${props.taka}
            </div>  
        </div>
        
    )
}
export default Exponsive;