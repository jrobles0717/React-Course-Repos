const Concepts = ({ items }) => {
  return (
    <ul id="concepts">
      {items.map((item, index) => {
        return (
          <li className="concept" key={index}>
            <img src={item.image} alt={item.title} />
            <h2>{item.tile}</h2>
            <p>{item.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Concepts;
