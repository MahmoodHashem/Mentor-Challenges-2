import { useState } from 'react'

export const useKeyboardNavigation = (showSuggestions,setShowSuggestions, suggestions, handleSuggestionClick) => {
    const [selectedIndex, setSelectedIndex] = useState(-1)
  
    const handleKeyDown = (e) => {
      if (!showSuggestions || !suggestions.length) return
  
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex(prev => prev < suggestions.length - 1 ? prev + 1 : prev)
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex(prev => prev > 0 ? prev - 1 : prev)
          break
        case 'Enter':
          if (selectedIndex >= 0) {
            handleSuggestionClick(suggestions[selectedIndex])
            setSelectedIndex(-1)
          }
          break
        case 'Escape':
          setShowSuggestions(false)
          setSelectedIndex(-1)
          break
      }
    }
  
    return { selectedIndex, setSelectedIndex, handleKeyDown }
  }
  