export default function GroceryListItem({ item }) {
  // HTML forms are uncontrolled
  return (
    <li key={item.id}>
      {/* Conditional Rendering */}
      <input
        type="checkbox"
        name={item.id}
        id={item.id}
        defaultChecked={item.purchased}
      />
      <label htmlFor={item.id}>{item.name}</label>
    </li>
  );
}
