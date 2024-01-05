import { useState } from "react";
import styled from "styled-components/native";
import { Icon } from "../icon";
import { PressableProps } from "react-native";
import * as SwitchStyles from "./styles";

type SwitchProps = {
  disabled?: boolean;
  onPress?: any;
  value: boolean;
} & PressableProps;

type SwitchAreaProps = {
  disabled: boolean;
  checked: boolean;
  pressed?: boolean;
};

const SwitchContainer = styled.Pressable`
  padding: 2px 4px;
`;
const SwitchBackground = styled.View<SwitchAreaProps>`
  ${(props: SwitchAreaProps) => SwitchStyles.switchBackground(props)}
`;
const SwitchAura = styled.View<SwitchAreaProps>`
  ${(props: SwitchAreaProps) => SwitchStyles.switchAura(props)}
`;
const SwitchThumb = styled.View<SwitchAreaProps>`
  ${(props: SwitchAreaProps) => SwitchStyles.swtichThumb(props)}
`;

const SwitchIcon = ({
  onPress,
  onFocus,
  onBlur,
  disabled = false,
  value,
}: SwitchProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const [pressed, setpressed] = useState(false);

  const handleOnFocus = () => {
    setIsFocus(true);
    isFocus && onFocus;
  };
  const handleOnBlur = () => {
    setIsFocus(false);
    onBlur;
  };
  return (
    <SwitchContainer
      onPressIn={() => setpressed(true)}
      onPressOut={() => setpressed(false)}
      onPress={!disabled ? onPress : null}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    >
      <SwitchBackground checked={value} disabled={disabled}>
        <SwitchAura pressed={pressed} checked={value} disabled={disabled}>
          <SwitchThumb pressed={pressed} checked={value} disabled={disabled}>
            {value && (
              <Icon
                name={"check"}
                color={disabled ? "neutral" : "primary"}
                size="small"
              />
            )}
          </SwitchThumb>
        </SwitchAura>
      </SwitchBackground>
    </SwitchContainer>
  );
};

export default SwitchIcon;
