import { useDispatch } from 'react-redux';
import { FilterBox } from './Filter.styled';
import { setFilter } from 'redux/slices/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    const filter = e.target.value;
    dispatch(setFilter(filter.trim()));
  };

  return (
    <FilterBox>
      Find contacts by name
      <input type="text" name="filter" onChange={handleChange} />
    </FilterBox>
  );
};
