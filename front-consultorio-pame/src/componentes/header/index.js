import React, { useState, useEffect } from "react";

export const Header = () => {
  const [estadoBoton, setEstadoBoton] = useState(true);

  const toggleEstiloBoton = () => {
    setEstadoBoton(!estadoBoton);
  };

  return (
    <header className="mainHeader">
      <div className="container">
        <div className="logoPrincipal">
          <a href="#Portada">
            <img
              className="imgLogo"
              src="logos-pame-14.png"
              alt="logoPrincipal"
            />
          </a>
        </div>
        <span className="verticalLine"></span>
        <div className="actions">
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

      <div className="facebook-logo">
        <a
          href="https://www.facebook.com/dentista.pamelanoris/"
          target={"_blank"}
          rel="noreferrer"
        >
          <box-icon
            type="logo"
            name="facebook-circle"
            animation="tada-hover"
            size="md"
            color="grey"
          ></box-icon>
        </a>
      </div>

      <div className="instagramLogo">
        <a
          href="https://www.instagram.com/dra.pamelanoris/"
          target={"_blank"}
          rel="noreferrer"
        >
          <box-icon
            type="logo"
            name="instagram"
            animation="tada-hover"
            size="md"
            color="grey"
          ></box-icon>
        </a>
      </div>

      <div className="tiktokLogo">
        <a
          href="https://www.tiktok.com/@pamenoris"
          target={"_blank"}
          rel="noreferrer"
        >
          <box-icon
            type="logo"
            name="tiktok"
            animation="tada-hover"
            size="md"
            color="grey"
          ></box-icon>
        </a>
      </div>

      <div className="action-mobile">
        <div className="facebook-logoM">
          <a
            href="https://www.facebook.com/dentista.pamelanoris/"
            target={"_blank"}
            rel="noreferrer"
          >
            <box-icon
              type="logo"
              name="facebook-circle"
              animation="tada-hover"
              size="md"
              color="grey"
            ></box-icon>
          </a>
        </div>

        <div className="instagramLogoM">
          <a
            href="https://www.instagram.com/dra.pamelanoris/"
            target={"_blank"}
            rel="noreferrer"
          >
            <box-icon
              type="logo"
              name="instagram"
              animation="tada-hover"
              size="md"
              color="grey"
            ></box-icon>
          </a>
        </div>

        <div className="tiktokLogoM">
          <a
            href="https://www.tiktok.com/@pamenoris"
            target={"_blank"}
            rel="noreferrer"
          >
            <box-icon
              type="logo"
              name="tiktok"
              animation="tada-hover"
              size="md"
              color="grey"
            ></box-icon>
          </a>
        </div>

        <div className="dropdown-btn-header">
          <button className="menu-btn" onClick={toggleEstiloBoton}>
            <a>
              <box-icon
                name="menu"
                animation="flashing-hover"
                size="md"
                color="grey"
              ></box-icon>
            </a>
          </button>

          <div
            className={
              estadoBoton
                ? "dropdown-options true-hidden"
                : "dropdown-options false-displayed"
            }
          >
            <ul className="dropdown">
              <li>
                <a className="dropdown-option-1" href="#Quien-soy">
                  ¿Quién soy?
                </a>
              </li>
              <li>
                <a className="dropdown-option-2" href="#Testimonios">
                  Testimonios
                </a>
              </li>
              <li>
                <a className="dropdown-option-3" href="#Servicios">
                  Servicios
                </a>
              </li>
              <li>
                <a className="dropdown-option-4" href="#Fotos">
                  Galería
                </a>
              </li>
              <li>
                <a className="dropdown-option-5" href="#Contacto">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
