
import PropTypes from "prop-types";
import {StyledProfile,StyledProfileInfo,StyledStatistics} from '../styled/Profile.styled'
export function Profile({ username, tag, location, avatar, stats}) {
    return (
        <StyledProfile >
            <StyledProfileInfo>
                <img
                    src={avatar}
                    alt="User avatar"

                />
                <p className="user-name">{username}</p>
                <p className="user-tag">@{tag}</p>
                <p className="user-location">{location}</p>
            </StyledProfileInfo>

            <StyledStatistics>
                <li>
                    <span>Followers</span>
                    <span className="statistics">{stats.followers}</span>
                </li>
                <li>
                    <span >Views</span>
                    <span className="statistics">{stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span className="statistics">{stats.likes}</span>
                </li>
            </StyledStatistics>
        </StyledProfile>
    );
}
Profile.propTypes = {

    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number.isRequired)


}