import { useState } from "react"


export const useLoadMore = (initialCount = 16) => {
    const [visibleCount, setVisibleCount] = useState(initialCount)
    const [isLoading, setIsLoading] = useState(false)
  
    const loadMore = () => {
      setIsLoading(true)
      setTimeout(() => {
        setVisibleCount(prevCount => prevCount + 16)
        setIsLoading(false)
      }, 800)
    }
  
    return { visibleCount, isLoading, loadMore }
  }
  