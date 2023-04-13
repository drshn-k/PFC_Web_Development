import React from 'react';
import {Link,useNavigate} from 'react-router-dom'
const Nav=()=>{
    const auth=localStorage.getItem('user');
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/signup')
    }
    return(
        <div>
            <img alt='logo' className='logo' src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-shop-ecommerce-logo-app-icon-logo-design-template-910c781293690546d77a3828f9e901ee_screen.jpg?ts=1611442808'/>
            {
                auth ? 
            
            <ul className='nav-ul'>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">UpdateProducts</Link></li>
                
                <li><Link onClick={logout} to="/signup">LogOut ({JSON.parse(auth).name}) </Link></li>
                </ul>
                : 
                <ul className='nav-ul nav-right'>
                <li><Link to='/signup'>SignUp</Link></li>
                 <li><Link to="/login">Login</Link></li>
                 </ul>
             }   
                
            
        </div>
    )
}
export default Nav;