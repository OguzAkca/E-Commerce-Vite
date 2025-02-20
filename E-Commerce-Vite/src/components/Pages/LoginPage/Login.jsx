import React from 'react'
import 'boxicons'
import './Login.css'
import { useHistory } from 'react-router-dom';

function LoginPage2() {

    const history = useHistory();

  return (
    <div className="body">
        
    
    <div className='wrapper'>
        <form action=''>
            
            <h1>Login</h1>
            <div className='input-box'>
            <input  type="text" placeholder='Kullanıcı Adı' required />
            <i>
            <box-icon className='i' type='solid' name='user'></box-icon></i>
            </div>

            <div className='input-box'>
            <input  type="password" placeholder='Şifre' required />
            <i>
            <box-icon className='i' type='solid' name='lock-alt'></box-icon></i>
            </div>
            <div className='remember-forgot'>
                <label><input type="checkbox" />Beni Hatırla</label>
            </div>
            <button className='btn' type='submit'>Login</button>
            <div className='register-link'>
                <p>Hesabınız yok mu?
                    <a href="#" onClick={() => history.push('/signup')}>Kayıt Ol</a>
                </p>
            </div>
            
            
        </form>
    </div>
    </div>
    
  )
}

export default LoginPage