
const fetchComments = async ( id ) => {
    await new Promise(resolve => setTimeout(resolve, 5000))

    
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, 
    {next:{
        revalidate: 60
    }})
    .then((res) =>
        res.json()
    );
  };

const Comments = async ({ params }) => {
    const { id } = params
    const comments = await fetchComments(id)
  return (
    <ul className="list-disc opacity-50">
        {comments.map(comment => (
            <li key={comment.id}>
                <h2 className="font-bold text-sm">{comment.name}</h2>
                <p className="text-xs">{comment.body}</p>
            </li>
        ))}
    </ul>
  )
}

export default Comments