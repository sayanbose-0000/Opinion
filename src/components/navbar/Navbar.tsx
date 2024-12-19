import Link from "next/link";
import { PlusCircle, Settings } from "react-feather";
import DarkMode from "./DarkMode";

const Navbar: React.FC = () => {
  return (
  <header className="flex flex-row justify-between items-center p-4 pb-2 sticky top-0 left-0 backdrop-blur-sm">
      <Link href={"/"} className="text-2xl font-bold">Opinion</Link>
      <nav className="flex flex-row justify-center items-center gap-3">
        <DarkMode />
        <Link href={"/create"}><PlusCircle /></Link>
        <Link href={"/"}><Settings /></Link>
      </nav>
    </header>
  );
};

export default Navbar;