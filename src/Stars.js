import PropTypes from 'prop-types';
import shortid from 'shortid';
import Star from './Star';

export default function Stars(props) {

    if (props.count > 5 || props.count < 1) {
        return null;
    }

    return (
        <ul className="card-body-stars u-clearfix">
            {[...Array(props.count).keys()].map(() => {
                return <Star key={shortid.generate()}></Star>
            })}
        </ul>
    )
}

Stars.defaultProps = {
    count: 0,
}

Stars.propTypes = {
    count: PropTypes.number,
}
