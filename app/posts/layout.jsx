import { Children } from "react"


const PostLayout = ({children}) => {
  return (
    <div className= "mt-3">
       <small>Home &bull; Posts</small>
        {children}
    </div>
  )
}

export default PostLayout