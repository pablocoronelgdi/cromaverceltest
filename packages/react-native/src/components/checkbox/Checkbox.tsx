import styled from "styled-components/native";
import { Color, Shapes, Spacings } from "@cromaui/foundations";
import { Icon } from "../icon";

const CheckboxContainer = styled.Pressable`
  background-color: ${Color.Navy.extraSoft};
  padding: ${Spacings.space8};
  border-radius: ${Shapes.full};

`;

const CheckboxBorder = styled.View`
  background-color: ${Color.Blue.main};
  border-radius: 100px;
`;

const CheckboxIcon = styled(Icon)`
  color: ${Color.Neutral[50]};
  background-color: ${Color.Navy.main};
`;

const Checkbox = () => {
  return (
    <CheckboxContainer>
      <CheckboxBorder>
        <CheckboxIcon size="medium" name="check"></CheckboxIcon>
      </CheckboxBorder>
    </CheckboxContainer>
  );
};

export default Checkbox;
