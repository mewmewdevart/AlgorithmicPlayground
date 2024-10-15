import logo from "../assets/paint (1).png";
// import "./Header.css";

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-16 bg-white">
      <img src={logo} alt="A canvas" className="w-[200px]" />
      <h1 className="text-3xl font-black">ReactArt</h1>
      <p className="text-2xl">A community of artists and art-lovers.</p>
    </header>
  );
}
