import { useState } from 'react'
import './App.css'
import github from './assets/github2.png'
import islamic from './assets/islam.png'
import reset from './assets/reset.png'
import moon from './assets/moon2.svg'

function App() {
  const [count, setCount] = useState(0)
  const [isEditing, setIsEditing] = useState(false)
  const [tempValue, setTempValue] = useState(count)

  function counter() {
    setCount(count + 1)
  }

  function handleEdit() {
    setTempValue(count) 
    setIsEditing(true)
  }

  function handleSave() {
    setCount(Number(tempValue) || 0) 
    setIsEditing(false)
  }

  return (
    <main className="relative min-h-screen bg-green-950 text-white overflow-hidden">
      {/* radial bg */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,120,80,1)_0%,rgba(5,46,22,1)_80%)] z-0"></div> 

      <div className="relative z-10">
        {/* header */}
        <header className="max-w-[1200px] flex justify-between items-center py-8 mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3">
            <img src={islamic} className="w-[36px] sm:w-[40px]" alt="" />
            <a className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold" href="!">E Tasbih</a>
          </div>
          <nav className="flex gap-4">
            <a href="https://github.com/F-Eldor"><img src={github} className="w-8 sm:w-9 md:w-10" alt="github" /></a>
          </nav>
        </header>
        
        <section className="mx-auto max-w-[1200px] flex flex-col items-center justify-between ">
          
          {isEditing ? (
            <input
              type="number"
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              onBlur={handleSave}
              onKeyDown={(e) => e.key === "Enter" && handleSave()}
              className="text-[60px] sm:border-none sm:text-[90px] md:text-[110px] lg:text-[130px] font-semibold text-center bg-transparent "
              autoFocus
            />
          ) : (
            <div className="flex items-center gap-4">
              <span className="text-[60px] sm:text-[90px] md:text-[110px] lg:text-[130px] font-semibold">{count}</span>
              <button 
                onClick={handleEdit} 
                className="px-3 py-1 border rounded text-sm sm:text-base active:scale-95 transition-all"
              >
                Edit
              </button>
            </div>
          )}

          <div className="relative gap-10 flex lg:gap-80 md:gap-40 sm:gap-12 mt-6 sm:mt-10">
            <button 
              onClick={() => setCount(count > 0 ? count - 1 : 0)} 
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 rounded-full flex items-center justify-center transition-all duration-200 ease-out active:scale-95 active:bg-green-800"
            > 
              <span className="w-6 h-1.5 sm:w-7 sm:h-2 rounded bg-white"></span>
            </button>
            <button 
              onClick={() => setCount(0)} 
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 rounded-full flex items-center justify-center transition-all duration-200 ease-out active:scale-95 active:bg-green-800"
            > 
              <img src={reset} alt="reset" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </button>
          </div>

          <button 
            onClick={counter} 
            className="relative w-36 h-36 mt-15 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 border-2 rounded-full flex items-center justify-center transition-all duration-200 ease-out active:scale-95 active:bg-green-800"
            ><img src={moon} alt="moon" className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 pointer-events-none"/>
          </button>

        </section>
      </div>
    </main>
  )
}

export default App
