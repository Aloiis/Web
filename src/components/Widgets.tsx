import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";

export function Widget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false)

  function toggleWidgetVisibility() {
    setIsWidgetOpen(!isWidgetOpen)
  }

  return (
    <div className='absolute bottom-4 right-4'>
      { isWidgetOpen ? <p>Hello World</p> : null }

      <button onClick={toggleWidgetVisibility} className="bg-brand-500 rounded-full p-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6"/>

        <span className="max-w-0 overflow-hidden hover:max-w-auto group-hover:max-w-xs transition-all duration-300 ease-linear"> 
          <span className="pl-2"></span>
            Feedback
        </span>
      </button>
    </div>
  )
}