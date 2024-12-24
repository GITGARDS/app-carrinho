import { Header } from "./Header";

interface IPaginaProps {
  children: React.ReactNode;
}
export const Pagina = (props: IPaginaProps) => {
  return (
    <div>
      <Header />
      <main>
        {props.children}
      </main>
    </div>
  );
};
