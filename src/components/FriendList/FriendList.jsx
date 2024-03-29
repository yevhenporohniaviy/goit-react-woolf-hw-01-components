import FriendListItem from './FriendListItem';
import { List} from './styles';


const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <FriendListItem {...friend} key={ friend.id} />
      ))}
    </List>
  )
}

 
export default FriendList;