import themes from "@/lib/data/config/themes";
import ThemeSwitcher from "./ThemeSwitcher";

type Props = {};

function ConfigComponent({}: Props) {
  return (
    <div>
      <ThemeSwitcher />
    </div>
  );
}

export default ConfigComponent;
