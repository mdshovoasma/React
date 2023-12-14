// import './Exponses.css';
import Card from '../UI/Card';
import Exponsive from './Exponsive';
import Multiexponsive from './Multiexponsiv';
function Exponses(props){ 
    const array = props.item
 
    return (

       
      
        <div>

         {
          array.map(element => (
            <Exponsive 
            data={props.item[2].date}
            title={props.item[2].exam_name} 
            taka={props.item[2].exam_fee}>
            </Exponsive> 
               
          ))

        // props.item.forEach(element => {
        //     <Exponsive 
        //         data={props.item[2].date}
        //         title={props.item[2].exam_name} 
        //         taka={props.item[2].exam_fee}>
        //         </Exponsive> 
            
        // })

         }  

        
    
 
          


             {/* {/* <Exponsive 
              data={props.item[1].date}
              title={props.item[1].exam_name} 
              taka={props.item[1].exam_fee}>
             </Exponsive> */}

             {/* <Exponsive 
             data={props.item[2].date}
             title={props.item[2].exam_name} 
             taka={props.item[2].exam_fee}>
             </Exponsive>  */}
        </div>
    )
}
export default Exponses;