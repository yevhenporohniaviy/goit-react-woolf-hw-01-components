import { List, Item, Status, Avatar, Name} from './styles';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status $statusType={isOnline}/>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
}

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