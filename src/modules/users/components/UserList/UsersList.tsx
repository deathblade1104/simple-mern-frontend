/* eslint-disable @typescript-eslint/no-explicit-any */
import Card from '../../../../shared/components/UIElements/Card/Card';
import UserItem from '../UserItem/UserItem';
import './UserList.css';

interface IProps {
  users: {
    id: string;
    image: string;
    name: string;
    places: number;
  }[];
}

const UserList = (props: IProps) => {
  if (props.users.length === 0) {
    return (
      <div className='center'>
        <Card>
          <h2>No Users Found.</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul>
      {props.users.map(user => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UserList;
