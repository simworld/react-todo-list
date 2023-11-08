import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function NewForm({ onSubmit }) {
  // eslint-disable-next-line react/prop-types
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    // eslint-disable-next-line react/prop-types
    onSubmit(newItem);
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
