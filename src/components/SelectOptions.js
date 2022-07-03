const SelectOptions = ({ setSelect }) => {
  const options = [
    { id: 1, label: 'Pizza', value: 'pizza' },
    { id: 2, label: 'Soup', value: 'soup' },
    { id: 3, label: 'Sandwich', value: 'sandwich' },
  ];

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  return (
    <>
      <select
        required
        className="input"
        id="dish_type"
        name="type"
        onChange={handleSelect}
      >
        <option value="">Please choose an option</option>
        {options.map((option) => (
          <option value={option.value} key={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectOptions;
