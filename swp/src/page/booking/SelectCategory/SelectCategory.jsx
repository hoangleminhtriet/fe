import { useState } from 'react';
import { SearchableDropdown, RenderCard } from './SearchableDropdown';

const SelectCategory = () => {
  const items = ['Book a Camp', 'Book a Party (If less than 48h, please email us)', 'Book a Premium Room'];

  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (selectedItem) => {
    setSelectedItem(selectedItem);
  };

  return (
    <div>
      <SearchableDropdown
        items={items}
        onSelect={handleSelect}
        placeholder="Select Category"
      />
      <div>{selectedItem && <RenderCard selectedItem={selectedItem} />}</div>
    </div>
  );
};

export default SelectCategory;
