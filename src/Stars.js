import PropTypes from 'prop-types';
import shortid from 'shortid';
import Star from './Star';

export default function Stars(count) {
    let rating = [];

    if (count.count > 5 || count.count < 1) {
        return <ul className="card-body-stars u-clearfix"></ul>
    }

    for (let i = 1; i <= count.count; i++) {
        rating.push(i);
    }

    return (
        <ul className="card-body-stars u-clearfix">
            {rating.map(() => {
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
