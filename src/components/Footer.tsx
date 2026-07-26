import Link from "next/link"
import { CiFacebook, CiInstagram, CiLinkedin, CiYoutube } from "react-icons/ci"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className="bg-gray-5 py-4 xl:ml-0 md:md:ml-16  flex justifcy-center items-center md:justify-between md:items-center flex-col md:flex-row gap-2">
     <div className="flex flex-col md:flex-row md:justify-start justify-center items-center w-full px-4 md:gap-8 text-[12px]">
         <p className="font-semibold">Copyright &copy; 2026 Peterdraw</p>
      <div className="flex flex-col gap-2 md:flex-row md:gap-[16px] md:justify-start justify-center  items-center text-gray-2">
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Term and Conditions</Link>
        <Link href="/contact">Contact</Link>
      </div>
     </div>

      <div className="flex gap-3 items-center justify-center md:justify-end w-full px-4">
        <Link href="/facebook" className="w-6 h-6"><CiFacebook /></Link>
        <Link href="/x" className="w-6 h-6"><FaXTwitter /></Link>
        <Link href="/instagram" className="w-6 h-6"><CiInstagram /></Link>
        <Link href="/youtube" className="w-6 h-6"><CiYoutube /></Link >
        <Link href="/linkedin" className="w-6 h-6"><CiLinkedin /></Link>
      </div>
    </div>
  )
}

export default Footer
