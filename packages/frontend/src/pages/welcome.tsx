import { useContext, useEffect } from "react";
import { UserContext } from "../context/auth";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks";

function Welcome() {
  const { loggedUser } = useContext(UserContext);
  const { logout } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useffect");
    if (!loggedUser) {
      navigate("/sign-in");
    }
  }, [loggedUser, navigate]);

  return (
    <main className="h-screen border-2 flex justify-center items-center p-2">
      <section className="border-2 border-neutral-400 w-[500px] p-2 rounded-md shadow-md flex flex-col gap-6">
        <h1 className="text-center text-3xl text-neutral-700">
          Bem vindo {loggedUser?.name} !
        </h1>
        <div className="border-2  w-48 self-center p-1 rounded-md hover:bg-red-400 hover:border-red-400 transition-colors">
          <button onClick={logout} className="w-full" type="submit">
            Logout
          </button>
        </div>
      </section>
    </main>
  );
}

export default Welcome;
