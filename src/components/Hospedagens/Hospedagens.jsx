import React from 'react'
import './Hospedagens.css'
import IMG1 from '../../assets/img1.svg'
import IMG2 from '../../assets/img2.svg'
import IMG3 from '../../assets/img3.svg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Colline De France',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Grand Oca Maragogi Resort',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Soft Inn Maceió Ponta Verde',
  }
]

const Hospedagens = () => {
  return (
    <section id='hospedagem' >
    <h2>Hotéis para você</h2>

    <div className='hospedagem__container'>
      {
        data.map(({ id, image, title}) => {
          return (
            <article key={id} className='hospedagem__item'>
              <div className='hospedagem__item-image'>
                <img src={image} alt="" />
              </div>
              <h2>{title}</h2>
            </article>
          )
        })
      }
    </div>
  </section>
  )
}

export default Hospedagens