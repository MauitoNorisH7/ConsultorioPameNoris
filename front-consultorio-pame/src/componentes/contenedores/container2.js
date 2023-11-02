import React, { Component } from "react";
import Slider from "react-slick";

export const Container2 = () => {
  var settings = {
    className: "center",
    dots: true,
    centerMode: false,
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4200,
    cssEase: "linear",
  };
  return (
    <section id="Testimonios" className="bgGradientMobile">
      <div className="darkBlueLine">
        <h1>Testimonios</h1>
      </div>
      <div className="testimonialsBgGradient">
        <div className="testimonials">
          <div className="testimonialsGroup">
            <div className="testimonial testimonialM1">
              <div className="img-name-starPerson">
                <img
                  className="imgPerson"
                  src="tamaño-infantil.jpg"
                  alt="Primer cliente"
                />
                <div className="namePerson">
                  <p>Alejandro Martínez</p>
                  <img
                    className="stars"
                    src="Estrellas.png"
                    alt="Calificacion"
                  />
                  <img
                    className="stars"
                    src="Estrellas.png"
                    alt="Calificacion"
                  />
                  <img
                    className="stars"
                    src="Estrellas.png"
                    alt="Calificacion"
                  />
                  <img
                    className="stars"
                    src="Estrellas.png"
                    alt="Calificacion"
                  />
                  <img
                    className="stars"
                    src="Estrellas.png"
                    alt="Calificacion"
                  />
                </div>
              </div>

              <div className="comment">
                <p>
                  Excelente atención, el lugar muy limpio y muy profesional la
                  doctora
                </p>
              </div>
            </div>

            <div className="testimonial testimonialM2">
              <div className="img-name-starPerson">
                <img
                  className="imgPerson"
                  src="tamaño-infantil.jpg"
                  alt="Segundo cliente"
                />
                <div className="namePerson">
                  <p>Ana Laura González</p>
                  <img
                    className="stars"
                    src="Estrellas.png"
                    alt="Calificacion"
                  />
                  <img
                    className="stars"
                    src="Estrellas.png"
                    alt="Calificacion"
                  />
                  <img
                    className="stars"
                    src="Estrellas.png"
                    alt="Calificacion"
                  />
                  <img
                    className="stars"
                    src="Estrellas.png"
                    alt="Calificacion"
                  />
                  <img
                    className="stars"
                    src="Estrellas.png"
                    alt="Calificacion"
                  />
                </div>
              </div>

              <div className="comment">
                <p>
                  Un excelente trato, muy paciente y cuidadosa, profesionalismo,
                  detallista y siempre está al pendiente de sus pacientes
                </p>
              </div>
            </div>

            <div className="testimonial testimonialM3">
              <div className="img-name-starPerson">
                <img
                  className="imgPerson"
                  src="tamaño-infantil.jpg"
                  alt="Tercer cliente"
                />
                <div className="namePerson">
                  <p>Miriana</p>
                  <img
                    className="stars"
                    src="Estrellas.png"
                    alt="Calificacion"
                  />
                  <img
                    className="stars"
                    src="Estrellas.png"
                    alt="Calificacion"
                  />
                  <img
                    className="stars"
                    src="Estrellas.png"
                    alt="Calificacion"
                  />
                  <img
                    className="stars"
                    src="Estrellas.png"
                    alt="Calificacion"
                  />
                  <img
                    className="stars"
                    src="Estrellas.png"
                    alt="Calificacion"
                  />
                </div>
              </div>

              <div className="comment">
                <p>
                  Cita con puntualidad, excelente ubicación, excelente higiene
                  en el consultorio y por parte de la Dra.
                </p>
              </div>
            </div>

            <div className="testimonial testimonialM4">
              <div className="img-name-starPerson">
                <img
                  className="imgPerson"
                  src="tamaño-infantil.jpg"
                  alt="Cuarto cliente"
                />
                <div className="namePerson">
                  <p>María Inés</p>
                  <img
                    className="stars"
                    src="Estrellas.png"
                    alt="Calificacion"
                  />
                  <img
                    className="stars"
                    src="Estrellas.png"
                    alt="Calificacion"
                  />
                  <img
                    className="stars"
                    src="Estrellas.png"
                    alt="Calificacion"
                  />
                  <img
                    className="stars"
                    src="Estrellas.png"
                    alt="Calificacion"
                  />
                  <img
                    className="stars"
                    src="Estrellas.png"
                    alt="Calificacion"
                  />
                </div>
              </div>
              <div className="comment">
                <p>
                  Salí súper feliz con mi sonrisa y más que nada tranquila, me
                  sentí segura todo el proceso y satisfecha con mis resultados
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mobileCarousel">
          <Slider {...settings}>
            <div className="slideCarousel">
              <div className="testimonial testimonialM1">
                <div className="img-name-starPerson">
                  <img
                    className="imgPerson"
                    src="tamaño-infantil.jpg"
                    alt="Primer cliente"
                  />
                  <div className="namePerson">
                    <p>Alejandro Martínez</p>
                    <img
                      className="stars"
                      src="Estrellas.png"
                      alt="Calificacion"
                    />
                    <img
                      className="stars"
                      src="Estrellas.png"
                      alt="Calificacion"
                    />
                    <img
                      className="stars"
                      src="Estrellas.png"
                      alt="Calificacion"
                    />
                    <img
                      className="stars"
                      src="Estrellas.png"
                      alt="Calificacion"
                    />
                    <img
                      className="stars"
                      src="Estrellas.png"
                      alt="Calificacion"
                    />
                  </div>
                </div>

                <div className="comment">
                  <p>
                    Excelente atención, el lugar muy limpio y muy profesional la
                    doctora
                  </p>
                </div>
              </div>
            </div>

            <div className="slideCarousel">
              <div className="testimonial testimonialM2">
                <div className="img-name-starPerson">
                  <img
                    className="imgPerson"
                    src="tamaño-infantil.jpg"
                    alt="Segundo cliente"
                  />
                  <div className="namePerson">
                    <p>Ana Laura González</p>
                    <img
                      className="stars"
                      src="Estrellas.png"
                      alt="Calificacion"
                    />
                    <img
                      className="stars"
                      src="Estrellas.png"
                      alt="Calificacion"
                    />
                    <img
                      className="stars"
                      src="Estrellas.png"
                      alt="Calificacion"
                    />
                    <img
                      className="stars"
                      src="Estrellas.png"
                      alt="Calificacion"
                    />
                    <img
                      className="stars"
                      src="Estrellas.png"
                      alt="Calificacion"
                    />
                  </div>
                </div>

                <div className="comment">
                  <p>
                    Un excelente trato, muy paciente y cuidadosa,
                    profesionalismo, detallista y siempre está al pendiente de
                    sus pacientes
                  </p>
                </div>
              </div>
            </div>
            <div className="slideCarousel">
              <div className="testimonial testimonialM3">
                <div className="img-name-starPerson">
                  <img
                    className="imgPerson"
                    src="tamaño-infantil.jpg"
                    alt="Tercer cliente"
                  />
                  <div className="namePerson">
                    <p>Miriana</p>
                    <img
                      className="stars"
                      src="Estrellas.png"
                      alt="Calificacion"
                    />
                    <img
                      className="stars"
                      src="Estrellas.png"
                      alt="Calificacion"
                    />
                    <img
                      className="stars"
                      src="Estrellas.png"
                      alt="Calificacion"
                    />
                    <img
                      className="stars"
                      src="Estrellas.png"
                      alt="Calificacion"
                    />
                    <img
                      className="stars"
                      src="Estrellas.png"
                      alt="Calificacion"
                    />
                  </div>
                </div>

                <div className="comment">
                  <p>
                    Cita con puntualidad, excelente ubicación, excelente higiene
                    en el consultorio y por parte de la Dra.
                  </p>
                </div>
              </div>
            </div>
            <div className="slideCarousel">
              <div className="testimonial testimonialM4">
                <div className="img-name-starPerson">
                  <img
                    className="imgPerson"
                    src="tamaño-infantil.jpg"
                    alt="Cuarto cliente"
                  />
                  <div className="namePerson">
                    <p>María Inés</p>
                    <img
                      className="stars"
                      src="Estrellas.png"
                      alt="Calificacion"
                    />
                    <img
                      className="stars"
                      src="Estrellas.png"
                      alt="Calificacion"
                    />
                    <img
                      className="stars"
                      src="Estrellas.png"
                      alt="Calificacion"
                    />
                    <img
                      className="stars"
                      src="Estrellas.png"
                      alt="Calificacion"
                    />
                    <img
                      className="stars"
                      src="Estrellas.png"
                      alt="Calificacion"
                    />
                  </div>
                </div>
                <div className="comment">
                  <p>
                    Salí súper feliz con mi sonrisa y más que nada tranquila, me
                    sentí segura todo el proceso y satisfecha con mis resultados
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};
