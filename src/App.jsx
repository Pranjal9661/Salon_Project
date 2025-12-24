import NavBar from "./components/NavBar"
import Pricing from "./components/Pricing"
import Features from "./components/Features"
import Logo from "./components/Logo"
import Footer from "./components/Footer"
import Testimonials from "./components/Testimonials"


function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
        <NavBar></NavBar>
        <Logo></Logo>
        <Features></Features>
        <Pricing></Pricing>
        <Testimonials></Testimonials>
        <Footer></Footer>
        <h1 className="text-4xl">Da'One</h1>
    </div>
  );
}

export default App
