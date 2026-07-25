
// import Footer from "@/components/layout/Footer";

import Sidebar from "@/components/Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 w-[1217px]">
        <main className="flex-1">{children}</main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}