import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/reducers/loginStatus";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm({ mode: "onChange" });

  const registerSuccess = () => toast("Kayıt başarılı,giriş yapabilirsin!");
  const registerFailed = (failedCode) => toast(failedCode);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios.defaults.withCredentials = true;

    axios
      .post(
        `${import.meta.env.VITE_API_URL}user/`,
        {
          name: data.name.trim(),
          username: data.username.trim(),
          password: data.password.trim(),
          role: "user",
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status == 201) {
          dispatch(logIn(response.data));
          navigate("/login");
          registerSuccess();
          reset();
        } else {
          reset();
          console.log(response)
          registerFailed("Kayıt başarısız");
        }
      })
      .catch((error) => {
        console.log(error);
        registerFailed("Giriş başarısız");
        reset();
      });
  };

  return (
    <>
      <div
        className="flex flex-col justify-center h-full"
        onMouseDown={() => clearErrors()}
      >
        <div className="w-[400px] h-[400px] py-5 mx-auto ">
          <div className="flex flex-col items-center justify-center gap-5 border-[2px] p-10">
            <div>
              <svg width={40} height={40} className="scale-125">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </div>
            <div className="font-bold text-2xl">Register to X</div>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                placeholder="İsim"
                className="border-[1px] p-2"
                {...register("name", {
                  required: "Bu alan zorunludur.",
                  maxLength: {
                    value: 10,
                    message: "İsim 10 karakterden fazla olamaz.",
                  },
                  minLength: {
                    value: 3,
                    message: "İsim 3 karakterden az olamaz.",
                  },
                })}
              />
              <div className="text-red-600 font-semibold">
                <ErrorMessage errors={errors} name="name" />
              </div>
              <input
                placeholder="Kullanıcı Adı"
                className="border-[1px] p-2"
                {...register("username", {
                  required: "Bu alan zorunludur.",
                  maxLength: {
                    value: 10,
                    message: "Kullanıcı Adı 10 karakterden fazla olamaz.",
                  },
                  minLength: {
                    value: 3,
                    message: "Kullanıcı Adı 3 karakterden az olamaz.",
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
                  required: "Bu alan zorunludur.",
                  maxLength: {
                    value: 10,
                    message: "Şifre 10 karakterden fazla olamaz.",
                  },
                  minLength: {
                    value: 3,
                    message: "Şifre 3 karakterden az olamaz.",
                  },
                })}
              />
              <div className="text-red-600 font-semibold">
                <ErrorMessage errors={errors} name="password" />
              </div>
              <button
                className="cursor-pointer bg-black text-white font-bold border-[2px] rounded-full px-10 py-1 w-[250px] hover:bg-slate-800"
                type="submit"
              >
                Kaydet
              </button>  
              <button
              onClick={()=>navigate("/login")}
                className="cursor-pointer bg-white text-black font-bold border-[2px] rounded-full px-10 py-1 w-[250px] hover:bg-slate-300"
              >
                Geri Dön
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
