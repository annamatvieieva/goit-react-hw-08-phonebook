import PropTypes from 'prop-types';
import { FilterBox } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterBox>
      Find contacts by name
      <input type="text" name="filter" value={value} onChange={onChange} />
    </FilterBox>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
