import { useState } from 'react';

function Task2() {
  const [items, setItems] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a project' },
    { id: 3, text: 'Deploy to production' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim()) {
      const newItem = {
        id: Date.now(),
        text: inputValue
      };
      setItems([...items, newItem]);
      setInputValue('');
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Task List with Delete Feature</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addItem()}
          placeholder="Add a new item..."
          style={{
            padding: '8px 12px',
            width: '70%',
            marginRight: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
        <button
          onClick={addItem}
          style={{
            padding: '8px 16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Add
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map(item => (
          <li
            key={item.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px',
              marginBottom: '8px',
              backgroundColor: '#f5f5f5',
              borderRadius: '4px',
              border: '1px solid #ddd'
            }}
          >
            <span>{item.text}</span>
            <button
              onClick={() => deleteItem(item.id)}
              style={{
                padding: '6px 12px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {items.length === 0 && (
        <p style={{ textAlign: 'center', color: '#666' }}>
          No items in the list. Add one to get started!
        </p>
      )}
    </div>
  );
}

export default Task2;