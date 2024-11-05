import { HStack, Text } from "@chakra-ui/react";
import { Switch } from "@/components/ui/switch";
import { useColorMode } from "./ui/color-mode";

export default function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Text>Dark Mode</Text>
      <Switch
        colorPalette="blue"
        checked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </HStack>
  );
}
