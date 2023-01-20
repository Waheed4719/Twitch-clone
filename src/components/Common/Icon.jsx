import * as IconMd from "react-icons/md";
import * as IconFa from "react-icons/fa";
import * as IconSl from "react-icons/sl";
import * as IconBs from "react-icons/bs";

function Icon({ iconGroup, icon, style }) {
  let IconComponent = null;
  if (iconGroup === "md") {
    IconComponent = IconMd[icon];
  }
  if (iconGroup === "fa") {
    IconComponent = IconFa[icon];
  }
  if (iconGroup === "sl") {
    IconComponent = IconSl[icon];
  }
  if (iconGroup === "bs") {
    IconComponent = IconBs[icon];
  }
  return <IconComponent {...style} />;
}

export default Icon;
