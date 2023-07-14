import { useEffect } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";

export type FieldValues = Record<string, any>;

interface FormProps {
  children: (methods: UseFormReturn<FieldValues>) => React.ReactNode;
  options?: UseFormReturn<FieldValues>;
  id?: string;
  schema: ZodSchema<FieldValues>;
  onSubmit: (data: FieldValues) => void;
  isReset?: boolean;
  handleValidate?: (
    data: FieldValues,
    methods: UseFormReturn<FieldValues>,
  ) => boolean;
  handleValue?: boolean;
  name?: keyof FieldValues;
  value?: any;
}

const StyledForm = styled.form`
  /* Add necessary styling here */
`;

export const Form: React.FC<FormProps> = ({
  children,
  options,
  id,
  schema,
  onSubmit,
  isReset,
  handleValidate,
  handleValue,
  name,
  value,
}) => {
  const methods = useForm<FieldValues>({
    ...options,
    resolver: zodResolver(schema),
  });

  const { handleSubmit, reset, clearErrors, setValue } = methods;

  const onSubmitAndReset = (data: FieldValues) => {
    clearErrors();

    if (handleValidate) {
      if (handleValidate(data, methods)) {
        onSubmit(data);
      }
    } else {
      onSubmit(data);
    }

    if (isReset) {
      reset();
    }
  };

  useEffect(() => {
    if (handleValue) {
      setValue(name || "", value);
    }
  }, [value]);

  return (
    <StyledForm id={id} onSubmit={handleSubmit(onSubmitAndReset)}>
      {children(methods)}
    </StyledForm>
  );
};
