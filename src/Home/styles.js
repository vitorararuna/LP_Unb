import styled from "styled-components";

export const Container = styled.div`
  margin: 80px auto 0; 
  width: 100%; 
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Loading = styled.p`
  margin-top: 2em;
  font-size: 2em;
  font-weight: bold;
  color: white;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0 2rem;
  height: 3rem;
  border-radius: 2rem;
  color: whitesmoke;
  background-color: #222;
  font-size: large;
  border: 0.1rem solid whitesmoke;
  `;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px;
`;

export const InputContents = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    select{
        padding: 20px;
        border: 3px #59acc7 solid;
        border-radius: 10px;
    }
`;

export const InputText = styled.p`
    color: white;
    font-size: larger;
    font-family: fantasy;
`;

export const Title = styled.p`
    font-size: 30px;
    font-weight: bold;
    font-family: fantasy;
    color: #59acc7;
    font-weight: bold;

`;

export const Submit = styled.button`
    margin-top: 5px;
    width: 509px;
    height: 45px;
    background: #59ACC7;
    border-radius: 12px;
`;

export const ResultContent = styled.div`
    height: auto;
    background: #59acc7;
    border-radius: 2rem;
    padding: 8px;
    margin: 1.5rem 10px 0px 10px;
`;

export const ResultTitle = styled.p`
  font-weight: bold;
`;

export const ResultBody = styled.p`
  font-size: 1.5em;
`;

export const ResultUrl = styled.p`
  font-size: 1.5em;
  color: cyan;
  font-weight: underline;
`;

export const Result = styled.p`
    margin-top: 50px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    padding: 7px;
    background-color: #80C0D4;
    border-radius: 5px;
    width: 509px;
    height: 26px;
    text-align: center;
    align-items: center;
    align-self: center;
`;

export const GridContent = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    margin-top: 5px;
`;
