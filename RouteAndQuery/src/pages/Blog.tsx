import {useLocation, useParams} from "react-router-dom";

const Blog = () => {
    const { blogId } = useParams()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const filter = queryParams.get("filter");
    const search = queryParams.get("search");
    return (
        <div>
            <h1>Blog nomi: {blogId}</h1>
            <h1>Query Param:</h1>
            <h2> Filter: {filter},
                Search: {search}</h2>
        </div>
    )
}

export default Blog