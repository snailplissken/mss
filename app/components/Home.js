import React from 'react'
import ServiceCard from './ServiceCard'
import {BigButton} from './BigButton'

class Home extends React.Component {
  render () {
    return (
      <div>
        <div className='service-cards'>
          <ServiceCard title='Hemstädning'
            thumbnail='./app/static/images/hemstad_card.png'
            text='Spara tid och öka trivseln hemma. Boka hemstädning redan idag!' />
          <ServiceCard title='Flyttstädning'
            thumbnail='./app/static/images/flyttstad_card.png'
            text='Låt oss ta hand om erat gamla hem medans ny njuter av det nya.' />
          <ServiceCard title='Kontorsstädning'
            thumbnail='./app/static/images/kontorstad_card.png'
            text='Vi ordnar kontorsstädning från Stockholm till Uppsala för både små och stora kontor.' />
          <ServiceCard title='Trappstädning'
            thumbnail='./app/static/images/trappstad_card.png'
            text='En ren och fräsch trappuppgång är viktig för hyresgästen. ' />
        </div>
        <div>
          <BigButton text='Fler tjänster' />
        </div>
      </div>

    )
  }
}

export default Home
