"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { LoginProps } from "../types/auth";
import { useLogin } from "../hooks";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/auth";
import { Loading } from "../components";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUsersSchema } from "../schemas/login-user.schema";

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    resolver: zodResolver(loginUsersSchema),
  });
  const { loggedUser } = useContext(UserContext);
  const { login, loading } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedUser) {
      navigate("/welcome");
    }
  }, [loggedUser, navigate]);

  const onSubmit: SubmitHandler<LoginProps> = async (formData) => {
    login(formData);
  };

  return (
    <main className="h-screen border-2 flex justify-center items-center p-2">
      <section className="border-2 border-neutral-400 w-[500px] p-6 rounded-md shadow-md">
        <h1 className="text-center text-3xl text-neutral-700">Login</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label className="text-neutral-700" htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                type="text"
                className="border-2 rounded-md p-1"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-neutral-700" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="border-2 rounded-md p-1"
                {...register("password")}
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
          </div>
          <div className="border-2 w-full self-center p-1 rounded-md hover:bg-zinc-100">
            <button
              className="w-full flex items-center justify-center p-1 h-8"
              type="submit"
            >
              {loading ? <Loading /> : "SignIn"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default SignIn;
