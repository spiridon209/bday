import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import styles from './Flashcard.module.scss'

export default function Flashcard({ card, onSwipeLeft, onSwipeRight, swipeDir = null }) {
  const [flipped, setFlipped] = useState(false)

  const handlers = useSwipeable({
    onSwipedLeft: () => onSwipeLeft && onSwipeLeft(),
    onSwipedRight: () => onSwipeRight && onSwipeRight(),
    trackMouse: true,
    preventScrollOnSwipe: true,
  })

  const swipeClass = swipeDir === 'left' ? styles.swipeLeft : swipeDir === 'right' ? styles.swipeRight : ''

  return (
    <div
      {...handlers}
      className={`${styles.card} ${swipeClass}`}
      onClick={() => setFlipped((f) => !f)}
      role="button"
      aria-pressed={flipped}
    >
      <div className={`${styles.cardInner} ${flipped ? styles.isFlipped : ''}`}>
        <div className={`${styles.cardFace} ${styles.cardFront}`}>
          <div className={styles.word}>{card.word}</div>
          <div className={styles.ipa}>[{card.ipa}]</div>
        </div>
        <div className={`${styles.cardFace} ${styles.cardBack}`}>
          <div className={styles.translation}>{card.translation}</div>
        </div>
      </div>
    </div>
  )
}

