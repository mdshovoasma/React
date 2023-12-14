// jakana jakana component use kobo / banabo sb jaigai react library ise korta hoba



import './Card.css';

function Card(props){
    const clases = 'card'+props.className;
    return (
        <div className={clases}>{props.children}</div>
    )

}
export default Card;

// akana dakano hoica akta component ar modda kibaba anno akta component use kora jaba

// use korta hola propose.children use korta hoba jamonta upora dakano hoica