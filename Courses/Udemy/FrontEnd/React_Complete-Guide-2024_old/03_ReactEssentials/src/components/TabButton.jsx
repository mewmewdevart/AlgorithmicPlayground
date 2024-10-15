import React from "react";

export default function TabButton({ children, onSelect, isSelected }) {
  console.log("TabButton COMPONENT EXECUTING");
  return (
    <li>
      <button className={isSelected ? 'active' : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
