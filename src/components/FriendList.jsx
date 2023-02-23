import PropTypes from "prop-types";
import { StyledFriendList } from '../styled/FriendList.styled';
import {FriendListItem} from './FriendListItem'
export function FriendList({ friends }) {


    return (
        <StyledFriendList>
            {friends.map(friend =>  <FriendListItem key={friend.id} friend={friend} />
            )}

        </StyledFriendList>
    );
}

FriendList.propTypes = {

     friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    }
    )).isRequired


}