import React from 'react'

export const Header = () => {
  return (
    <header className='mainHeader'>
      <div className='container'>
        <div className='logoPrincipal'>
          <a href='#Portada'>
            <img className='imgLogo'src='logos-pame-14.png' alt='logoPrincipal'/>
          </a>
        </div>
        <span className='verticalLine'></span>

        <div className='actions'>
          <ul>
            <li>
              <a href="#Quien-soy">¿Quién soy?</a>
            </li>
            <li>
              <a href="#Testimonios">Testimonios</a>
            </li>
            <li>
              <a href="#Servicios">Servicios</a>
            </li>
            <li>
              <a href="#Fotos">Galería</a>
            </li>
            <li>
              <a href="#Contacto">Contacto</a>
            </li>
          </ul>
        </div>

      </div>

      <div className='action-mobile'>
      
        <div className='facebook-logo'>
          <a href='https://www.facebook.com/dentista.pamelanoris/' target={'_blank'}>
            <box-icon type='logo' name='facebook-circle' animation='tada-hover' size='md' color='grey'></box-icon>
          </a>
        </div>

        <div className='instagramLogo'>
          <a href='https://www.instagram.com/dra.pamelanoris/' target={'_blank'}>
            <box-icon type='logo' name='instagram' animation='tada-hover' size='md' color='grey'></box-icon>
          </a>
        </div>

        <div className='dropdown-btn-header'>
          <button className='menu-btn'>
            <a><box-icon name='menu' animation='flashing-hover' size='lg' color='grey'></box-icon> </a>
          </button>

          {/* <ul className='dropdown'>
            <li><a href='#'>¿Quién soy?</a></li>
            <li><a href='#'>Testimonios</a></li>
            <li><a href='#'>Servicios</a></li>
            <li><a href='#'>Galería</a></li>
            <li><a href='#'>Contacto</a></li>
          </ul> */}
        </div> 
      </div>
        
    </header>
  )
}
