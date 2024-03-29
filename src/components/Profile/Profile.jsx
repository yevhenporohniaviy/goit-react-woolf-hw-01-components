import './styles.scss'

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        {Object.keys(stats).map(stat => (
          <li className="stats__stat" key={stat}>
            <span className="label">{stat}</span>
            <span className="quantity">{stats[stat]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
