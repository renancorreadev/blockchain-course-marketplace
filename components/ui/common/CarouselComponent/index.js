import React from 'react'
import Carousel from 'react-elastic-carousel'
import Image from 'next/image'
import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
`

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
