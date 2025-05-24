import { Link } from "react-router-dom"
import {Form} from "react-bootstrap";
import perfil from '../../assets/img/perfil.jpeg';


export const Profile = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">   
    <div className="d-flex flex-column justify-content-center align-items-center border border-2 border-dark rounded-2 gap-2 mt-2 mb-2 pt-3 pb-3" style={{ width: "350px" }}>                      
    <img src={perfil} alt='Imegn perfil'/>
    <h4>Pizzeria Mamma Mia</h4>    
    <Form>                  
    <div className="form-label mr-4 mx-4">
       Rower Diaz
    </div>
    <div className="form-group mr-4 mx-4">
       axlrower@gmail.com
    </div>
    <div className="m-4">
    <Link to="/" className='boton3 text-black'>Cerrar Sesion</Link>
    </div>               
    </Form>
    </div>            
</div>
  )
}

