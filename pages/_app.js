import '../styles/globals.css'
import Header from '../components/header'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
      <Header />
      <div class="dashboard">
        <h1>Simple Next.js App served by NGINX and Docker</h1>
      </div>
      <Footer />
    </div>
  );
}

export default MyApp
