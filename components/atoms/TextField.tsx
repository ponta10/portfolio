import React from "react";
import styled from "styled-components";

interface TextFieldProps {
  label: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
  registration?: object;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

const InputField = styled.input`
  background-color: ${(props) => props.theme.colors.gray};
  margin-top: 0.3em;
  padding: 8px;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  background-color: ${(props) => props.theme.colors.gray};
  margin-top: 0.3em;
  padding: 8px;
  border-radius: 4px;
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.subText};
  text-align: left;
`;

export const TextField: React.FC<TextFieldProps> = ({
  label,
  type = "text",
  multiline = false,
  rows,
  registration,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      {multiline ? (
        <TextArea {...registration} rows={rows} />
      ) : (
        <InputField {...registration} type={type} />
      )}
    </Container>
  );
};
