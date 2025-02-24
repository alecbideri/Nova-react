import Navbar from './components/Navbar'
import Header from './components/Header'
import Product from './components/Product'
import Services from './components/Services'
import Feautures from './components/Feautures'
import Team from './components/Team'
import Faq from './components/Faq'
import SignupSection from './components/SignUpSection'
import { ToastContainer} from 'react-toastify';
import Footer from './components/footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden flex flex-col items-center'>
      <ToastContainer />
      <Navbar />
      <Header />
      <div className='my-16 w-full'> 
        <Services />
        <Feautures/>
      </div>
      <div className='my-16 w-full'>
        <Product />
        <Team/>
        <Faq/>
        <SignupSection/>
      </div>
      <div className='mt-16 w-full'>
      <Footer/>
      </div>
    </div>
  )
}


export default App