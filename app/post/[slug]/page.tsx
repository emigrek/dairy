import React from 'react'

type Props = {
    params: {
        slug: string
    }
}

function Post({ params: { slug } } : Props) {
  return (
    <div>{slug}</div>
  )
}

export default Post