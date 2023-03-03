import Hero from '../../components/Hero/Hero'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import Features from '../../components/Features/Fearures'
import Usecases from '../../components/Usecases/Usecases'
import Pricing from '../../components/Pricing/Pricing'
import Review from '../../components/Reviews/Review'
import FAQ from '../../components/FAQ/FAQ'
 
const Home = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Usecases />
      <Features />
      <Pricing />
      <Review />
      <FAQ />
    </>
  )
}

export default Home
