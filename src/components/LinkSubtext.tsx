import { Link } from 'react-router-dom';



export default ({commentsCount, id}) => {

    return (
        <div className="link-subtext">
            <Link to={`/${id}`}>
                {(commentsCount === 0) ? 'discuss' : `${commentsCount} Comments`}
                </Link>
        </div>
    );
}