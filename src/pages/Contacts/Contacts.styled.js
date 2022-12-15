import styled from 'styled-components';
import img from '../../images/contacts.jpg';

export const ContactsPageStyle = styled.main`
  flex-direction: column;
  background-image: url(${img});

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${p => p.theme.space[4]}px;
  }
`;

export const PhoneBook = styled.div`
  width: 500px;
  height: 500px;
  box-sizing: border-box;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.md};
  font-weight: ${p => p.theme.fontWeights.bold};

  h2 {
    color: ${p => p.theme.colors.yellow};
  }
`;

export const SavedContact = styled.div`
  min-height: 300px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[1]}px;
`;
