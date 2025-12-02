import {
    ChefHatIcon,
    HouseIcon,
    InfoIcon,
    IconProps
} from "phosphor-react-native";


export const HomeIcon = (props: any) => {
    return <HouseIcon size={24} color="#fff" {...props} />;
}

export const AboutIcon = (props: any) => {
    return <InfoIcon size={24} color="#fff" {...props} />;
}
export const  Logo = (props: IconProps) => {
  return <ChefHatIcon size={24} color="#fff" {...props} />
}

