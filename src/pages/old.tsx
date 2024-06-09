import moment from "moment";
import { useMemo, useState } from "react";
import I18N from "i18next";

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

export default function Old() {
  const [date, setDate] = useState(() => new Date());

  const inputDate = moment(date).format("YYYY-MM-DD");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(moment(event.target.value).toDate());
  };

  const rate = useMemo(() => {
    const day = date.getDate();
    return convertRates[(day % 3) as keyof typeof convertRates];
  }, [inputDate]);

  return (
    <div>
      <h2>{i18n.t("convertText")}</h2>
      <div>
        <h3>{i18n.t("date")}</h3>
        <input type="date" value={inputDate} onChange={onChange} />
      </div>
      <div>
        <h3>{i18n.t("Rate")}</h3>
        {rate}
      </div>
    </div>
  );
}
