import React from "react";
import { SpinnerPropTypes } from "./types";
import { SpinnerContainerStyled } from "./styles";

const Spinner: React.FC<SpinnerPropTypes> = ({ withLogo, label }) => {
  return (
    <SpinnerContainerStyled withLogo={withLogo}>
      <div>
        {withLogo && (
          <div>
            <div />
          </div>
        )}
      </div>
      {label && <span>{label}</span>}
    </SpinnerContainerStyled>
  );
};

export default Spinner;
