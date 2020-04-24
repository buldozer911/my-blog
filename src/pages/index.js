import React from "react"
import Layout from "../components/default-layout"
import usePosts from "../hooks/use-posts"
import PostPreview from "../components/post-preview"
import Hero from "../components/hero"
import Insta from "../components/Insta"

const HomePage = () => {
  const posts = usePosts()
  return (
    <>
      <Hero />
      <Layout>
        <p></p>
        <h2>Read my Blog!</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Insta />
      </Layout>
    </>
  )
}

export default HomePage
