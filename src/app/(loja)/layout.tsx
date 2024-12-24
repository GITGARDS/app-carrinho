import { Pagina } from "@/components/template/Pagina";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <Pagina>
        <div>{props.children}</div>
      </Pagina>
    </>
  );
}
