import moment from "moment";
import I18N from "i18next";
import { DateSelect } from "./components/DateSelect";

const i18n = I18N.createInstance({
  lng: "en",
  resources: {
    en: {
      convertText: "Convert $ to ₽",
      date: "Date",
      rate: "Rate",
    },
  },
});

i18n.init();

const convertRates = {
  0: 91,
  1: 93,
  2: 90,
};

export default function Home(props: any) {
  const date = props.searchParams.date ?? moment().format("YYYY-MM-DD");

  const dateDay = moment(date).day();

  const rate = convertRates[(dateDay % 3) as keyof typeof convertRates];

  console.log("rerender!!!");

  return (
    <div>
      <h2>{i18n.t("convertText")}</h2>
      <DateSelect date={date} title={i18n.t("date")} />
      <div>
        <h3>{i18n.t("Rate")}</h3>
        {rate}
      </div>
    </div>
  );
}
