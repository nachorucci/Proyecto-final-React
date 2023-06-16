import './FormArticle.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const FormArticle = () => {

    useEffect(()=>{
      Aos.init();
    },[])

    const imgForm = "../../../assets/img/wineArt.avif"
  return (
    <div className="formArticle m-2 text-center d-flex flex-column align-items-center">
        <h2>Tastings & Events</h2>
        <strong>Join us for an exquisite wine tasting experience!</strong>
        <p>Indulge your senses and embark on a journey through the world of wines. We invite you to be a part of our exclusive wine tasting events, where you can discover exceptional vintages, explore diverse flavors, and deepen your appreciation for the art of winemaking.</p>
        <strong>Please complete the form to receive the information</strong>
        <img className='imgForm m-2 p-2 img-fluid' src={imgForm} alt="wines" data-aos="fade-right" data-aos-duration="1000" />
    </div>
  )
}

export default FormArticle
