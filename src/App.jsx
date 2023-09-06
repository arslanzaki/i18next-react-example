import { Suspense } from "react";
import { Trans, useTranslation } from "react-i18next";

function MyComponent() {
  const { t } = useTranslation();
  return (
    <div>
      <Trans i18nKey="description.part1">How are you, Arslan?</Trans>
      {/* {t("description.part1")} */}
    </div>
  );
}

function Page() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    console.log(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <div>
        <button type="button" onClick={() => changeLanguage("es")}>
          Spansih
        </button>
        <button type="button" onClick={() => changeLanguage("en")}>
          English
        </button>
      </div>
      <div>
        <MyComponent />
      </div>
      <div>{t("description.part2")}</div>
    </div>
  );
}

const Loader = () => <div>Loading...</div>;

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}

export default App;
