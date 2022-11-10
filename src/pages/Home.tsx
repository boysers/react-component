import React from 'react'
import { JacketItem } from '@/components/JacketItem'
import bannerAlbum1 from '@/assets/bannerAlbum1.png'
import bannerSong from '@/assets/bannerSong.png'
import Frame_42 from '@/assets/Frame_42.png'
import { SongItem } from '@/components/SongItem'
import { BuySongItem } from '@/components/BuySongItem'

export const Home: React.FC = () => {
  const title = 'Song Title'

  const onHandleClick = () => {
    alert('click btn')
  }

  return (
    <div style={{ margin: 15, width: '400px' }}>
      <JacketItem
        title={title}
        image={bannerAlbum1}
        price="50 TEO"
        listeningRate="+25%"
        onClick={onHandleClick}
        style={{ margin: '10px' }}
      />
      <SongItem
        title={title}
        image={bannerSong}
        style={{ margin: '10px' }}
        listeningRate="+25%"
        isTrending={true}
        streaming={200}
      />
      <SongItem
        title={title}
        image={bannerSong}
        style={{ margin: '10px' }}
        listeningRate="-25%"
        isTrending={false}
        streaming={200}
      />
      <BuySongItem
        title={title}
        image={Frame_42}
        style={{ margin: '10px' }}
        token={50}
        duration={25}
      />
    </div>
  )
}
