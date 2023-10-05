import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogsData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }
    this.setState({blogsData: updatedData, isLoading: false})
  }

  renderBlogIteMDetails = () => {
    const {blogsData} = this.state
    const {author, avatarUrl, imageUrl, title, content} = blogsData
    return (
      <div className="blog-item-details-container">
        <h1 className="t">{title}</h1>
        <div className="container2">
          <img src={avatarUrl} alt="avatar-img" className="av" />
          <p className="a">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="i" />
        <p className="c">{content}</p>
      </div>
    )
  }

  renderSpinner = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? this.renderSpinner() : this.renderBlogIteMDetails()}
      </div>
    )
  }
}

export default BlogItemDetails
