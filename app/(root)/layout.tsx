import TopNav from '@/components/custom/TopNav'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const layout = (props: Props) => {
  return (
    <>
      <header>
        <TopNav />
      </header>
      <div className=''>
        {props.children}
      </div>
    </>
  )
}

export default layout