import React from 'react'
import tokenYellow from '@/assets/token-yellow.png'

type BuySongItemProps = {
  title: string
  token: number
  duration: number
  image: string
  style?: React.CSSProperties
}

export const BuySongItem: React.FC<BuySongItemProps> = ({
  title,
  image,
  token,
  duration,
  style
}) => {
  return (
    <div
      style={{
        display: 'flex',
        color: '#f0f0f0',
        backgroundColor: '#2d293c',
        maxWidth: '350px',
        maxHeight: '100px',
        alignItems: 'center',
        ...style
      }}
    >
      <img src={image} alt={title} style={{ height: '100%' }} />
      <div
        style={{
          flex: 1,
          padding: '0 6px',
          borderBottom: '1px solid #fff'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          <h5 style={{ margin: 0, fontSize: '1.1rem' }}>{title}</h5>
          <p style={{ margin: '4px 0', display: 'flex', alignItems: 'center' }}>
            <img
              src={tokenYellow}
              alt="listeningRate"
              style={{ paddingRight: '3px' }}
            />
            <span style={{ fontWeight: 500 }}>{token}</span>
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            fontSize: '0.9rem',
            color: '#c7c7c7'
          }}
        >
          <p style={{ margin: '4px 0' }}>
            Session : {duration} min sur Spotify
          </p>
          <p style={{ margin: '4px 0' }}>
            <span style={{ fontWeight: 700, color: '#f0f0f0' }}>+1</span> (5min)
          </p>
        </div>
      </div>
    </div>
  )
}
