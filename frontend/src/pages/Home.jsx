import { Link } from "react-router-dom"
import Hero from "../components/Hero"
import Intro from "../components/Intro"
import { useSelector } from "react-redux"

function Home() {
  const { user } = useSelector((state) => state.auth)

  return (
    <>
    <Intro />
      <section className="heading">
        <h1>VIT Bhopal Support Ticket System</h1>
        <p><em>Have a problem with factilities at VIT Bhopal? Create a support ticket now!</em></p>
      </section>
      <div className="home--buttons">
      {user ? (
        <>
      <Link to="/new-ticket" className="btn-nt">
        Raise new ticket
      </Link>
      <Link to="/tickets" className="btn-nt">
        View all tickets
      </Link>
    </>
  ) : (
    <>
      <Link to="/login" className="btn-nt">
        Login
      </Link>
      <Link to="/register" className="btn-nt">
        Register
      </Link>
    </>
  )}
  </div>
  <Hero />
    </>
  )
}

export default Home
