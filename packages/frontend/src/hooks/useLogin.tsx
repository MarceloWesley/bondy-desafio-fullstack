import { LoginProps } from "../types/auth";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutations";
import { useLocalStorage } from "usehooks-ts";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useLogin() {
  const [signIn, { loading }] = useMutation(LOGIN);
  const [, setValue, removeValue] = useLocalStorage("user-token", "");

  const navigate = useNavigate();

  const login = async (formData: LoginProps) => {
    try {
      const {
        data: {
          signIn: { token },
        },
      } = await signIn({
        variables: { email: formData.email, password: formData.password },
      });

      if (token) {
        setValue(token);
        navigate("/welcome");
      }
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-right",
      });
    }
  };

  const logout = async () => {
    removeValue();
  };

  return { login, loading, logout };
}
