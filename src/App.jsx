import React, { useCallback, useMemo, useState } from 'react'
import Flashcard from './components/Flashcard.jsx'
import styles from './App.module.scss'

const DATA = [
  { word: 'apple', ipa: 'ˈæp.əl', translation: 'яблоко' },
  { word: 'book', ipa: 'bʊk', translation: 'книга' },
  { word: 'river', ipa: 'ˈrɪv.ər', translation: 'река' },
  { word: 'sun', ipa: 'sʌn', translation: 'солнце' },
]

function App() {
  const [index, setIndex] = useState(0)
  const [swipeDir, setSwipeDir] = useState(null) // 'left' | 'right' | null
  const card = useMemo(() => DATA[index % DATA.length], [index])

  const nextCard = useCallback((dir) => {
    setSwipeDir(dir)
    setTimeout(() => {
      setSwipeDir(null)
      setIndex((i) => (i + 1) % DATA.length)
    }, 280)
  }, [])

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Flashcards</h1>
      <div className={styles.deck}>
        <Flashcard
          key={index}
          card={card}
          swipeDir={swipeDir}
          onSwipeLeft={() => nextCard('left')}
          onSwipeRight={() => nextCard('right')}
        />
      </div>
      <div className={styles.hint}>
        Свайпните влево/вправо, нажмите по карточке, чтобы перевернуть
      </div>
    </div>
  )
}

export default App
