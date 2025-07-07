import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { createTicket, reset } from "../features/tickets/ticketSlice"
import Spinner from "../components/Spinner"
import BackButton from "../components/BackButton"

function NewTicket() {
  const { user } = useSelector((state) => state.auth)
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.tickets
  )

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [product, setProduct] = useState("iPhone")
  const [description, setDescription] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess) {
      dispatch(reset())
      navigate("/tickets")
    }

    dispatch(reset())
  }, [dispatch, isError, isSuccess, navigate, message])

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createTicket({ product, description }))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
    <div className="outerArea-container">
      <section className= "outerArea-newTicket">
        <section className="heading">
          <h1>Raise a New Ticket</h1> 
        </section>

        <section className="form">
          <div className="form-group">
            <label htmlFor="name">Student Name</label>
            <input type="text" className="form-control" value={name} disabled />
          </div>
          <div className="form-group">
            <label htmlFor="email">Student Email</label>
            <input type="text" className="form-control" value={email} disabled />
          </div>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="product">Problem Subject</label>
              <select
                name="product"
                id="product"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              >
                <option value="furniture">Furniture</option>
                <option value="electrical">Electrical</option>
                <option value="plumbing">Plumbing</option>
                <option value="cleaning">Cleaning</option>
                <option value="wifi">Wifi</option>

              </select>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <button className="btn-sub">Submit</button>
            </div>
          </form>
        </section>
      </section>
      </div>
    <BackButton url="/" />
    </>
  )
}

export default NewTicket
