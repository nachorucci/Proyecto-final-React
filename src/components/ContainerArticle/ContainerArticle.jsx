import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Article from '../Article/Article'



const ContainerArticle = () => {

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <>
    <Article title="Art & Wine" img="../../../assets/img/vinoArt.avif" >
        <img className='imgArticle m-2' src="../../../assets/img/vinosArt.avif" alt="wine" />
        <img className='imgArticle m-2' src="../../../assets/img/wineArt2.jpg" alt="vino" />
        <ul>
          <li data-aos="fade-right" data-aos-duration="1000">Immerse yourself in the rich tapestry of flavors and aromas.</li>
          <li data-aos="fade-left" data-aos-duration="1000">Discover the perfect wine to elevate every occasion.</li>
          <li data-aos="fade-right" data-aos-duration="1000">Unveil the profound connection between art and wine.</li>
        </ul>
    </Article>
    </>
  )
}

export default ContainerArticle
