import PropTypes from 'prop-types';
import { Box } from 'components/Box';

export const Section = ({ title, children }) => {
  return (
    <Box as="section" p={4}>
      <h1>{title}</h1>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
