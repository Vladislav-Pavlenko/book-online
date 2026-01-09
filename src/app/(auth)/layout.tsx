import Header from '@(auth)/components/Header/Header';
import Image from 'next/image';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Image
        className=" absolute top-0 w-full h-screen -z-[1] max-[425px]:hidden"
        src="/img/background.png"
        alt="background image"
        width="2100"
        height="1177"
      />
      <Image
        className="hidden absolute top-0  h-screen -z-[1] max-[425px]:block"
        src="/img/background-mob.png"
        alt="background image"
        width="2100"
        height="1177"
      />
    </>
  );
}
