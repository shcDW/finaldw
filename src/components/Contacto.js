import React from 'react';

const Contacto = () => {
    return (
      <div className="Contacto">
        <section>
          <h2>Contacto</h2>
          <form className="formulario">
            <fieldset>
              <div className="contenedor-campos">
                <div className="campo">
                  <label>Nombre</label>
                  <input className="input-text" type="text" placeholder="Tu Nombre" />
                </div>
  
                <div className="campo">
                  <label>Teléfono</label>
                  <input className="input-text" type="tel" placeholder="Tu Teléfono" />
                </div>
  
                <div className="campo">
                  <label>Correo</label>
                  <input className="input-text" type="email" placeholder="Tu Email" />
                </div>
  
                <div className="campo">
                  <label>Mensaje</label>
                  <textarea className="input-text" placeholder="Escribe tu mensaje aquí"></textarea>
                </div>
              </div> {/* contenedor-campos */}
  
              <div className="alinear-derecha flex">
                <input className="boton w-100" type="submit" value="Enviar" />
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    );
  };
  
  export default Contacto;
  