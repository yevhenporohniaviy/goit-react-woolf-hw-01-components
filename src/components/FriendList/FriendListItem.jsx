import { Item, Status, Avatar, Name } from './styles';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status $statusType={isOnline} />
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

export default FriendListItem;
