import React from 'react'
import slug from 'slug'
import { connect } from 'react-redux'
import { updateArea } from '../actions/updateAreaAction'
import './contact.css'

const services = ['Hemstädning', 'Flyttstädning', 'Kontorsstädning', 'Trappstädning', 'Snöskottning']

@connect((store) => {
  return {
    area: store.area.area,
    service: store.service.service,
  }
})

class Contact extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.dispatch(updateArea(event.target.value))
  }

  render() {
    return (
      <section>
        <div className='contact-container'>
          <div className='form-content'>
            <form>
              <h1>Kontakta Oss</h1>
              <label for='flname'>För och Efternamn: </label>
              <input id='flname' type='text' name='name' placeholder='För och efternamn' />
              <label for='mail'>Mail: </label>
              <input id='mail' type='mail' name='email' placeholder='ex. john@internet.com' />
              <label for='phone'>Telefonnummer: </label>
              <input id='phone' type='number' name='phone' placeholder='ex. +4673123456789' />
              <label for='area'>Area: </label>
              <input type='number' id='area' value={this.props.area} onChange={this.handleChange}/>
              <label for='services'>Tjänst: </label>
              <select id='services' name='service'>
                {services.map((service) => {
                  const slugService = slug(service, {lower: true})
                  if (service === this.props.service) {
                    return <option
                      key={slugService}
                      value={slugService}
                      selected={service} >{service}</option>
                  }
                  else {
                    return <option
                      key={slugService}
                      value={slugService}>{service}</option>
                  }
                })}
              </select>
              <label for='messages'>Meddelande:</label>
              <textarea id='messages' name='messages' placeholder='Meddelande'></textarea>
              <input type='submit' value='Skicka' />
            </form>
          </div>
          <div className='location-content'>
            <h1>Add map on this side</h1>
            <p>Add address below</p>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
