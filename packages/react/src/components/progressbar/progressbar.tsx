import React, { useState, useEffect, useId } from 'react'
import type { ProgressBarPropsTypes } from './types'
import { Container, ContainerProgress, ProgressFill } from './styles'

const ProgressBar: React.FC<ProgressBarPropsTypes> = ({ $duration, $label, id }) => {
  const [progress, setProgress] = useState<number>(0)
  const time = $duration
  const percentage = (100 / $duration)
  const defaultId = useId()

  useEffect(() => {
    const progressId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < time) {
          return prevProgress + percentage
        } else {
          clearInterval(progressId)
          return time
        }
      })
    }, percentage)

    return () => { clearInterval(progressId) }
  }, [$duration])

  return (
    <Container id={ id || defaultId}>
        <ContainerProgress>
            <ProgressFill $width={progress} $duration={$duration} />
        </ContainerProgress>
       {$label && <p>{$label}</p>}
    </Container>
  )
}

export default ProgressBar
