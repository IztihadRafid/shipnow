import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex  justify-between items-center min-h-screen ">
      <div className=" md:flex w-0  xl:w-[223px]">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1 md:w-[1217px]">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}