import { Theme } from "@radix-ui/themes";
import IconsComponent from "./components/atoms/icons.tsx";

export function App() {
  let typeOfIcon: string = "dashboard";

  return (
    <Theme>
      <h1>Olá</h1>
      <IconsComponent typeOfIcon={typeOfIcon}/> 
    </Theme>
  );
}
