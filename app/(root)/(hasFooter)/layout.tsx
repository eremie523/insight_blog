import Footer from '@/components/custom/Footer'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const layout = (props: Props) => {
  return (
    <>
      {props.children}
      <Footer />
    </>
  )
}

export default layout