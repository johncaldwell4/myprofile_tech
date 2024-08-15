import React, { useState } from 'react';

const data = [
  { link: 'https://example.com', items: ['Item 1', 'Item 2', 'Item 3'] },
  { link: 'https://example2.com', items: ['Item A', 'Item B'] },
  // Add more data as needed
];

const MyTable = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleLinkClick = (items) => {
    setSelectedItems(items);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Link</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(row.items);
                  }}
                >
                  {row.link}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>Selected Items:</h3>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default MyTable;