import { styled, Box } from "@mui/material";
import myimage from "../../../assets/myra_cartoon01.png";
import Resume from "../../../assets/resume.pdf";
import {
  CustomButton,
  SectionWrapper,
  TitleWrapper,
} from "../../../styles/sectionStyles";
import aboutMeInfo from "../../../data/AboutMe.json";
import { useEffect } from "react";
const AboutMeContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignSelf: "center",
  "& img": {
    width: 400,
    [theme.breakpoints.down("sm")]: {
      width: 350,
    },
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const DetailsWrapper = styled(Box)(({ theme }) => ({
  fontSize: 16,
  marginLeft: 15,
  "& .actions": {
    margin: "12px 0",
  },
  [theme.breakpoints.down("md")]: {
    margin: "10px 0 0 0",
  },
}));
export const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectionWrapper>
      <TitleWrapper>About Me</TitleWrapper>
      <AboutMeContainer>
        <img src={myimage} alt="about me dance" />
        <DetailsWrapper>
          <div>{aboutMeInfo.aboutMe}</div>
          <div className="actions">
            <CustomButton>
              <a href={Resume} rel="noreferrer" target="_blank">
                Class Syllabus
              </a>
            </CustomButton>
          </div>
        </DetailsWrapper>
      </AboutMeContainer>
    </SectionWrapper>
  );
};
