import './NewExponsesForm.css'
import React,{useState} from 'react';
// import React,{useState} from 'react'; jokon react use korbo tokon usestate use kora nibo


let NewExponsesForm=(props)=>{
    const[entertitle,settitle]=useState('');
    const[enteramount,setamount]=useState('');
    const[enterdate,setdate]=useState('');


    const titlehundeler=(event)=>{
        settitle(event.target.value);
        

    }
    const amounthundeler=(event)=>{
        setamount(event.target.value);

    }
    const datehundeler=(event)=>{
        setdate(event.target.value);
      

    }

    const submitform=(event)=>{
        event.preventDefault();

        const exponsesdata={
            title:entertitle,
            amount:enteramount,
            date : new Date(enterdate)

        }

        props.transferDAta(exponsesdata);
    //   console.log(exponsesdata);
            settitle('');
            setamount('');
            setdate('');
            

    }


    return (
        <form onSubmit={submitform}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title    </label>
                    <input type='text' value={entertitle} onChange={titlehundeler} />
                </div>

                <div className='new-expense__control'>
                    <label>amount    </label>
                    <input type='number' value={enteramount} onChange={amounthundeler} />
                </div>

                <div className='new-expense__control'>
                    <label>Date    </label>
                    <input type='date' value={enterdate} onChange={datehundeler} />
                </div>

               

            </div>

            <div className='new-expense__action'>
                <button type='submit'>Add exponses</button>

                </div>
        </form>
    )
}
export default NewExponsesForm;