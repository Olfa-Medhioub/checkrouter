import {useParams} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import {Button} from "react-bootstrap"

const DescriptionMovie=({movies})=>{
    const {id} = useParams()
    const founded = movies.find(movie => movie.id == id )
    const navigate = useNavigate()
    

    return(
        <div className='Descrip'>
            <br/>
            <h1 style={{color :'orange'}}>{founded.title}</h1>
            <br/>
            <p>{founded.description}</p>
            <br/>
            <iframe width="560" height="315" src={founded.trailler} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br/>
            <Button variant="secondary"  onClick={()=> navigate('/')}>Home</Button>
            {/* <button onClick={()=>navigate('/')}>Home</button> */}

        </div>
               
    )
}

export default DescriptionMovie

