import React, { useState } from "react";
import { Caption } from "../atoms/Caption";
import { TextField } from "../atoms/TextField";
import { Button } from "../atoms/Button";
import { styled } from "styled-components";
import { z } from "zod";
import { FieldValues, Form } from "../atoms/Form";
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { Modal } from "../organisms/Modal";
import { FadeIn } from "../animations/FadeIn";
import { SlideUp } from "../animations/SlideUp";
import { Loading } from "../atoms/Loading";
import { breakpoints } from "@/utils/const";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.md}) {
    width: 90%;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

const FormContainer = styled.div`
  text-align: center;
  width: 60%;
  margin: 16px auto;
  button {
    margin-top: 24px;
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.subText};
  gap: 40px;
`;

const GreyLine = styled.hr`
  border: none;
  border-top: 1px solid ${(props) => props.theme.colors.gray};
  margin: 40px 0; // 上下のマージン調整（必要に応じて）
`;

const schema = z.object({
  email: z
    .string()
    .email("メールアドレスの形式で入力してください")
    .nonempty("必須です"),
  content: z.string().nonempty("必須です"),
});

export const Contact = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit = async (data: FieldValues) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setIsOpen(true);
      } else {
        // エラー処理
        console.error("Failed to send the email");
      }
    } catch (error) {
      console.error("There was an error sending the message", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container>
      <SlideUp>
        {" "}
        <Caption title="CONTACT" subTitle="get in touch" direction="center" />
      </SlideUp>
      <FadeIn>
        <Form schema={schema} onSubmit={onSubmit}>
          {({ register, formState: { errors } }) => (
            <FormContainer>
              <TextField
                registration={register("email")}
                label="メールアドレス"
                error={errors.email?.message}
              />
              <TextField
                registration={register("content")}
                label="お問い合わせ内容"
                multiline
                rows={7}
                error={errors.content?.message}
              />
              <Button width="60%">送信</Button>
            </FormContainer>
          )}
        </Form>
      </FadeIn>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <p>送信が完了しました</p>
      </Modal>
      <GreyLine />
      <IconContainer>
        <a
          href="https://github.com/ponta10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={40} />
        </a>
        <a
          href="https://twitter.com/ponta68365846"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterCircle size={40} />
        </a>
        <a
          href="https://www.instagram.com/ponpon_programing/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram size={40} />
        </a>
      </IconContainer>
    </Container>
  );
};
