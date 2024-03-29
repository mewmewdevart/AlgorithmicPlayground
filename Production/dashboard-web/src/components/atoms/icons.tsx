import iconsData from './iconsData.json';
import styled from 'styled-components';

// Define styled component for SVG
const SvgStyled = styled.svg`
  width: 24px;
  height: 24px;
`;

const IconsComponent = ({ typeOfIcon }: { typeOfIcon: string }) => {
  // Filter icons based on type
  const filteredIcons = iconsData.iconsData.filter(icon => icon.type === typeOfIcon);
  
  // Map filtered icons to SVG elements with styled component applied
  const iconElements = filteredIcons.map((icon, index) => (
    <div key={index}>
      {/* Use Svg as a component */}
      <SvgStyled dangerouslySetInnerHTML={{ __html: icon.icon }} />
    </div>
  ));

  return (
    <>
      {iconElements}
    </>
  );
};

export default IconsComponent;
