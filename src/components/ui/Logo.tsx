import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ImageComp from './Image'
import ImageContainer from '../element/image'

export default function Logo() {
  return (
    <>
      <Link href="/" className="-m-1.5 sm:p-1.5 py-2">
        <ImageContainer
          image="/growlearnhub.png"
          title="Grow Learn Hub"
          height={123}
          width={300}
          priority
          class={''}
        />
      </Link>
    </>
  )
}
