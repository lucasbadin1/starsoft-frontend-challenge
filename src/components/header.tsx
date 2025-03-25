import CartIcon from "./Header/cart-icon";
import Logo from "./Header/logo";

export default function Header() {
  return (
    <header className="header-container">
      <Logo />
      <CartIcon />
    </header>
  );
}
