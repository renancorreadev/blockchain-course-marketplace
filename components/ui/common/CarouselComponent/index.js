import React from 'react'
import Carousel from 'react-elastic-carousel'
import Item from './Item'
import Image from 'next/image'

const breakPoints = [
  { width: 1860, itemsToShow: 1 },
  { width: 1860, itemsToShow: 2 },
]

export default function CarouselComponent() {
  return (
    <Carousel breakPoints={breakPoints}>
      <Item>
        <Image src="/banner.png" width="1860" height="383" />
      </Item>
      <Item>
        <Image src="/banner.png" width="1860" height="383" />
      </Item>
    </Carousel>
  )
}
