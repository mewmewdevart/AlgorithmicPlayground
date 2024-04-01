import iconsData from './iconsData.json';
import styled from 'styled-components';

// Define styled component for Texto
const TextoStyled = styled.p`
    height: 24px;
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 5px;
`;

const TextComponent = ({  typeOfText }: {  typeOfText: string }) => {
  // Filter icons based on type
  const filteredIcons = iconsData.iconsData.filter(icon => icon.type ===  typeOfText);
  
  // Map filtered icons to Texto elements with styled component applied
  const textElements = filteredIcons.map((icon, index) => (
    <div key={index}>
      <TextoStyled>{icon.name}</TextoStyled>
    </div>
  ));

  return (
    <>
      {textElements}
    </>
  );
};

export default TextComponent;