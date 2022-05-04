
const PostItem = ({ post }) => {
    const { id, title, body } = post
    return (
        <>
            <td className='posts__item id'>{id}</td>
            <td className='posts__item'>{title}</td>
            <td className='posts__item'>{body}</td>
        </>
    )
}

export default PostItem