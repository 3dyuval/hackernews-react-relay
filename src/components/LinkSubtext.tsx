import { Link } from 'react-router-dom';



export default ({totalComments, id}) => {

    return (
        <div className="link-subtext">
            <Link to={`/link/${id}`}>
                {(totalComments === 0) ? 'discuss' : `${totalComments} Comments`}
                </Link>
        </div>
    );
}