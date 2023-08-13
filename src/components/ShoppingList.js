import React, { useState } from "react"; // Import useState
import Item from "./Item";

function ShoppingList({ items }) {
  // 1. Initialize the selectedCategory state with "All"
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 2. Handle the change event of the select element
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // 3. Filter the items based on the selected category
  const filteredItems = selectedCategory === "All"
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
