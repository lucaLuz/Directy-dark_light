import React from 'react'
import './Ofertas.css'
import paisagem from '../../assets/paisagem.png'

const data = [
    {
      id: 1,
      image: paisagem,
      title: 'Pacotes para Rio de Janeiro',
      diaria: 'A partir de dom 26 nov Até sáb 02 dez',
      preco: 'R$1.224'
    },
    {
      id: 2,
      image: paisagem,
      title: 'Pacotes para Porto de Galinhas',
      diaria: 'A partir de dom 26 nov Até sáb 02 dez',
      preco: 'R$250'
    },
    {
      id: 3,
      image: paisagem,
      title: 'Pacotes para Porto Seguro',
      diaria: 'A partir de dom 26 nov Até sáb 02 dez',
      preco: 'R$568'
    }
  ]

export const Ofertas = () => {
    return (
        <section id='ofertas' >
        <h2>Ofertas</h2>
  
        <div className='ofertas__container'>
          {
            data.map(({ id, image, title, diaria, preco }) => {
              return (
                <article key={id} className='ofertas__item'>
                  <div className='ofertas__item-image'>
                    <img src={image} alt="" />
                  </div>
                  <h2>{title}</h2>
                  <div className='ofertas__item-cta' >
                    <p>{diaria}</p>
                    <h3>{preco}</h3>
                  </div>
                </article>
              )
            })
          }
        </div>
      </section>
    )
}

export default Ofertas