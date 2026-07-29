"use client";
import Image from "next/image";
import logo1 from "../../public/logo1.png";
import logo from "../../public/logo.png";
import image1 from "../../public/image1.jpg";
import image2 from "../../public/image2.jpg";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
export default function Home() {
  // hooks
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // password validation
    if (!password || password.length < 8) {
      setErrors({password: "Password must be at least 8 characters",});
      return;
    }
    setErrors({});
    localStorage.setItem("user", "loggedIn");
    router.push("/dashboard");  //redirect to dashboard after login
  };

  return (
    <div className="flex xl:w-[1440px] bg-gray-3 mx-auto xl:flex-row flex-col ">
      {/* left content */}
      <section className="bg-purple-1 xl:w-1/2 flex flex-col h-[844px] md:min-h-[1024px] items-center justify-center gap-4 ">
        <div className="flex flex-row  items-center justify-center gap-4">
          <Image
            src={logo1}
            alt="ShipNow logo"
            className="w-[46px] h-[46px]"
            width={200}
            height={300}
          />
          <h1 className="text-[34.43px] text-gray-3 font-black italic uppercase">
            SHIPNOW
          </h1>
        </div>

        <div className="relative flex flex-col items-center justify-center gap-4 md:w-[553.5px] w-[326px] md:h-124.75 h-[328px]">
          <Image
            src={image1}
            alt="ShipNow1"
            className="md:w-[178.46px] w-[105px] md:h-57 h-[135px] rounded-lg object-fit absolute top-0 right-0 z-20"
          />
          <Image
            src={image2}
            alt="ShipNow2"
            className=" top-0 right-0 md:w-102.5 w-[243px] h-[229px] md:h-96.5 z-10 rounded-lg object-cover"
          />
        </div>

        <div className="  md:w-[487px] w-[326px]  text-center text-gray-3 flex flex-col items-center justify-center gap-4">
          <h2 className="text-[40px] font-extrabold ">Welcome to ShipNow</h2>
          <p className="font-normal text-[16px]">
            Manage your shipments, fleet, and warehouse in one smart dashboard.
          </p>
        </div>
      </section>

      {/* right content */}
      <section className="bg-gray-3 xl:w-1/2 h-[844px] md:min-h-[1024px] flex flex-col items-center justify-center pt-[32px] pb-[64px] px-[32px] md:pt-[120px] md:px-[160px] md:pb-[200px] gap-4">
        <div className="flex flex-col items-center justify-center gap-4 ">
          <Image src={logo} alt="ShipNow logo" className="w-10 h-10" />
          <div className=" gap-2 flex flex-col items-center justify-center">
            <h3 className="text-gray-1 font-bold text-2xl">Welcome Back</h3>
            <p className="font-normal text-[14px] text-gray-2">
              Log in to continue managing your logistics with ShipNow
            </p>
          </div>
        </div>

        {/* login form */}
        <form className="w-full" onSubmit={handleLogin}>
          <div className="mb-1.5">
            {/* Email */}
            <label className="text-[11px]">Email Address</label>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter a valid email address"
              className="bg-gray-100 text-gray-1 text-[12px] w-full px-3 py-2 rounded-lg"
            />
          </div>
          {/* password */}
          <div className="mb-1.5">
            <label className="text-[11px]">Password</label>
            <div className="relative">
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Create a strong password"
                className="bg-gray-100 text-gray-1 text-[12px] w-full px-3 py-2 pr-10 rounded-lg"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-2"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {/* error message */}
            {errors?.password && (
              <p className="text-red-500 text-sm mt-1">{errors?.password}</p>
            )}
          </div>
          <div className="flex flex-row items-center justify-between mb-8">
            <div>
              {" "}
              <input
                type="checkbox"
                name="remember"
                value="Remember me"
                className="accent-purple-1 mr-1 text-[11px]"
              ></input>
              <label className="text-[11px]">Remember me</label>
              <br></br>
            </div>
            <div>
              <Link
                href="/forgotpassword"
                className="text-purple-1 text-[11px] p-0.5"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
          <button
            className="bg-gray-1 text-gray-3 text-[16px] w-full px-4.5 py-3 rounded-lg mb-4"
            type="submit"
          >
            Login
          </button>

          <div className="text-center">
            <p className="text-gray-2 text-[12px]">
              Don`t have an account?{" "}
              <Link href="/signup" className="text-purple-1 p-0.5">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}
