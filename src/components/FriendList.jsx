import PropTypes from "prop-types";
import { StyledFriendList } from '../styled/FriendList.styled';

export function FriendList({ friends }) {


    return (
        <StyledFriendList>
            {friends.map(friend =>  (<li key={friend.id} >
                    <span className={friend.isOnline?"online":"non-online"}></span>
                    <img src={friend.avatar} alt="User avatar" width="48" />
                    <p>{friend.name}</p>
                </li>)

            )}

        </StyledFriendList>
    );
}

FriendList.propTypes = {

     friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name:  PropTypes.string.isRequired
    }
    ).isRequired).isRequired


}