// este componente lo aprendi en midudev :D
import { useState } from 'react'
import confetti from 'canvas-confetti'
import './TwitterFollowCard.css'

export function TwitterFollowCard ({ id, username, name, initialIsFollowing, review }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'pach-followcard-button is-following' : 'pach-followcard-button'
  function handleClick (id) {
    if (isFollowing === false) {
      const canvas = document.getElementById(id)
      const myConfetti = confetti.create(canvas, {
        resize: true
      })

      myConfetti({
        spread: 70,
        origin: {
          y: 1
        }
      })
    }
    setIsFollowing(isFollowing === false)
  }
  return (
    <div className='position-relative'>
      <div className='text-center textcustomer'>
        <img
          className='pach-followcard-avatar w-100 p-5'
          alt={username}
          src={`https://unavatar.io/${username}`}
          loading='lazy'
        />
        <h2 className='pt-5'>{name}</h2>
        <span className='pach-followcard-user'>@{username}</span>
        <p className='mt-2'>{review}
        </p>
        <button className={buttonClassName} onClick={() => handleClick(id)}>
          <span className='pach-followcard-seguir'>{text}</span>
          <span className='pach-followcard-dejarseguir'>
            Dejar de seguir 😥
          </span>
        </button>

      </div>
      <canvas id={id} className='custom-canvas-twitter' />
    </div>
  )
}
