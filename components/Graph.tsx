import styled from "@emotion/styled";
import { NONAME } from "dns";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
// import styled from "@emotion/styled/macro";

export default function LeftMenu() {
  // styles
  const [chartData, setChartData] = useState({});

  const chart = () => {
    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    };
    const generateRandomData = () => {
      let toReturn = [];
      for (let i = 0; i < 7; i++) {
        toReturn.push(getRandomInt(1000, 6000));
      }
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
  const Container = styled.div`
    height: 200px;
    width: 560px;
    background: #fff;
    z-index: 0;
  `;
  const HidingBlock = styled.div`
    width: 565px;
    height: 225px;
    background: #fff;
    margin-top: -300px;
    z-index: 100;
  `;
  const MainBlock = styled.div`
    width: 600px;
  `;

  useEffect(() => {
    chart();
  }, []);
  return (
    <MainBlock>
      <Container>
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
      </Container>
    </MainBlock>
  );
}
