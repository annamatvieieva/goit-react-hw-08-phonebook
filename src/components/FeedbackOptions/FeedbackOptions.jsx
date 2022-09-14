import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { OptionsElement } from './FeedbackOptions.styled'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box display='flex' py={4} gridColumnGap={3}>
      {options.map((option, index) => {
        return (
          <OptionsElement
            type="button"
            key={index}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </OptionsElement>
        );
      })}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
