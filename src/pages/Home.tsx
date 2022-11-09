import React from 'react'
import { JacketItem } from '@/components/JacketItem'
import bannerAlbum1 from '@/assets/bannerAlbum1.png'
import bannerSong from '@/assets/bannerSong.png'
import Frame_42 from '@/assets/Frame_42.png'
import { SongItem } from '@/components/SongItem'
import { BuySongItem } from '@/components/BuySongItem'

export const Home: React.FC = () => {
  const onHandleClick = () => {
    alert('teoria')
  }

  return (
    <div style={{ margin: 15 }}>
      <JacketItem
        title="Teoria"
        image={bannerAlbum1}
        price="50 TEO"
        listeningRate="+25%"
        onClick={onHandleClick}
        style={{ margin: '10px' }}
      />
      <SongItem
        title="Teoria"
        image={bannerSong}
        style={{ margin: '10px' }}
        listeningRate="+25%"
        streaming={200}
      />
      <BuySongItem
        title="Teoria"
        image={Frame_42}
        style={{ margin: '10px' }}
        token={50}
        duration={25}
      />
    </div>
  )
}
