import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/Logo.png"
      width={100}
      height={40}
      alt="Logotipo da Starsoft com fonte arredondada e tom dourado sobre fundo escuro"
      className="cursor-pointer"
    />
  );
}
