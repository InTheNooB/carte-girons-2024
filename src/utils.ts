import VDFlag from "./assets/images/VD.png";
import FRFlag from "./assets/images/FR.png";
import { Giron } from "./App";

export const monthToName = (month: number) => {
  // use locale to get the month name
  const date = new Date(2024, month - 1, 1);
  return date.toLocaleString("fr-FR", { month: "long" });
};

export const formatDate = (date: Date) => {
  return date.toLocaleDateString("fr-CH", {
    day: "numeric",
    month: "long",
  });
};

export const getFormattedGironDetails = (giron: Giron) => {
  const fromDate = formatDate(giron.fromDate);
  const toDate = giron.toDate ? formatDate(giron.toDate) : null;
  const imageSrc = giron.canton === "VD" ? VDFlag : FRFlag;

  return {
    fromDate,
    toDate,
    imageSrc,
  };
};
