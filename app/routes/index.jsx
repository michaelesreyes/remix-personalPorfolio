import { Link } from 'react-router-dom'
import { me } from './components'

export default function Index () {
  return (
    <main>
        <div class="container">
            <div class="circulo">
                <img src={me} alt="Me"/>
            </div>
            <h1><i class="nes-icon trophy is-large"></i> Michael Reyes Personal Page <i class="nes-icon trophy is-large"></i> </h1>
            <section class="nes-container with-title">
                <h1 class="title">Principal Sections </h1>
                <div class="buttoms">
                    <Link class="nes-btn" to="/about/about">
                      About me
                    </Link>
                    <Link class="nes-btn" to="/projects/index">
                      Projects
                    </Link>
                    <Link class="nes-btn" to="/socialmedia/index">
                      Social Media
                    </Link>
                </div>
            </section>
        </div>
    </main>
  )
}
