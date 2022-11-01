import {
  FcBusinessman,
  FcBusinesswoman,
  FcAssistant,
  FcOnlineSupport,
  FcSelfie,
  FcPortraitMode
} from "react-icons/fc";

const BusinessMan = <FcBusinessman size={60} />;
const BusinessWoman = <FcBusinesswoman size={60} />;
const AssistantMan = <FcAssistant size={60} />;
const AssistantWoman = <FcOnlineSupport size={60} />;
const SelfieWoman = <FcSelfie size={60} />;
const PortraitModeMan = <FcPortraitMode size={60} />;

const icons = [
  BusinessMan,
  BusinessWoman,
  AssistantMan,
  AssistantWoman,
  SelfieWoman,
  PortraitModeMan
];

export const randomIcon = (index: number): JSX.Element => {
  return (
    icons[index]
  )
};
