import React from 'react'
import 'boxicons'
import './Login.css'

function LoginPage() {
  return (
    <body className="body">
        
    
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
                    <a href="#">Kayıt Ol</a>
                </p>
            </div>
            
            
        </form>
    </div>
    </body>
    
  )
}

export default LoginPage