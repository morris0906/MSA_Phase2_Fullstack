import I18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
const resources = {
  en: {
    translation: {
      Delete: "Delete ",
      DatePosted: " DatePosted ",
      AddPost: " Add New Post ",
      Save: " Save ",
      Title: " Title ",
      Content: " Write your thoughts here! ",
      Curr: "English",
      Add: "Add New Post",
      Welcome1: "Hi, welcome to online notepad!",
      Welcome2: "Press the button below to post.",
    },
  },
  ko: {
    translation: {
      Delete: "삭제 ",
      DatePosted: " 게시 된 날짜 ",
      AddPost: " 새 메모 작성 ",
      Save: " 저장 ",
      Title: " 메모 제목",
      Content: " 이 칸에 메모 작성 ",
      Curr: "한국어",
      Add: "메모 작성",
      Welcome1: "온라인 메모장에 오신것을 환영합니다!",
      Welcome2: "하단의 버튼을 눌러 메모를 작성하세요.",
    },
  },
};

I18n.use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default I18n;
