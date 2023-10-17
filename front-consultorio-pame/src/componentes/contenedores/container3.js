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

          <h2>Limpieza dental</h2>

          <div className="descriptionService">
            <p>
              Limpieza profunda para eliminar el sarro en dientes con un
              escariador de ultrasonido y posteriormente un pulido con pasta
              dental especial.
            </p>
          </div>
        </div>
        {/* FIN DEL SERVICIO 1 */}

        {/* INICIO DEL SERVICIO 2 */}
        <div className="singleService">
          <img className="imgService" src="Servicio-2.png" alt="Servicio 2" />

          <h2>Blanqueamiento dental</h2>

          <div className="descriptionService">
            <p>
              Se puede elegir entre 2 métodos: el primero, en consultorio con
              una duración de 1 a 2 hr aplicado por el odontólogo y el segundo,
              es en casa, con guardas donde se aplica el tratamiento blanqueador
              por 7 días.
            </p>
          </div>
        </div>

        {/* FIN DEL SERVICIO 2 */}

        {/* INICIO DEL SERVICIO 3 */}

        <div className="singleService">
          <img className="imgService" src="Servicio-3.png" alt="Servicio 3" />

          <h2>Prótesis removibles</h2>

          <div className="descriptionService">
            <p>
              Prótesis dentales de “quitar y poner” para reponer brechas amplias
              de piezas dentales perdidas.
            </p>
          </div>
        </div>

        {/* FIN DEL SERVICIO 3 */}

        {/* INICIO DEL SERVICIO 4 */}

        <div className="singleService">
          <img className="imgService" src="Servicio-3.png" alt="Servicio 3" />

          <h2>Prótesis fija</h2>

          <div className="descriptionService">
            <p>
              Coronas, puentes, carillas e incrustaciones que se colocan sobre
              el diente para recuperar su tamaño, forma, resistencia, tamaño y
              apariencia.
            </p>
          </div>
        </div>

        {/* FIN DEL SERVICIO 4 */}

        {/* INICIO DEL SERVICIO 5 */}

        <div className="singleService">
          <img className="imgService" src="Servicio-3.png" alt="Servicio 3" />

          <h2>Extracciones dentales</h2>

          <div className="descriptionService">
            <p>
              Extracción de muelas del juicio, dientes ampliamente dañados,
              restos de dientes y con infección.
            </p>
          </div>
        </div>

        {/* FIN DEL SERVICIO 5 */}

        {/* INICIO DEL SERVICIO 6 */}

        <div className="singleService">
          <img className="imgService" src="Servicio-3.png" alt="Servicio 3" />

          <h2>Endodoncia, periodoncia, rehabilitación de implantes</h2>

          <div className="descriptionService">
            <p>
              Interdisciplinario con otros especialistas de la salud en la
              clínica.
            </p>
          </div>
        </div>

        {/* FIN DEL SERVICIO 6 */}

        {/* INICIO DEL SERVICIO 7 */}

        <div className="singleService">
          <img className="imgService" src="Servicio-3.png" alt="Servicio 3" />

          <h2>Resinas dentales (empastes):</h2>

          <div className="descriptionService">
            <p>
              Proceso en el cual se elimina la caries existente en el diente
              para reconstruir con resina del mismo color del diente dejándolo
              de manera natural.
            </p>
          </div>
        </div>

        {/* FIN DEL SERVICIO 7 */}

        {/* INICIO DEL SERVICIO 8 */}

        <div className="singleService">
          <img className="imgService" src="Servicio-3.png" alt="Servicio 3" />

          <h2>Diagnóstico</h2>

          <div className="descriptionService">
            <p>
              Cita en la cual se examina a profundidad el estado de los dientes
              y boca del paciente, se elabora un diagnóstico, plan de
              tratamiento y un presupuesto
            </p>
          </div>
        </div>

        {/* FIN DEL SERVICIO 8 */}
      </div>
    </section>
  );
};
