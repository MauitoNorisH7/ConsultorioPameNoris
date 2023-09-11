import React from 'react'

export const Container5 = () => {
  return (
    <section id='Contacto' className='section-contact'>
        <div className='contact'> 
            <div className='location'>
                <h1>Información <br/>de contacto</h1>
                    <iframe id='location-frame' 
                            title='Ubicación del consultorio de Pamela Noris'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5702818648165!2d-89.6072541242851!3d21.00985578063467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56771ef481faaf%3A0xa14b748f53aa266f!2sClinica%20Dental%20Oralma!5e0!3m2!1ses!2smx!4v1681769943422!5m2!1ses!2smx">
                    </iframe>


                <div className='info-txt'>
                    <h3>Teléfono: (+52) 999 272 7949 </h3>
                    <h3>Dirección: Calle 1H #152 por 12 y 14-A <br/>Residencial Col Mexico, 97125 Mérida, Yuc.</h3>
                </div>
            </div>
            <div className='appointment'>
                <h1>Agenda una cita</h1>

                <form className='contact-form'>
                    <label htmlFor="name">Nombre completo:</label><br/>
                    <input type="text" className='contact-input-txt' id="name" name="name"/> <br/>

                    <label htmlFor="cellphonenumber">Número de celular:</label><br/>
                    <input type="tel" className='contact-input-txt' id="cellphonenumber" name="cellphonenumber"/> <br/>

                    <label htmlFor="email">Correo:</label><br/>
                    <input type="email" className='contact-input-txt' id="email" name="email"/> <br/>

                    {/* <div className='input-booktime'> */}
                    <label htmlFor="booktime">Horario:</label><br/>
                    <input type="radio" name="booktime" className='radio-input' id="radio-time1"/> 
                    <input type="radio" name="booktime" className='radio-input' id="radio-time2"/> 
                    <input type="radio" name="booktime" className='radio-input' id="radio-time3"/> 
                    <input type="radio" name="booktime" className='radio-input' id="radio-time4"/> 
                    <input type="radio" name="booktime" className='radio-input' id="radio-time5"/> 

                    <div className='input-booktime'>
                        <label htmlFor='radio-time1' className='manual-time-btn manual-time-btn1'><p>7:30</p></label>
                        <label htmlFor='radio-time2' className='manual-time-btn manual-time-btn2'><p>8:00</p></label>
                        <label htmlFor='radio-time3' className='manual-time-btn manual-time-btn3'><p>8:30</p></label>
                        <label htmlFor='radio-time4' className='manual-time-btn manual-time-btn4'><p>9:00</p></label>
                        <label htmlFor='radio-time5' className='manual-time-btn manual-time-btn5'><p>9:30</p></label>
                        <br/>
                    </div>
                        
                    <label htmlFor="message">Mensaje:</label><br/>
                    <input type="text" className='contact-input-txt' id="message" name="message"/> <br/> 

                    <div className='submit-div'>
                        <input type='submit' className='submit-btn'></input>
                    </div>
                </form>
            </div>
        </div>
        <br/>
        <div className='copyright-disclaimer-pc'>
            <box-icon className='copyright-logo' name='copyright'></box-icon>
            <p>All Rights Reserved. You keep all rights to your material.</p>
        </div>
        <div className='copyright-disclaimer-mobile'>
        <box-icon className='copyright-logo' name='copyright'></box-icon> <p>All Rights Reserved. You keep all rights to your material.</p>
        </div>
    </section>
  )
}
