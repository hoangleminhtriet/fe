/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Card, Dropdown, Image } from "react-bootstrap";
import Example from "../../../assets/image/uudai.png";
import { Link } from "react-router-dom";

const SearchableDropdown = ({ items, onSelect, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (event) => {
    const newSearchTerm = event.target.value.toLowerCase();
    setSearchTerm(newSearchTerm);

    const filtered = items.filter((item) =>
      item.toLowerCase().includes(newSearchTerm)
    );
    setFilteredItems(filtered);
  };

  const handleSelect = (selectedItem) => {
    onSelect(selectedItem);
    setSearchTerm("");
    setFilteredItems(items);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {placeholder}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="form-control"
        />
        {filteredItems.map((item) => (
          <Dropdown.Item key={item} onClick={() => handleSelect(item)}>
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const RenderCard = ({ selectedItem }) => {
  return (
    <Card className="m-3">
      <Card
        className="m-3"
        style={{ display: "flex", flexDirection: "row", border: "transparent" }}
      >
        <div>
          <Image
            style={{ maxHeight: "8em", minWidth: "13em" }}
            alt=""
            src={Example}
          />
        </div>

        <Card.Body>
          <Card.Title className="mb-5">Selected Item</Card.Title>
          <Card.Text>{selectedItem}</Card.Text>
        </Card.Body>

        <Card.Title className="m-3">Price</Card.Title>
      </Card>
      <Link to="/booking2">
        <Button
          variant="warning"
          size="lg"
          style={{
            marginLeft: "auto",
            marginRight: "1em",
            marginBottom: "2em",
          }}
        >
          Select
        </Button>
      </Link>
    </Card>
  );
};

export { SearchableDropdown, RenderCard };
