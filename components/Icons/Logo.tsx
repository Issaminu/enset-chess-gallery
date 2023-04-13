import Image from "next/image";
import logo from "../../public/logo.png";
export default function Logo() {
  return <Image src={logo} alt="ENSET Chess Championship logo" height={580} />;
}
