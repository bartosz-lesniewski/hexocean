import SelectOptions from './SelectOptions';
import ConditionallyDisplay from './ConditionallyDisplay';

const Form = ({ handleSubmit, select, setSelect }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="form d-flex">
        <div className="d-flex flex-column">
          <label htmlFor="name">Dish name</label>
          <input required className="input" type="text" name="name" id="name" />
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="preparation_time">Preparation time</label>
          <input
            required
            className="input"
            type="time"
            step="1"
            defaultValue=""
            name="preparation_time"
            id="preparation_time"
          />
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="dish_type">Dish type</label>
          <SelectOptions setSelect={setSelect} />
          <ConditionallyDisplay select={select} />
        </div>
        <div>
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
