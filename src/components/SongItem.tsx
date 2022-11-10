import React from 'react'
import up from '@/assets/up.png'
import down from '@/assets/down.png'

type SongItemProps = {
  title: string
  listeningRate: string
  listener: number
  image: string
  isTrending: boolean
  style?: React.CSSProperties
}

export const SongItem: React.FC<SongItemProps> = ({
  title,
  listeningRate,
  image,
  listener,
  isTrending,
  style
}) => {
  return (
    <div
      style={{
        display: 'flex',
        color: '#f0f0f0',
        backgroundColor: '#2d293c',
        padding: '12px',
        borderRadius: '12px',
        alignItems: 'center',
        ...style
      }}
    >
      <img src={image} alt={title} style={{ height: '100%' }} />
      <div
        style={{
          paddingLeft: '8px',
          flex: 1
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
          <p style={{ margin: '4px 0' }}>
            {isTrending ? (
              <>
                <img
                  src={up}
                  alt="listeningRate"
                  style={{ paddingRight: '3px' }}
                />
                <span style={{ color: '#00ff5a', fontWeight: 500 }}>
                  {listeningRate}
                </span>
              </>
            ) : (
              <>
                <img
                  src={down}
                  alt="listeningRate"
                  style={{ paddingRight: '3px' }}
                />
                <span style={{ color: '#ff0000', fontWeight: 500 }}>
                  {listeningRate}
                </span>
              </>
            )}
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          <p style={{ margin: '4px 0' }}>Nombre d&apos;écoute : {listener}</p>
          <p style={{ margin: '4px 0' }}>
            <span style={{ fontWeight: 700 }}>+1</span> dans 25min
          </p>
        </div>
      </div>
    </div>
  )
}
