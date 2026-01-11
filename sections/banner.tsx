import { WorldMapComp } from '@/components/WorldMap'
import React from 'react'

const BannerSection = () => {
  return (
      <section className='h-screen md:max-h-[80vh]'>
          <div>
              <WorldMapComp/>
          </div>
      </section>
  )
}

export default BannerSection