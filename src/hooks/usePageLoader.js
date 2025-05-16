import { useEffect, useState } from 'react'

const usePageLoader = (pathname) => {
  const [isLoading, setIsLoading] = useState(true)
  const [firstLoading, setFirstLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const [speed, setSpeed] = useState(1000)

  useEffect(() => {
    setIsLoading(true)
    setFadeOut(false)

    const fadeTimer = setTimeout(() => setFadeOut(true), speed - 100)
    const hideTimer = setTimeout(() => {
      setIsLoading(false)
      setFirstLoading(false)
      setSpeed(400)
    }, speed)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [pathname])

  return { isLoading, firstLoading, fadeOut }
}

export default usePageLoader
