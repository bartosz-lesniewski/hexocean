const ConditionallyDisplay = ({ select }) => {
  return (
    <>
      {select === 'pizza' ? (
        <div>
          <label htmlFor="no_of_slices">Pick number of slices</label>
          <input
            required
            className="input"
            type="number"
            id="no_of_slices"
            name="no_of_slices"
          />
          <label htmlFor="diameter">Diameter</label>
          <input
            required
            className="input"
            type="number"
            id="diameter"
            name="diameter"
          />
        </div>
      ) : null}
      {select === 'soup' ? (
        <div>
          <label htmlFor="spiciness_scale">Pick spiciness scale</label>
          <input
            required
            className="input"
            type="number"
            min={1}
            max={10}
            name="spiciness_scale"
            id="spiciness_scale"
          />
        </div>
      ) : null}
      {select === 'sandwich' ? (
        <div>
          <label htmlFor="slices_of_bread">Pick slices of bread</label>
          <input
            required
            className="input"
            type="number"
            name="slices_of_bread"
            id="slices_of_bread"
          />
        </div>
      ) : null}
    </>
  );
};

export default ConditionallyDisplay;
