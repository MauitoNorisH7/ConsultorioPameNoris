import React from "react";

export const Container3 = () => {
  return (
    <section id="Servicios" className="section-services">
      <div className="brightBlueLine">
        <h1>Servicios</h1>
      </div>

      <div className="servicesGroup">
        {/* INICIO DEL SERVICIO 1 */}
        <div className="singleService">
          <img className="imgService" src="Servicio-1.png" alt="Servicio 1" />

          <h2>Servicio 1</h2>

          <div className="descriptionService">
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los uso como componentes de{" "}
            </p>
          </div>
        </div>
        {/* FIN DEL SERVICIO 1 */}

        {/* INICIO DEL SERVICIO 2 */}
        <div className="singleService">
          <img className="imgService" src="Servicio-2.png" alt="Servicio 2" />

          <h2>Servicio 2</h2>

          <div className="descriptionService">
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los uso como componentes de{" "}
            </p>
          </div>
        </div>

        {/* FIN DEL SERVICIO 2 */}

        {/* INICIO DEL SERVICIO 3 */}

        <div className="singleService">
          <img className="imgService" src="Servicio-3.png" alt="Servicio 3" />

          <h2>Servicio 3</h2>

          <div className="descriptionService">
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los uso como componentes de{" "}
            </p>
          </div>
        </div>

        {/* FIN DEL SERVICIO 3 */}
      </div>
    </section>
  );
};
