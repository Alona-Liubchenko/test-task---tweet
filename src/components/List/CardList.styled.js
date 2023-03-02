import styled from "styled-components";

export const List = styled.ul`
 list-style: none;
 //  display: flex;
 //  flex-wrap: wrap;
 //  gap: 20px;
 //  justify-content: center;
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 grid-column-gap: 20px;
 grid-row-gap: 1em;
`;