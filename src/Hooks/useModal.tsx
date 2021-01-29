import { useState } from "react";

const useModal = (isOpenDefault: boolean = false) => {
  const [isVisible, setIsVisible] = useState<boolean>(isOpenDefault);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  return {
    isVisible,
    show,
    hide,
  };
};

export default useModal;
