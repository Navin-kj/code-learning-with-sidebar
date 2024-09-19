import { IoHomeOutline } from "react-icons/io5";
import { RiIncreaseDecreaseLine } from "react-icons/ri";
import { TfiImport } from "react-icons/tfi";

export const sideBarData = [
  { name: "Home", link: "/", icon: <IoHomeOutline /> },
  {
    name: "Auto Counter",
    link: "/autoCounter",
    icon: <RiIncreaseDecreaseLine />,
  },
  { name: "Auto Input", link: "/autoInput", icon: <TfiImport /> },
];
