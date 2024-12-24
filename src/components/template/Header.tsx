import { Logo } from "./Logo";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header className="flex gap-2 items-center justify-between bg-white text-black text-text-nav p-6 font-semibold text-[20px]">
      <Logo/>
      <Nav />
      <h1>Carrinho</h1>
    </header>
  );
};
