import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    const filter = e.target.value;
    dispatch(setFilter(filter.trim()));
  };

  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" onChange={handleChange} />
    </label>
  );
};
