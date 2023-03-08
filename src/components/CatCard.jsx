const getRandomWidth = () => {
  const num = Math.random() * (300 - 200) + 200;
  return num.toString().split(".")[0];
};

export default function CatCard({ cat }) {
  return (
    <figure>
      <img alt="" src={`https://placekitten.com/${getRandomWidth()}/300`} />
      <figcaption>
        <h2>{cat.name}</h2>
        <p>{cat.description}</p>
      </figcaption>
    </figure>
  );
}
