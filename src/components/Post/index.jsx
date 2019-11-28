import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import './style.scss'

class Post extends React.Component {
  render() {
    const {
      id,
      title,
      body,
      created,
      changed,
    } = this.props.data.node
    const { bodyValue } = this.props.data.node.body.value

    return (
      <div className="post">
        <div className="post__meta">
          <time
            className="post__meta-time"
            dateTime={moment(changed).format('MMMM D, YYYY')}
          >
            {moment(changed).format('MMMM YYYY')}
          </time>
          <span className="post__meta-divider" />
          {/* <span className="post__meta-category" key={categorySlug}>
            <Link to={categorySlug} className="post__meta-category-link">
              {category}
            </Link>
          </span> */}
        </div>
        <h2 className="post__title">
          <Link className="post__title-link" to={id}>
            {title}
          </Link>
        </h2>
        <p className="post__description"><div dangerouslySetInnerHTML={{ __html: body.value.split(' ').splice(0, 60).join(' ') + '...' }}></div></p>
        <Link className="post__readmore" to={id}>
          Read
        </Link>
      </div>
    )
  }
}

export default Post
