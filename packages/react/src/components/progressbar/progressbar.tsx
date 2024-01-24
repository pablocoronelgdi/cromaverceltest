import React, { useState, useEffect } from 'react'
import type { ProgressBarPropsTypes } from './types'
import { Container, ContainerProgress, ProgressFill } from './styles'

const ProgressBar: React.FC<ProgressBarPropsTypes> = ({ duration, label }) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const progressId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + (100 / duration);
        } else {
          clearInterval(progressId);
          return 100;
        }
      });
    }, duration / 100);

    return () => clearInterval(progressId);
  }, [duration]);

  return (
    <Container>
        <ContainerProgress>
            <ProgressFill width={progress} duration={duration} />
        </ContainerProgress>
       {label && <p>{label}</p>}
    </Container>
  );
};

export default ProgressBar;
