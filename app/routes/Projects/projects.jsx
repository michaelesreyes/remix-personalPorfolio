import { Link } from 'react-router-dom'
import { archivo, empleado, flag, home, me, www } from '../../Components/componets'

export default function index () {
  return (
        <>
            <main>
                <div class="navegador">
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
                </div>
            <div class="container">
            <section class="nes-container with-title">
                <h1 class="title">Projects</h1>
                <div class="articles">
                    <p>GitHub Projects</p>
                    <div class="buttoms">
                        <a class="nes-btn" href="https://github.com/michaelesreyes/Parcial2">
                            <i class="nes-icon github"></i>
                            <h4>Parcial 2</h4>
                        </a>
                        <a class="nes-btn " href="https://github.com/michaelesreyes/ProyectoFinal">
                            <i class="nes-icon github"></i>
                            <h4>Proyecto Final</h4>
                        </a>
                    </div>
                    <p>Graphic Desing Projects</p>
                </div>
            </section>
            </div>
        </main>
    </>
  )
}
