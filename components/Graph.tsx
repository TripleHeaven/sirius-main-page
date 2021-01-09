import styled from "@emotion/styled";
import { NONAME } from "dns";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
// import styled from "@emotion/styled/macro";

export default function Graph({ picAdress }: { picAdress: string }) {
  // styles
  const [chartData, setChartData] = useState({});
  const [currentIncome, setIncome] = useState(0);
  const chart = () => {
    const getRandomInt = (min: number, max: number): number => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    };
    const generateRandomData = () => {
      let toReturn = [];
      let incomeSum = 0;
      for (let i = 0; i < 7; i++) {
        toReturn.push(getRandomInt(1000, 6000));
        incomeSum += toReturn[i];
      }
      setIncome(incomeSum);
      return toReturn;
    };
    setChartData({
      labels: [
        "23 сен",
        "24 сен",
        "25 сен",
        "26 сен",
        "27 сен",
        "28 сен",
        "29 сен",
      ],
      datasets: [
        {
          label: "Income",
          data: generateRandomData(),
          borderColor: "rgba(46,113,243,1)",
          backgroundColor: "rgba(46,113,243,0.1)",
          borderWidth: 2,
          pointStyle: "circle",
          fill: true,
          pointBackgroundColor: "white",
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverBorderColor: "#ED0F48",
          hoverBackgroundColor: "#FFFFFF",
        },
      ],
    });
  };
  const GraphContainer = styled.div`
    height: 200px;
    width: 560px;
    margin-left: 10px;
    margin-top: 18px;
    background: #fff;
    z-index: 0;
  `;
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 575px;
    height: 315px;
    background: #fff;
    font-family: "Jost";
    margin-top: 8px;
  `;
  const InfoContainer = styled.div`
    display: grid;
    padding-left: 20px;
    padding-top: 20px;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
  `;
  const BankPic = styled.img`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    display: flex;
    margin-left: auto;
    margin-right: 20px;
  `;
  const IncomeLabel = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
  `;
  const IncomeSize = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    display: flex;
  `;
  const IncomeNumber = styled.div`
    font-size: 25px;
  `;
  const Rub = styled.div`
    margin-top: 8px;
    margin-left: 5px;
    font-size: 18px;
  `;
  const LittlePic = styled.img`
    margin-top: 12px;
    margin-left: 3px;
    height: 20px;
  `;
  const formatIncome = () => {
    return (
      currentIncome.toString().slice(0, 2) +
      " " +
      currentIncome.toString().slice(2, currentIncome.toString().length)
    );
  };
  const MainContainer = styled.div`
    margin-top: 28px;
  `;
  useEffect(() => {
    chart();
  }, []);
  const MenuBlock = styled.div`
    display: flex;
    font-family: "Jost";
    font-size: 12px;
    font-weight: 500;
    width: 37%;
    justify-content: space-between;
  `;
  const OptionBlock = styled.div`
    display: flex;
    border: solid;
    padding: 12px;
    border-radius: 2px;
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.3);
    &:hover {
      color: black;
      background: #fff;
    }
  `;
  return (
    <MainContainer>
      <MenuBlock>
        <OptionBlock>День</OptionBlock>
        <OptionBlock>Неделя</OptionBlock>
        <OptionBlock>Месяц</OptionBlock>
      </MenuBlock>
      <Container>
        <InfoContainer>
          <IncomeLabel>Выручка:</IncomeLabel>
          <IncomeSize>
            <IncomeNumber>{formatIncome()}</IncomeNumber>
            <Rub>руб</Rub>
            <LittlePic src="/graphPics/lilIncrease.png"></LittlePic>
          </IncomeSize>
          <BankPic src={picAdress}></BankPic>
        </InfoContainer>
        <GraphContainer>
          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              tooltips: {
                callbacks: {
                  title: function (tooltipItem, data) {
                    return (
                      "Выручка за " +
                      data["labels"][tooltipItem[0]["index"]] +
                      ":"
                    );
                  },
                  label: function (tooltipItem, data) {
                    return (
                      data["datasets"][0]["data"][tooltipItem["index"]] + " руб"
                    );
                  },
                },
                backgroundColor: "#FFF",
                titleFontFamily: "Jost",
                titleFontSize: 10,
                titleFontStyle: "normal",
                titleFontColor: "rgba(0,0,0,0.4)",
                titleFontWidth: 100,
                bodyFontColor: "#000",
                bodyFontSize: 12,
                bodyFontFamily: "Jost",
                displayColors: false,
                xPadding: 13,
                yPadding: 13,
                cornerRadius: 0,
              },
              legend: { display: false },
              scales: {
                xAxes: [
                  {
                    ticks: {
                      display: true,
                      drawBorder: false,
                      fontSize: 12,
                      padding: 10,
                      fontFamily: "Jost",
                    },
                    gridLines: {
                      display: false,
                      drawBorder: false,
                    },
                  },
                ],
                yAxes: [
                  {
                    ticks: {
                      display: true,
                      padding: 10,
                      fontSize: 12,
                      callback: function (value, index, values) {
                        if (value > 5000) {
                          return "";
                        } else {
                          return value / 1000 + " тыс. ₽";
                        }
                      },
                      maxTicksLimit: 10,
                      stepSize: 1000,
                      fontFamily: "Jost",
                    },
                    gridLines: {
                      display: true,
                      drawBorder: false,
                      z: -100,
                    },
                  },
                ],
              },
            }}
          >
            {" "}
          </Line>
        </GraphContainer>
      </Container>
    </MainContainer>
  );
}
