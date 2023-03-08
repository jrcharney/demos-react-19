import navlinks from "../data/navlinks";

const NavBar = () => {
  // const links = ;
  return (
    <nav>
      <ul>
        {navlinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={`${link.href}`}>{link.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
