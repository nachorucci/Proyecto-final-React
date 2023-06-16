import { useState } from "react"
import './Form.css'
import FormArticle from "../FormArticle/FormArticle"
import { db } from "../../service/config"
import { addDoc, collection } from "firebase/firestore"



const Form = () => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [comentario, setComentario] = useState("")

    const hanldeClick = (e)=>{
        e.preventDefault();

        addDoc (collection(db, "formulario"), {
          name : name,
          surname : surname,
          email : email,
          phone : phone,
          comentario : comentario,
        })

        setName("")
        setSurname("")
        setEmail("")
        setPhone("")
        setComentario("")
    }
    
    

  return (
    <div className="form d-flex flex-wrap">
      <FormArticle/>
      <form className="formulario text-center justify-content-center" onSubmit={hanldeClick}>
          <label className="p-3 m-2" htmlFor="name"><input type="text" id='name' placeholder="Name" className="p-2" onChange={(e)=>setName(e.target.value)} value={name} /></label>
          

          <label className="p-3 m-2" htmlFor="surname"><input type="text" id='surname' placeholder="Surname" className="p-2" onChange={(e)=>setSurname(e.target.value)} value={surname}/></label>
          

          <label className="p-3 m-2" htmlFor="email"><input type="text" id='email' placeholder="Email" className="p-2" onChange={(e)=>setEmail(e.target.value)} value={email} /></label>
          

          <label className="p-3 m-2" htmlFor="phone"><input type="text" id="phone" placeholder="Phone" className="p-2" onChange={(e)=> setPhone(e.target.value)} value={phone} /></label>
          

          <label className="p-3 m-2" htmlFor="comentario"><textarea name="comentario" id="comentario" className="p-2" placeholder="Message" onChange={(e)=> setComentario(e.target.value)} value={comentario}></textarea></label>
          

          <button className="btn btn-primary m-2 p-2" type='submit'>Send</button>
        
      </form>
    </div>
  )
}

export default Form
