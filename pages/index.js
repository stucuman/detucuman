import Head from 'next/head';

const Home = () => (
  <div>
    <Head>
      <title>Next.js on the Jamstack with Netlify!</title>
    </Head>
    <h1>
      mira la  <a href="https://lacritica.com.ar/quiniela-de-tucuman">Quiniela de Tucuman</a>
    </h1>
  <h1>
      Mira la  <a href="https://lacritica.com.ar/quiniela-nacional">quiniela nacional</a>
    </h1>

  <h1>
      Conoce <a href="https://lacritica.com.ar/quiniela">quiniela enzo</a>
    </h1>


    <h3>
      Hooray 🎉 - you've built this with{' '}
      <a href="https://nextjs.org">Next.js</a>!
  
    </h3>


    <style jsx>{`
      :global(html, body) {
        margin: 0;
        padding: 0;
        height: 100%;
      }

      :global(body) {
        font-size: calc(10px + 1vmin);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #282c34;
        color: white;
      }

      a {
        color: pink;
        text-decoration: none;
      }

      .content {
        padding: 0 32px;
      }
    `}</style>
  </div>
);

export default Home;
