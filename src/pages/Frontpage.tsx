import React from 'react'
import Header from '../components/header/Header'
import Jumbotron from '../components/jumbotron/Jumbotron'
import SidebarLayout from '../components/layouts/SidebarLayout'
import Wrapper from '../components/wrapper/Wrapper'
import CategoriesList from '../components/categories/CategoriesList'
import LastPost from '../components/lastPost/LastPost'
import PostsLine from '../components/postsLine/PostsLine'
import Footer from '../components/footer/Footer'

const Frontpage = () => {
  return (
    <>
      <Header />
      <Jumbotron />
      <Wrapper>
        <SidebarLayout
          content={<PostsLine />}
          sidebarTop={<LastPost />}
          sidebarBottom={<CategoriesList />}
        />
      </Wrapper>
      <Footer />
    </>
  )
}

export default Frontpage
