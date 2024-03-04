import { FC } from "react";

const Header: FC = () => {
  // header is fixed at the top of the screen
  // z-40 is to make sure it's on top of everything
  // bg from transparent to gray
  // font is jetbrains mono
  return (
    <header className="absolute top-0 z-40 w-full h-24 backdrop-blur-md bg-gradient-to-t from-transparent to-gray-300/20 flex items-center justify-center flex-col">
      <h2 className="uppercase font-mono mx-auto text-2xl tracking-wider font-extrabold">
        Carte Girons
      </h2>
      <p>FR/VD - 2024</p>
    </header>
  );
};

export default Header;
