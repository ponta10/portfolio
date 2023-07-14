import Image from "next/image";
import styled from "styled-components";
import { Header } from "@/components/Header";
import backImage from "../public/top.jpg";
import { TopTitle } from "@/components/TopTitle";
import Scroll from "@/components/Scroll";
import { Footer } from "@/components/Footer";
import { Caption } from "@/components/Caption";
import { Element } from "react-scroll";
import { TextField } from "@/components/atoms/TextField";
import { Button } from "@/components/atoms/Button";
import { z } from "zod";
import { Form } from "@/components/atoms/Form";
import { FieldValues } from "@/components/atoms/Form";
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const HomePageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.base};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fontFamily};
`;

const HomePageWrapperBlack = styled(HomePageWrapper)`
  background-color: ${(props) => props.theme.colors.base};
  padding: 60px;
`;

const HomePageWrapperGrey = styled(HomePageWrapper)`
  background-color: ${(props) => props.theme.colors.sub};
  padding: 60px;
`;

const FormContainer = styled.div`
  text-align: center;
  width: 60%;
  margin: 16px auto;
  button {
    margin-top: 24px;
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
  email: z.string().email(),
  content: z.string(),
});

export default function Home() {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <>
      <Element name="home">
        <HomePageWrapper>
          <Header />
          <Image
            src={backImage}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
          <TopTitle />
          <Scroll />
        </HomePageWrapper>
      </Element>
      <Element name="about">
        <HomePageWrapperGrey>
          <Caption
            title="ABOUT"
            subTitle="introduce my profile"
            direction="left"
          />
        </HomePageWrapperGrey>
      </Element>
      <Element name="work">
        <HomePageWrapperBlack>
          <Caption
            title="WORK"
            subTitle="showcase of creations"
            direction="right"
          />
        </HomePageWrapperBlack>
      </Element>
      <Element name="skill">
        <HomePageWrapperGrey>
          <Caption
            title="SKILL"
            subTitle="my technical proficiency"
            direction="left"
          />
        </HomePageWrapperGrey>
      </Element>
      <Element name="contact">
        <HomePageWrapperBlack>
          <Caption title="CONTACT" subTitle="get in touch" direction="center" />
          <Form schema={schema} onSubmit={onSubmit}>
            {({ register }) => (
              <FormContainer>
                <TextField
                  registration={register("email")}
                  label="メールアドレス"
                />
                <TextField
                  registration={register("content")}
                  label="お問い合わせ内容"
                  multiline
                  rows={7}
                />
                <Button width="30%">送信</Button>
              </FormContainer>
            )}
          </Form>
          <GreyLine />
          <IconContainer>
            <AiFillGithub size={40} />
            <AiFillTwitterCircle size={40} />
            <AiFillInstagram size={40} />
          </IconContainer>
          <Footer />
        </HomePageWrapperBlack>
      </Element>
    </>
  );
}
