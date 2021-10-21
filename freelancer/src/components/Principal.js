import React from "react";
import "../css/Principal.css";
export default function Principal() {
  return (
    <div>
      <h1 className="titulo">Diseño y Desarrollo Web Freelancer</h1>
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-map-pin"
          width="88"
          height="88"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#6f32be"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="11" r="3" />
          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
        </svg>
      </p>
      <p>Bogotá, Colombia</p>
      <a href="!#">Contactar</a>
      <h2>Mis Servicios</h2>
      <h3>Diseño web</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-sitemap"
        width="88"
        height="88"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#000000"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="3" y="15" width="6" height="6" rx="2" />
        <rect x="15" y="15" width="6" height="6" rx="2" />
        <rect x="9" y="3" width="6" height="6" rx="2" />
        <path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" />
        <line x1="12" y1="9" x2="12" y2="12" />
      </svg>
      <p>
        In dictum, leo vehicula consequat tincidunt, nunc magna bibendum libero,
        in fringilla velit odio eu turpis.
      </p>
      <h3>Aplicaciones Móviles</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-brand-android"
        width="88"
        height="88"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#000000"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="4" y1="10" x2="4" y2="16" />
        <line x1="20" y1="10" x2="20" y2="16" />
        <path d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0" />
        <line x1="8" y1="3" x2="9" y2="5" />
        <line x1="16" y1="3" x2="15" y2="5" />
        <line x1="9" y1="18" x2="9" y2="21" />
        <line x1="15" y1="18" x2="15" y2="21" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-brand-apple"
        width="88"
        height="88"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#000000"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 7c-3 0 -4 3 -4 5.5c0 3 2 7.5 4 7.5c1.088 -.046 1.679 -.5 3 -.5c1.312 0 1.5 .5 3 .5s4 -3 4 -5c-.028 -.01 -2.472 -.403 -2.5 -3c-.019 -2.17 2.416 -2.954 2.5 -3c-1.023 -1.492 -2.951 -1.963 -3.5 -2c-1.433 -.111 -2.83 1 -3.5 1c-.68 0 -1.9 -1 -3 -1z" />
        <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
      </svg>
      <p>
        Fusce scelerisque, nisi rhoncus suscipit facilisis, odio nisl fringilla
        risus, ut maximus nulla odio non turpis.
      </p>
      <h3>E-Commerce</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-shopping-cart"
        width="88"
        height="88"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#000000"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="6" cy="19" r="2" />
        <circle cx="17" cy="19" r="2" />
        <path d="M17 17h-11v-14h-2" />
        <path d="M6 5l14 1l-1 7h-13" />
      </svg>
      <p>
        Curabitur aliquet urna quam, sollicitudin pellentesque mauris faucibus
        et. Curabitur accumsan lobortis lorem, vitae sollicitudin magna lobortis
        sit amet.
      </p>
      <form>
        <fieldset>
          <legend>Contactanos llenando el siguiente formulario</legend>
          <div>
            <label>Nombre</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Teléfono</label>
            <input type="tel" placeholder="Teléfono"></input>
          </div>
          <div>
            <label>Correo</label>
            <input type="email" placeholder="Email"></input>
          </div>
          <div>
            <label>Mensaje</label>
            <textarea placeholder="Dejanos tu mensaje"></textarea>
          </div>
          <div>
            <input type="submit"></input>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
