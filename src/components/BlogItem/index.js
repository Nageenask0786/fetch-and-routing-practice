import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, title, topic, avatarUrl, author} = blogData
  return (
    <Link to={`/blogs/${id}`}>
      <div className="blog-items-container">
        <div className="div1">
          <img src={imageUrl} alt={`item${id}`} className="image" />
        </div>
        <div className="div2">
          <h1 className="topic">{topic}</h1>
          <h1 className="title">{title}</h1>
          <div className="inner-div">
            <img src={avatarUrl} alt="avatarurl" className="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
