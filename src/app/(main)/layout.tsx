import Sidebar from '@(main)/components/Sidebar/Sidebar';
import Header from '@(main)/components/Header/Header';
import Footer from '@(main)/components/Footer/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />
      <div className="d-flex flex-column w-full">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
