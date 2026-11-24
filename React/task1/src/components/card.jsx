import Button from './button'


export default function Card(props) {
    return <>

        <article className='profile-card'>
            <img src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <Button className={props.className}></Button>
        </article>
    </>
}

