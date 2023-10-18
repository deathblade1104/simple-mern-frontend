import UserList from '../components/UserList/UsersList';
const Users = () => {
  const fetchedUsers = [
    {
      id: '1',
      name: 'John',
      image:
        'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      places: 3,
    },
  ];
  return <UserList users={fetchedUsers} />;
};

export default Users;
