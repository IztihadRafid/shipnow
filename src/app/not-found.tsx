import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Patterns.png";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-5 text-center px-4">
      <Image src={logo} alt="ShipNow logo" width={100} height={100} />
      <h1 className="text-[34px] font-bold text-gray-1">
         Page Under Construction
      </h1>

      <p className="text-sm text-gray-2">
        We`re currently building this page to bring you a better experience. <br /> Please check back soon. Thank you for your patience!
      </p>

      <Link
        href="/dashboard"
        className="mt-2 rounded-lg bg-gray-1 px-5 py-2.5 text-[12px] font-semibold text-gray-3"
      >
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;