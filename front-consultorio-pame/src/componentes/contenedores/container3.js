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
          <img
            className="imgService"
            src="/Website-Images/Servicios/servicio1-min.png"
            alt="Servicio 1"
          />

          <h2>Limpieza dental</h2>

          <div
            className={
              estadosTexto["servicio1"]
                ? "descriptionService text-container expanded"
                : "descriptionService text-container collapsed"
            }
          >
            <img
              className="imgServiceMobile"
              src="/Website-Images/Servicios/servicio1-min.png"
              alt="Servicio 1"
            />

            <p
              style={{
                display: estadosTexto["servicio1"] ? "block" : "none",
              }}
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
          <img
            className="imgService"
            src="/Website-Images/Servicios/servicio2-min.png"
            alt="Servicio 2"
          />

          <h2>Blanqueamiento dental</h2>

          <div
            className={
              estadosTexto["servicio2"]
                ? "descriptionService text-container expanded"
                : " descriptionService text-container collapsed"
            }
          >
            <img
              className="imgServiceMobile"
              src="/Website-Images/Servicios/servicio2-min.png"
              alt="Servicio 2"
            />
            <p
              style={{
                display: estadosTexto["servicio2"] ? "block" : "none",
              }}
            >
              Puede ser en consultorio con una duración de 1 a 2 hr aplicado por
              el odontólogo o en casa y con guardas donde se aplica el
              tratamiento blanqueador por 7 días.
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
          <img
            className="imgService"
            src="/Website-Images/Servicios/servicio3-min.png"
            alt="Servicio 3"
          />

          <h2>Prótesis removibles</h2>

          <div
            className={
              estadosTexto["servicio3"]
                ? "descriptionService text-container expanded"
                : " descriptionService text-container collapsed"
            }
          >
            <img
              className="imgServiceMobile"
              src="/Website-Images/Servicios/servicio3-min.png"
              alt="Servicio 3"
            />
            <p
              style={{ display: estadosTexto["servicio3"] ? "block" : "none" }}
            >
              Prótesis dentales de “quitar y poner” para reponer brechas amplias
              de piezas dentales perdidas.
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
          <img
            className="imgService"
            src="/Website-Images/Servicios/servicio4-min.png"
            alt="Servicio 4"
          />

          <h2>Prótesis fija</h2>

          <div
            className={
              estadosTexto["servicio4"]
                ? "descriptionService text-container expanded"
                : "descriptionService text-container collapsed"
            }
          >
            <img
              className="imgServiceMobile"
              src="/Website-Images/Servicios/servicio4-min.png"
              alt="Servicio 4"
            />
            <p
              style={{ display: estadosTexto["servicio4"] ? "block" : "none" }}
            >
              Coronas, puentes, carillas e incrustaciones que se colocan sobre
              el diente para recuperar su tamaño, forma, resistencia, tamaño y
              apariencia.
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
          <img
            className="imgService highHeight"
            src="/Website-Images/Servicios/servicio5-min.png"
            alt="Servicio 5"
          />

          <h2>Extracciones dentales</h2>

          <div
            className={
              estadosTexto["servicio5"]
                ? "descriptionService text-container expanded"
                : " descriptionService text-container collapsed"
            }
          >
            <img
              className="imgServiceMobile"
              src="/Website-Images/Servicios/servicio5-min.png"
              alt="Servicio 5"
            />
            <p
              style={{ display: estadosTexto["servicio5"] ? "block" : "none" }}
            >
              Extracción de muelas del juicio, dientes ampliamente dañados,
              restos de dientes y con infección
            </p>
          </div>
          <i
            className={`bx bx-md ${
              estadosTexto["servicio5"] ? "bx-minus-circle" : "bx-plus-circle"
            } limpieza`}
            onClick={() => manejarClick("servicio5")}
          ></i>
        </div>

        {/* FIN DEL SERVICIO 5 */}

        {/* INICIO DEL SERVICIO 6 */}

        <div className="singleService">
          <img
            className="imgService"
            src="/Website-Images/Servicios/servicio6-min.png"
            alt="Servicio 6"
          />

          <h2>Endodoncia, periodoncia, rehabilitación de implantes</h2>

          <div
            className={
              estadosTexto["servicio6"]
                ? "descriptionService text-container expanded"
                : " descriptionService text-container collapsed"
            }
          >
            <img
              className="imgServiceMobile"
              src="/Website-Images/Servicios/servicio6-min.png"
              alt="Servicio 6"
            />
            <p
              style={{ display: estadosTexto["servicio6"] ? "block" : "none" }}
            >
              Interdisciplinario con otros especialistas de la salud en la
              clínica.
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
          <img
            className="imgService"
            src="/Website-Images/Servicios/servicio7-min.png"
            alt="Servicio 7"
          />

          <h2>Resinas dentales (empastes)</h2>

          <div
            className={
              estadosTexto["servicio7"]
                ? "descriptionService text-container expanded"
                : " descriptionService text-container collapsed"
            }
          >
            <img
              className="imgServiceMobile"
              src="/Website-Images/Servicios/servicio7-min.png"
              alt="Servicio 7"
            />
            <p
              style={{ display: estadosTexto["servicio7"] ? "block" : "none" }}
            >
              Proceso en el cual se elimina la caries existente en el diente
              para reconstruir con resina del mismo color del diente dejándolo
              de manera natural.
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
          <img
            className="imgService highHeight"
            src="/Website-Images/Servicios/servicio8-min.png"
            alt="Servicio 3"
          />

          <h2>Diagnóstico</h2>

          <div
            className={
              estadosTexto["servicio8"]
                ? "descriptionService text-container expanded"
                : " descriptionService text-container collapsed"
            }
          >
            <img
              className="imgServiceMobile"
              src="/Website-Images/Servicios/servicio8-min.png"
              alt="Servicio 8"
            />
            <p
              style={{ display: estadosTexto["servicio8"] ? "block" : "none" }}
            >
              Cita en la cual se examina a profundidad el estado de los dientes
              y boca del paciente, se elabora un diagnóstico, plan de
              tratamiento y un presupuesto.
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
