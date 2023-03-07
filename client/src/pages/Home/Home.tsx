import Hero from '../../components/Hero/Hero'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import Features from '../../components/Features/Fearures'
import Usecases from '../../components/Usecases/Usecases'
import Pricing from '../../components/Pricing/Pricing'
import Review from '../../components/Reviews/Review'
import FAQ from '../../components/FAQ/FAQ'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
 
const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <div id="howitworks">
      <HowItWorks />
      </div>
      <div id="usecases">
      <Usecases />
      </div>
      <div id="features">
      <Features />
      </div>
      <div id="pricing">
      <Pricing />
      </div>
      <div id="reviews">
      <Review />
      </div>
      <FAQ />
      <Footer/>
    </>
  )
}

export default Home
