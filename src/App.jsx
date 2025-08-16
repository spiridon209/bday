import React, { useCallback, useMemo, useState } from 'react'
import Flashcard from './components/Flashcard.jsx'
import styles from './App.module.scss'

const DATA = [
  { word: 'Amor', ipa: 'а-мóр', translation: 'любовь' },
  { word: 'Negro', ipa: 'нé-гро', translation: 'чёрный' },
  { word: 'Escuela', ipa: 'эс-куé-ла', translation: 'школа' },
  { word: 'Hola', ipa: 'ó-ла', translation: 'привет' },
  { word: 'Niño', ipa: 'ни́-ньо', translation: 'ребёнок (мальчик)' },
  { word: 'Niña', ipa: 'ни́-ньа', translation: 'ребёнок (девочка)' },
  { word: 'Cucaracha', ipa: 'ку-ка-рá-ча', translation: 'таракан' },
  { word: 'Silla', ipa: 'сí-лья', translation: 'стул' },
  { word: 'Libro', ipa: 'ли́-бро', translation: 'книга' },
  { word: 'Risa', ipa: 'ри́-са', translation: 'смех' },
  { word: 'Día', ipa: 'дí-а', translation: 'день' },
  { word: 'Sombrero', ipa: 'сом-брé-ро', translation: 'шляпа' },
  { word: 'Gato', ipa: 'гá-то', translation: 'кот' },
  { word: 'Pastel', ipa: 'пас-тéль', translation: 'торт' },
  { word: 'Mar', ipa: 'мар', translation: 'море' },
  { word: 'Sol', ipa: 'соль', translation: 'солнце' },
  { word: 'Familia', ipa: 'фа-мí-лья', translation: 'семья' },
  { word: 'Cactus', ipa: 'кáк-тус', translation: 'кактус' },
  { word: 'Flor', ipa: 'флор', translation: 'цветок' },
  { word: 'Burro', ipa: 'бý-рро', translation: 'осёл' },
  { word: 'Agua', ipa: 'á-гуа', translation: 'вода' },
  { word: 'Fiesta', ipa: 'фьéс-та', translation: 'праздник' },
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
      <div className={styles.counter}>
        {(index % DATA.length) + 1} / {DATA.length}
      </div>
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
