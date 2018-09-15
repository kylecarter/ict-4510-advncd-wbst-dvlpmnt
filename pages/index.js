import HEAD from '../components/Head'
import css from "./styles.sass"

const META = {
    title: 'Home',
    description: 'This is the project work for Kyle A. Carter in the ICT 4510 Advanced Website Design and Management offered through the University of Denver',
    keywords: 'html, css, js, react, nextjs',
    canonical: 'http://localhost:3000'
}

export default () => (<div>
    <HEAD {...META} />
    <main>
        <h1 className={css.title}>Hello World!</h1>
    </main>
</div>)