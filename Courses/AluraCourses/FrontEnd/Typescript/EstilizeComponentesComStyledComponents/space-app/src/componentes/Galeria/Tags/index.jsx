import { styled } from 'styled-components';
import tags from './tags.json';

const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    margin-top: 26px;
    gap: 5px;

    div {
        display: flex;
        gap: 5px;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 20px;
    margin: 0;

    @media screen and (max-width: 900px) {
        font-size: 18px;
    }
`;

const Tag = styled.button`
    background: rgba(217, 217, 217, 0.3);
    width: auto;
    height: 50px;
    min-width: 100px;
    border-radius: 10px;
    padding: 0 16px; 
    border: none; 
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    transition: all 0.3s ease; 
    font-size: 16px;

    &:hover {
        background: linear-gradient(50deg, rgba(201, 140, 241, 0.8) 0%, rgba(123, 120, 229, 0.8) 100%);
    }

    @media screen and (max-width: 900px) {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 60px;
    }
`;

const Tags = () => {
    return (
        <TagsContainer>
            <TagTitulo>Busque por tags:</TagTitulo>
            <div>
                {tags.map(tag => <Tag key={tag.id}>{tag.titulo}</Tag>)}
            </div>
        </TagsContainer>
    );
};

export default Tags;
