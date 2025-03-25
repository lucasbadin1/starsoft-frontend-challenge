import CartIcon from "../ui/header/cart-icon";
import Logo from "../ui/header/logo";

export default function Header() {
  return (
    <header className="header-container">
      <Logo />
      <CartIcon />
    </header>
  );
}
