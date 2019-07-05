// this is the link API
import Link from 'next/link';
import Header from '../components/Header';
import Layout from '../components/MyLayout';

const PostLink = props => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
        <br />
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
            <a>enmascaramiento de rutas {props.title}</a>
        </Link>
    </li>
);

export default function Blog() {
    return (
        <div>
            <Layout>
                <div>
                    <Link href="/about">
                        <a>href del lado del cliente con etiqueta link /></a>
                    </Link>
                    <br />
                    <Link href="/about">
                        <button>Go to About Page button</button>
                    </Link>
                    <Layout>
                        Importar un COMPONENTE
                        <Header />
                    </Layout>
                    <a href="/about"> href con etiqueta 'a />'</a>
                </div>
            </Layout>
            <Layout>
                <h1>My Blog</h1>
                <ul>
                    <PostLink id="hello-nextjs" title="Hello Next.js" />
                    <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
                    <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
                </ul>
            </Layout>
        </div>
    );
}