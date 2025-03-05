import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { LangList } from "src/translations";
import { Avatar } from "@mui/material";
import { ButtonWithSelect } from "src/components/Elements";
import styled from "@emotion/styled";
import { Theme } from "@mui/material/styles";

export const StyledLanguageItem = styled("div")<{ theme?: Theme }>(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "5px 0px",
    img: {
      height: "18px",
      borderRadius: "4px",
      display : "block"
    },
  };
});

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const currentLanguage = LangList.find((x) => x.slug === lang)!;

  const setLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const options = useMemo(
    () =>
      LangList.map((language) => ({
        title: (
          <StyledLanguageItem>
            <img src={language.flag} alt={language.title} />
            <span>{language.title}</span>
          </StyledLanguageItem>
        ),
        onClick: () => {
          setLanguage(language.slug);
        },
      })),
    []
  );
  
  return (
    <ButtonWithSelect items={options} variant="text">
      <Avatar alt={`Selected language ${currentLanguage?.title}`} src={currentLanguage.flag || undefined} sx={{ width: 18, height: 18, borderRadius:"10px" }} />
      <span className="title">{currentLanguage?.title}</span>
    </ButtonWithSelect>
  );
};

export default LanguageSelector;
