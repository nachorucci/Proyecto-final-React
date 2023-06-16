import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import './ItemDetailContaine.css'
import { db } from '../../service/config';
import { getDoc, doc } from 'firebase/firestore';


const ItemDetailContainer = () => {
    const [productos, setproductos] = useState(null);

    const {idItem} = useParams();

  useEffect(()=>{
    const nuevoDoc = doc(db, "productos", idItem);

    getDoc(nuevoDoc)
      .then(res =>{
        const data = res.data();
        const nuevoProucto = {id:res.id, ...data}
        setproductos(nuevoProucto);
      })
      .catch(error => console.log(error))
  },[idItem])

  return (
    <div className='itemDetailContainer'>
      <h1 className='text-center'>Products Details</h1>
      <ItemDetail {...productos} />
    </div>
  )
}

export default ItemDetailContainer
