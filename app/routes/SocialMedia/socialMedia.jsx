import { Link } from 'react-router-dom'
import { archivo, empleado, flag, home, me, www } from '../../Components/componets'

export default function index () {
  return (
        <>
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
                <section class="nes-container with-title">
                    <h1 class="title">Social Media</h1>
                    <div class="article">
                        <a class="nes-btn" href="https://github.com/michaelesreyes">
                            <i class="nes-icon github"></i>
                            <h4>Github</h4>
                        </a>
                        <a class="nes-btn is-primary" href="https://www.linkedin.com/in/michael-estiven-reyes-escobar-a9987b218/">
                            <i class="nes-icon linkedin"></i>
                            <h4>Linkedin</h4>
                        </a>
                        <a class="nes-btn is-primary" href="https://twitter.com/michaelesreyes">
                            <i class="nes-icon twitter "></i>
                            <h4>Twitter</h4>
                        </a>
                        <a class="nes-btn is-error" href="https://www.instagram.com/michaelesreyes.14/">
                            <i class="nes-icon instagram"></i>
                            <h4>instagram</h4>
                        </a>
                    </div>
                </section>
                </div>
            </main>
        </>
  )
}
