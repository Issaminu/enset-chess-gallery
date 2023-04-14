import Image from "next/image";
import logo from "../../public/logo.png";
export default function Logo() {
  return (
    <Image
      className="z-10 mx-auto mt-8"
      src={logo}
      alt="ENSET Chess Championship logo"
      height={280}
    />
  );
}
