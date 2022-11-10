import React from 'react'
import up from '@/assets/up.png'
import down from '@/assets/down.png'

type JacketItemProps = {
  title: string
  listeningRate: string
  price: string
  image: string
  isTrending: boolean
  onClick?: () => void
  style?: React.CSSProperties
}

export const JacketItem: React.FC<JacketItemProps> = ({
  title,
  listeningRate,
  price,
  isTrending,
  image,
  onClick,
  style
}) => {
  return (
    <div
      style={{
        display: 'flex',
        color: '#f0f0f0',
        backgroundColor: '#23262b',
        padding: '16px',
        borderRadius: '6px',
        ...style
      }}
    >
      <img src={image} alt={title} />
      <div
        style={{
          paddingLeft: '16px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}
      >
        <h4 style={{ margin: 0, fontSize: '1.25rem' }}>{title}</h4>
        <p style={{ margin: '4px 0' }}>
          Taux d&apos;écoute :{' '}
          <img
            src={isTrending ? up : down}
            alt="listeningRate"
            style={{ paddingRight: '3px' }}
          />
          <span
            style={{
              color: isTrending ? '#00ff5a' : '#ff0000',
              fontWeight: 500
            }}
          >
            {listeningRate}
          </span>
        </p>
        <p style={{ margin: '4px 0' }}>Prix de l&apos;album : {price}</p>
        <button
          style={{
            borderRadius: '12px',
            border: 'none',
            cursor: 'pointer',
            flex: 1,
            fontSize: '1.1rem',
            fontWeight: 500,
            width: '100%'
          }}
          onClick={onClick}
        >
          Acheter l&apos;album
        </button>
      </div>
    </div>
  )
}
