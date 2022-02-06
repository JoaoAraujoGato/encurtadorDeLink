import './menu.css';
import { Link } from 'react-router-dom';
import { BsYoutube, BsInstagram } from 'react-icons/bs';


export default function Menu(){
    return(
        <div className='menu'>
            <a className='social' href='https://youtube.com/c/sujeitoprogramador'>
                <BsYoutube color='#fff' size={24} />
            </a>
            <a className='social' href='https://instagram.com/joao_gato12'>
                <BsInstagram color='#fff' size={24} />
            </a>
            <Link className='menu-item' to="/links">
                Menu Links
            </Link>
        </div>
    )
}
