/**
 * Barra superior del dashboard muestra el nombre del usuario
 * logueado (viene del AuthContext) y un boton para cerrar sesion
 */

//hook para navegar programaticamente (sin que el usuario haga click en un link)
import { useNavigate} from "react-router-dom";
//Hook para leer el usuario logueado y la funcion logout
import { useAuth } from '../../context/AuthContext.jsx';

// no se recibe props toma todo lo que necesita del AuthContext
function Topbar() {
    //Usuario datos de quien inicio sesion; logout borra la sesion
    const { usuario, logout } = useAuth();
    //funcion para cambiar de url desde javaScript
    const navigate = useNavigate();

    //al cerrar sesion limpiamos el contexto / localstorage y
    //mandamos al usuario de vuelta a la pantalla login 
    function manejarLogout() {
        logout();
        navigate('/login', {replace: true});
    }
    
retunr (
    <nav className='navbar navbar-light bg-white border.botton px-4 py-3'>
            <span className='navbar-brand mb-0 h1 fs-6 text-muted'>Panel de administracion</span>

            <div className='d-flex aling-items-center gab-3'>
                <div className='text-end d-none d-sm-block'>
                    <div className='fw-semibold'></div>
                    <small className='text-muted text-capitalize'>{usuario?.rol}</small>
                </div>    
                
                <button className='btn btn-outline-danger btn-sm d-flex aling-items-center gap-1' onClick={manejarLogout}>
                    <i className='bi bi-box-arrow-right'></i>
                    Salir
                </button>
            </div>

    </nav>
   );
}

export default Topbar;
