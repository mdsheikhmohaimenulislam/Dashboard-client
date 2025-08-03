import { useNavigate } from "react-router";
import { Bounce, toast, ToastContainer } from "react-toastify";

function App() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    toast.success("Successfully Login", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    if (name && email) {
      // Reset the form
      form.reset();
    }
    
      // Delay navigation until after toast
    setTimeout(()=>{
      navigate("dashboard");
    },3000)
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  name="name"
                  type="name"
                  className="input"
                  placeholder="Name"
                />
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
              </fieldset>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
