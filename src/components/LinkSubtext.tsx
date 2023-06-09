import { Link } from 'react-router-dom';



export default ({totalComments, id}) => {

    return (
        <div className="flex text-xs text-zinc-500 [&>*]:mx-1">
            <Link>
            hide
            </Link>
            <Link>
            past
            </Link>
            <Link to={`/link/${id}`}>
                {(totalComments === 0) ? 'discuss' : `${totalComments} Comments`}
                </Link>
        </div>
    );
}