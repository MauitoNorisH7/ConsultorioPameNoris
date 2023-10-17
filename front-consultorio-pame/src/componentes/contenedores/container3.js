import React, { useState } from "react";

export const Container3 = () => {
  // Usamos un objeto para llevar el estado de múltiples elementos de texto
  const [estadosTexto, setEstadosTexto] = useState({});

  // Esta función ahora acepta un ID para identificar qué ítem está siendo manipulado
  const manejarClick = (id) => {
    // Cambia el estado del texto específico basado en su ID
    setEstadosTexto((estadoPrevio) => ({
      ...estadoPrevio,
      [id]: !estadoPrevio[id], // Alterna entre mostrar/ocultar
    }));
  };

  return (
    <section id="Servicios" className="section-services">
      <div className="brightBlueLine">
        <h1>Servicios</h1>
      </div>
      <div className="servicesGroup">
        {/* INICIO DEL SERVICIO 1 */}
        <div className="singleService">
          <img className="imgService" src="Servicio-2.png" alt="Servicio 2" />

          <h2>Blanqueamiento dental</h2>

          <div
            className={
              estadosTexto["servicio1"]
                ? "descriptionService text-container expanded"
                : " descriptionService text-container collapsed"
            }
          >
            <p
              style={{ display: estadosTexto["servicio1"] ? "block" : "none" }}
            >
              Limpieza profunda para eliminar el sarro en dientes con un
              escariador de ultrasonido y posteriormente un pulido con pasta
              dental especial.
            </p>
          </div>
          <i
            className={`bx bx-md ${
              estadosTexto["servicio1"] ? "bx-minus-circle" : "bx-plus-circle"
            } limpieza`}
            onClick={() => manejarClick("servicio1")}
          ></i>
        </div>
        {/* FIN DEL SERVICIO 1 */}

        {/* INICIO DEL SERVICIO 2 */}
        <div className="singleService">
          <img className="imgService" src="Servicio-2.png" alt="Servicio 2" />

          <h2>Blanqueamiento dental</h2>

          <div
            className={
              estadosTexto["servicio2"]
                ? "descriptionService text-container expanded"
                : " descriptionService text-container collapsed"
            }
          >
            <p
              style={{ display: estadosTexto["servicio2"] ? "block" : "none" }}
            >
              Se puede elegir entre 2 métodos: el primero, en consultorio con
              una duración de 1 a 2 hr aplicado por el odontólogo y el segundo,
              es en casa, con guardas donde se aplica el tratamiento blanqueador
              por 7 días.
            </p>
          </div>
          <i
            className={`bx bx-md ${
              estadosTexto["servicio2"] ? "bx-minus-circle" : "bx-plus-circle"
            } limpieza`}
            onClick={() => manejarClick("servicio2")}
          ></i>
        </div>

        {/* FIN DEL SERVICIO 2 */}

        {/* INICIO DEL SERVICIO 3 */}

        <div className="singleService">
          <img className="imgService" src="Servicio-3.png" alt="Servicio 3" />

          <h2>Blanqueamiento dental</h2>

          <div
            className={
              estadosTexto["servicio3"]
                ? "descriptionService text-container expanded"
                : " descriptionService text-container collapsed"
            }
          >
            <p
              style={{ display: estadosTexto["servicio3"] ? "block" : "none" }}
            >
              Se puede elegir entre 2 métodos: el primero, en consultorio con
              una duración de 1 a 2 hr aplicado por el odontólogo y el segundo,
              es en casa, con guardas donde se aplica el tratamiento blanqueador
              por 7 días.
            </p>
          </div>
          <i
            className={`bx bx-md ${
              estadosTexto["servicio3"] ? "bx-minus-circle" : "bx-plus-circle"
            } limpieza`}
            onClick={() => manejarClick("servicio3")}
          ></i>
        </div>

        {/* FIN DEL SERVICIO 3 */}

        {/* INICIO DEL SERVICIO 4 */}

        <div className="singleService">
          <img className="imgService" src="Servicio-3.png" alt="Servicio 4" />

          <h2>Blanqueamiento dental</h2>

          <div
            className={
              estadosTexto["servicio4"]
                ? "descriptionService text-container expanded"
                : " descriptionService text-container collapsed"
            }
          >
            <p
              style={{ display: estadosTexto["servicio4"] ? "block" : "none" }}
            >
              Se puede elegir entre 2 métodos: el primero, en consultorio con
              una duración de 1 a 2 hr aplicado por el odontólogo y el segundo,
              es en casa, con guardas donde se aplica el tratamiento blanqueador
              por 7 días.
            </p>
          </div>
          <i
            className={`bx bx-md ${
              estadosTexto["servicio4"] ? "bx-minus-circle" : "bx-plus-circle"
            } limpieza`}
            onClick={() => manejarClick("servicio4")}
          ></i>
        </div>

        {/* FIN DEL SERVICIO 4 */}

        {/* INICIO DEL SERVICIO 5 */}

        <div className="singleService">
          <img className="imgService" src="Servicio-3.png" alt="Servicio 5" />

          <h2>Blanqueamiento dental</h2>

          <div
            className={
              estadosTexto["servicio5"]
                ? "descriptionService text-container expanded"
                : " descriptionService text-container collapsed"
            }
          >
            <p
              style={{ display: estadosTexto["servicio5"] ? "block" : "none" }}
            >
              Se puede elegir entre 2 métodos: el primero, en consultorio con
              una duración de 1 a 2 hr aplicado por el odontólogo y el segundo,
              es en casa, con guardas donde se aplica el tratamiento blanqueador
              por 7 días.
            </p>
          </div>
          <i
            className={`bx bx-md ${
              estadosTexto["servicio4"] ? "bx-minus-circle" : "bx-plus-circle"
            } limpieza`}
            onClick={() => manejarClick("servicio5")}
          ></i>
        </div>

        {/* FIN DEL SERVICIO 5 */}

        {/* INICIO DEL SERVICIO 6 */}

        <div className="singleService">
          <img className="imgService" src="Servicio-3.png" alt="Servicio 6" />

          <h2>Blanqueamiento dental</h2>

          <div
            className={
              estadosTexto["servicio6"]
                ? "descriptionService text-container expanded"
                : " descriptionService text-container collapsed"
            }
          >
            <p
              style={{ display: estadosTexto["servicio6"] ? "block" : "none" }}
            >
              Se puede elegir entre 2 métodos: el primero, en consultorio con
              una duración de 1 a 2 hr aplicado por el odontólogo y el segundo,
              es en casa, con guardas donde se aplica el tratamiento blanqueador
              por 7 días.
            </p>
          </div>
          <i
            className={`bx bx-md ${
              estadosTexto["servicio6"] ? "bx-minus-circle" : "bx-plus-circle"
            } limpieza`}
            onClick={() => manejarClick("servicio6")}
          ></i>
        </div>

        {/* FIN DEL SERVICIO 6 */}

        {/* INICIO DEL SERVICIO 7 */}

        <div className="singleService">
          <img className="imgService" src="Servicio-3.png" alt="Servicio 7" />

          <h2>Blanqueamiento dental</h2>

          <div
            className={
              estadosTexto["servicio7"]
                ? "descriptionService text-container expanded"
                : " descriptionService text-container collapsed"
            }
          >
            <p
              style={{ display: estadosTexto["servicio7"] ? "block" : "none" }}
            >
              Se puede elegir entre 2 métodos: el primero, en consultorio con
              una duración de 1 a 2 hr aplicado por el odontólogo y el segundo,
              es en casa, con guardas donde se aplica el tratamiento blanqueador
              por 7 días.
            </p>
          </div>
          <i
            className={`bx bx-md ${
              estadosTexto["servicio7"] ? "bx-minus-circle" : "bx-plus-circle"
            } limpieza`}
            onClick={() => manejarClick("servicio7")}
          ></i>
        </div>

        {/* FIN DEL SERVICIO 7 */}

        {/* INICIO DEL SERVICIO 8 */}

        <div className="singleService">
          <img className="imgService" src="Servicio-3.png" alt="Servicio 3" />

          <h2>Blanqueamiento dental</h2>

          <div
            className={
              estadosTexto["servicio8"]
                ? "descriptionService text-container expanded"
                : " descriptionService text-container collapsed"
            }
          >
            <p
              style={{ display: estadosTexto["servicio8"] ? "block" : "none" }}
            >
              Se puede elegir entre 2 métodos: el primero, en consultorio con
              una duración de 1 a 2 hr aplicado por el odontólogo y el segundo,
              es en casa, con guardas donde se aplica el tratamiento blanqueador
              por 7 días.
            </p>
          </div>
          <i
            className={`bx bx-md ${
              estadosTexto["servicio8"] ? "bx-minus-circle" : "bx-plus-circle"
            } limpieza`}
            onClick={() => manejarClick("servicio8")}
          ></i>
        </div>

        {/* FIN DEL SERVICIO 8 */}
      </div>
    </section>
  );
};
