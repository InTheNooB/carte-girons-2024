import { FC } from "react";
import { Giron } from "../App";
import { getFormattedGironDetails, monthToName } from "../utils";

const GironDetails: FC<{ giron: Giron }> = ({ giron }) => {
  const { imageSrc, fromDate, toDate } = getFormattedGironDetails(giron);
  return (
    <div className="flex flex-row gap-3">
      <img src={imageSrc} alt="flag" className="w-10 object-contain" />
      <div>
        <h2 className="uppercase font-black text-xl">{giron.city}</h2>
        <p>{giron.details}</p>
        <p>
          du {fromDate} au {toDate}
        </p>
      </div>
    </div>
  );
};

const MonthsSeparator: FC<{ month: number }> = ({ month }) => {
  return (
    <>
      <h3 className="uppercase text-center">{monthToName(month)}</h3>
      <div className="bg-neutral-50 h-[1px] w-7 mx-auto" />
    </>
  );
};

const GironList: FC<{ girons: Giron[] }> = ({ girons }) => {
  const sortedGirons = girons.sort(
    (a, b) => a.fromDate.getTime() - b.fromDate.getTime()
  );

  // Divide the girons by months using the "month"
  // property of the Giron type
  const gironsByMonth: Record<number, Giron[]> = sortedGirons.reduce(
    (acc, giron) => {
      if (!acc[giron.month]) {
        acc[giron.month] = [];
      }
      acc[giron.month].push(giron);
      return acc;
    },
    {} as Record<number, Giron[]>
  );

  return (
    <div className="bg-primary p-5 mt-2 gap-10 flex flex-col">
      {Object.entries(gironsByMonth).map(([month, girons]) => {
        return (
          <div key={month} className="flex flex-col w-full justify-center">
            <MonthsSeparator month={parseInt(month)} />
            <div className="flex flex-row gap-y-8 gap-x-20 mt-4 flex-wrap md:justify-center">
              {girons.map((giron) => {
                return <GironDetails key={giron.city} giron={giron} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GironList;
