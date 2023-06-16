import Aos from 'aos'
import 'aos/dist/aos.css';
import './Article.css'
import { useEffect } from 'react';

const Article = ({title, img, children}) => {

  useEffect(()=> {
    Aos.init();
  }, [])

  return (
    <article className='artWine justify-content-center m-2 flex-wrap'>
        <h2 className='m-2' data-aos="fade-right" data-aos-duration="1000">{title}</h2>
        <h6 className='m-2 text-center' data-aos="fade-left" data-aos-duration="1000">Indulge in the mesmerizing fusion of art and wine at our store. Embark on a sensory journey through the captivating world of exceptional wines, where each sip unveils a symphony of flavors and delights.</h6>
        <img className='imgArticle m-2' src={img} alt={title} />
        {children}
    </article>
  )
}

export default Article
