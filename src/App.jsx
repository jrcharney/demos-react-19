import CatCard from "./components/CatCard";
import Counter from "./components/Counter";
import GroceryListItem from "./components/GroceryListItem";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import UserCard from "./components/UserCard";
import catsData from "./data/cats";
import groceryData from "./data/groceries";
import userData from "./data/users";
// import { Fragment } from "react"

// console.log(catsData[0]);

function App() {
  // return <Header text="Hello world!" />;
  // return <CatCard cat={catsData[0]} />;
  // Note: Use <Fragment> ( or <>...</>) instead of <div>.
  // `key` is a reserved word.
  return (
    <>
      <NavBar />
      <main>
        <section>
          <Header text="Hello Cat!" />
          {catsData.map((catData) => {
            return <CatCard cat={catData} key={catData.id} />;
          })}
        </section>
        <section>
          {/* TODO: Use a mat to create `li`s for each grocery item */}
          {/* Stretch goals: Add a checkbox next to each item  */}
          <hr />
          {/* NOTE: `htmlFor` is used instead of `for` in labels in JSX */}
          <Header text="Grocery List" />
          <ul>
            {groceryData.map((item) => {
              return <GroceryListItem item={item} key={item.id} />;
            })}
          </ul>
        </section>
        <hr />
        <section>
          <Header text="Users" />
          {userData.map((user) => {
            return <UserCard user={user} key={user.id.value} />;
          })}
        </section>
      </main>
      <hr />
      <footer>
        <section>
          <Counter />
        </section>
      </footer>
    </>
  );
}

export default App;
