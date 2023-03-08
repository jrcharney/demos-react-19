export default function UserCard({ user }) {
  /* Note: we're using optional chaining operator (`?.`) */
  return (
    <figure>
      <img src={user.picture?.thumbnail} alt="" />
      <figcaption>
        <p>
          {user.name.title} {user.name.first} {user.name.last}
        </p>
        <p>{user.name.email}</p>
        <p>{user.name.phone}</p>
      </figcaption>
    </figure>
  );
}
