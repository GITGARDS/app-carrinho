import { IconCar } from "@tabler/icons-react";

export const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="bg-blue-600 text-text rounded p-2 hover:bg-blue-500 transition-colors">
        <IconCar size={35} />
      </div>
      <p>CARRINHO</p>
    </div>
  );
};
