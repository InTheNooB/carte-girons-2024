import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="absolute top-0 z-40 w-full h-24 bg-primary flex items-center justify-center flex-col">
      <h2 className="uppercase mx-auto text-3xl tracking-wider font-extrabold">
        Carte Girons
      </h2>
      <p>FR/VD - 2024</p>
    </header>
  );
};

export default Header;
