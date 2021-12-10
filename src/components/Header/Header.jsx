import { useState } from 'react';
import logoImg from '../../assets/images/foursomeb.png';
import { IoPaperPlaneOutline } from "react-icons/io5";
import './header.css'
import {toast} from 'react-toastify';
import firebase from '../../service/firebaseConnection';

function Header() {
  const [email, setEmail] = useState('');


  async function handleEmail(e) {
    e.preventDefault();

    // toast.success('Email cadastrado com sucesso! Em breve você receberá um email de confirmação');
    // console.log(email)

    await firebase.firestore().collection('newsletter').add({
        email: email
    }).then(() => {
        toast.success('Email cadastrado com sucesso! Em breve você receberá um email de confirmação')
    }).catch(error => {
        console.log(error)
        toast.error('Ops. Falha ao cadastrar o e-mail')
    })
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