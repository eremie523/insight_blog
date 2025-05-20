// import Community from '@/components/custom/Community'
import ExploreCategories from '@/components/custom/ExploreCategories'
import FeaturedPosts from '@/components/custom/FeaturedPosts'
import Hero from '@/components/custom/Hero'
import SubscribeNews from '@/components/custom/SubscribeNews'
import TrendingToday from '@/components/custom/TrendingToday'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <main>
        <FeaturedPosts />
        <ExploreCategories />
        <TrendingToday />
        {/* <Community /> */}
        <SubscribeNews />
      </main>
    </>
  )
}

export default page