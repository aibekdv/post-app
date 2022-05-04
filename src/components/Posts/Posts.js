import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterByDesc, filterById, filterByName } from '../../redux/actions'
import arrowBottom from "../../img/icons/arrow_bottom.png"
import "./_posts.scss"
import PostItem from '../PostItem/PostItem'
import Pagination from '../Pagination/Pagination'

export const Posts = () => {

    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)



    const { filteredPosts } = useSelector(state => state)
    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPosts = filteredPosts.slice(firstPostIndex, lastPostIndex)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(prev => prev + 1)
    const prevPage = () => setCurrentPage(prev => prev - 1)


    return (
        <div className="posts">
            <table className='posts__table'>
                <thead>
                    <tr>
                        <th className='header_btn' onClick={() => dispatch(filterById())}>ID &emsp;<img src={arrowBottom} alt="" /></th>
                        <th className='header_btn' onClick={() => dispatch(filterByName())}>Заголовок &emsp;<img src={arrowBottom} alt="" /></th>
                        <th className='header_btn' onClick={() => dispatch(filterByDesc())}>Описание &emsp;<img src={arrowBottom} alt="" /></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentPosts.length > 0
                            ? currentPosts.map((post) => (
                                <tr className='table_border' key={post.id}>
                                    <PostItem post={post} />
                                </tr>
                            ))
                            : <tr><td><h2>Posts dosen't exist</h2></td></tr>
                    }
                </tbody>
            </table>

            {currentPosts.length ?
                <Pagination
                    paginate={paginate}
                    totalPage={filteredPosts.length}
                    postsPerPage={postsPerPage}
                    nextPage={nextPage}
                    prevPage={prevPage}
                    currentPage={currentPage}
                /> : null}
        </div>
    )
}
