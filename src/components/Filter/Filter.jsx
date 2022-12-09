import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/slices/filterSlice';
import { FilterBox } from './Filter.styled';

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
