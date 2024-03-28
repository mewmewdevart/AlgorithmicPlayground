import styled from "styled-components";

const BannerEstilizado = styled.header`
    position: relative;
    display: flex;
    align-items: center;
    min-height: 200px; /* Adjust the height as needed for responsiveness */
    padding: 0;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center; /* Center align text */

    h1 {
        font-size: 25px; /* Adjust font size as needed for responsiveness */
        color: rgba(255, 255, 255, 1);
        font-weight: 600;
        margin: 0; /* Remove default margin */
        padding: 0 20px; /* Add padding for better readability */
    }

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, rgba(201, 140, 241, 0.5) 0%, rgba(123, 120, 229, 0.5) 90%), url('imagens/banner.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: inherit;
    }

    @media screen and (max-width: 768px) {
        min-height: 150px; /* Adjust height for smaller devices */
        h1 {
            font-size: 20px; /* Adjust font size for smaller devices */
        }
    }

    @media screen and (max-width: 480px) {
        min-height: 120px; /* Further adjust height for smaller devices */
        h1 {
            font-size: 18px; /* Further adjust font size for smaller devices */
        }
    }
`;

const Banner = () => {
    return (
        <BannerEstilizado>
            <h1>A galeria mais completa de fotos do espaço!</h1>
        </BannerEstilizado>
    );
}

export default Banner;
