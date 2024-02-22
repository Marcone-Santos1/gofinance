import styled from "styled-components/native";
export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    background: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
    font-size: 24px;
    color: black;
    font-family: ${({ theme }) => theme.fonts.bold};
`;