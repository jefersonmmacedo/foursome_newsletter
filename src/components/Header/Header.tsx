import { useState } from 'react';
import logoImg from '../../assets/images/foursomeb.png';
import { IoPaperPlaneOutline } from "react-icons/io5";
import './header.css'

function Header() {
  const [email, setEmail] = useState('');

  function handleEmail(e: any) {
    e.preventDefault();
    console.log(email)
  }
  return (
    <div className="content">
      <div className="blockText">
        <img src={logoImg} alt="Logo Foursome" />
        <h1>Estamos quase lá!</h1>
      </div>
      <div className="newsletter">
        <p>Cadastre-se e seja notificado quando estivermos prontos:</p>
        <form action="">
          <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <button onClick={handleEmail}>Enviar <IoPaperPlaneOutline /></button>
        </form>
      </div>
    </div>

  )
}

export { Header }