import { Link } from 'react-router-dom'
import { archivo, empleado, flag, home, me, www } from '../../Components/componets'

export default function index () {
  return (
        <main>
            <div class="navegador">
                <Link class="nes-btn" to="/">
                    <img src={home} alt=""/>
                </Link>
                <Link class="nes-btn" to="../About/about">
                    <img src={empleado} alt=""/>
                </Link>
                <Link class="nes-btn" to="/Projects/projects">
                    <img src={archivo} alt=""/>
                </Link>
                <Link class="nes-btn" to="../SocialMedia/socialMedia">
                    <img src={www} alt=""/>
                </Link>
            </div>
        <div class="container">
            <div class="colombia-flag">
                <i><img src={flag} alt=""/></i>
            </div>
        <section class="nes-container with-title">
            <h1 class="title">About Me</h1>
            <div class="img-p">
                <div class="circulo">
                    <img src={me} alt=""/>
                </div>
                <p>Hi! My name is Michael Estiven Reyes Escobar.</p>
                <p>I´m a Multimedia and Biomedical Engineering Student from Colombia, and my principal interests are Videogames, Graphic Design, and Filmmaking.
                </p>
            </div>
            <p>My Education:</p>
            <ul class="nes-list is-disc">
                <li>
                    Multimedia Design and Integration Technician</li>
                <li>
                    Servicio Nacional De Aprendizaje (SENA)
                </li>
                <li>
                    January 2019 - November 2020
                </li>
                <p></p>
                <li>
                    Technician in Research Projects
                </li>
                <li>
                    Colegio Comfandi Tuluá
                </li>
                <li>
                    February 2018 - November 2020
                </li>
                <p></p>
                <li>
                    Multimedia Engineering
                </li>
                <li>
                    Universidad de San Buenaventura
                </li>
                <li>
                    February 2021 - Present.
                </li>
            </ul>
        </section>
        </div>
    </main>
  )
}
