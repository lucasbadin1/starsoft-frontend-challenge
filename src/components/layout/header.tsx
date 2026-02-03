import CartIcon from "@/components/ui/header/cart-icon";
import Logo from "@/components/ui/header/logo";

export default function Header() {
  return (
    <header className="header-container">
      <Logo />
      <CartIcon />
    </header>
  );
}
