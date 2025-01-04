import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "@/hooks/usePlateforms";

interface Props {
  platforms: Platform[];
}
export default function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: React.ElementType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <div className="w-full flex items-center gap-1 flex-wrap">
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug];
        return IconComponent ? (
          <IconComponent key={platform.id} color="#4A5568" size="18px" />
        ) : null;
      })}
    </div>
  );
}
