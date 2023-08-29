import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useDispatch } from 'react-redux'
import { logIn } from '../redux/reducers/loginStatus'
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors
  } = useForm({mode:"onChange"});
  const onSubmit = (data) => reset();

  const dispatch = useDispatch()
  const navigate=useNavigate()

  return (
    <>
      <div className="flex flex-col justify-center h-full" onMouseDown={()=>clearErrors()}>
        <div className="w-[400px] h-[400px] py-5 mx-auto ">
          <div className="flex flex-col items-center justify-center gap-5 border-[2px] p-10">
            <div>
              <svg width={40} height={40} className="scale-125">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </div>
            <div className="font-bold text-2xl">Sign in to X</div>
            <form
              className="flex flex-col gap-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                placeholder="Kullanıcı Adı"
                className="border-[1px] p-2"
                {...register("username", {
                  required: "This is required.",
                  maxLength: {
                    value: 10,
                    message: "Kullanıcı Adı 10 karakterden fazla olamaz.",
                  },
                  minLength: {
                    value: 4,
                    message: "Kullanıcı Adı 4 karakterden az olamaz.",
                  },
                })}
              />
              <div className="text-red-600 font-semibold">
                <ErrorMessage errors={errors} name="username" />
              </div>
              <input
                placeholder="Şifre"
                type="password"
                className="border-[1px] p-2"
                {...register("password", {
                  required: "This is required.",
                  maxLength: {
                    value: 10,
                    message: "Şifre 10 karakterden fazla olamaz.",
                  },
                  minLength: {
                    value: 4,
                    message: "Şifre 4 karakterden az olamaz.",
                  },
                })}
              />
              <div className="text-red-600 font-semibold">
                <ErrorMessage errors={errors} name="password" />
              </div>
              <button 
                className="cursor-pointer bg-black text-white font-bold border-[2px] rounded-full px-10 py-1 w-[250px] hover:bg-slate-900"
                type="submit"
                onClick={()=>{dispatch(logIn()),navigate("/")}}
              >İlerle</button>
              <button className="text-black bg-white font-bold border-[2px] rounded-full px-10 py-1 w-[250px] hover:bg-slate-100">
                Şifremi unuttum
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
