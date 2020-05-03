import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./css/main.css";
import Main from "./Main";
import Detail from "./Detail";

import sem2b from "./data/sem2b";
import sem2a from "./data/sem2a";
import sem2c from "./data/sem2c";
import sem4b from "./data/sem4b";
import sem4a from "./data/sem4a";
import sem6b from "./data/sem6b";
import sem6a from "./data/sem6a";

import ReactGA from "react-ga";

let conditionalDetail;

function App() {
  let [currentClass, setClass] = useState();
  let [visible, setVisible] = useState("main");

  const trackingId = "UA-165400154-1";
  ReactGA.initialize(trackingId);

  function clickHandler(pos) {
    setClass(pos);
    // This setClass is called only to tell react to rerender the component

    console.log(currentClass);
    switch (pos) {
      case "sem2a":
        conditionalDetail = <Detail data={sem2a} stateHandler={stateHandler} />;
        break;
      case "sem2b":
        conditionalDetail = <Detail data={sem2b} stateHandler={stateHandler} />;
        break;
      case "sem2c":
        conditionalDetail = <Detail data={sem2c} stateHandler={stateHandler} />;
        break;
      case "sem4a":
        conditionalDetail = <Detail data={sem4a} stateHandler={stateHandler} />;
        break;
      case "sem4b":
        conditionalDetail = <Detail data={sem4b} stateHandler={stateHandler} />;
        break;
      case "sem6a":
        conditionalDetail = <Detail data={sem6a} stateHandler={stateHandler} />;
        break;
      case "sem6b":
        conditionalDetail = <Detail data={sem6b} stateHandler={stateHandler} />;
        break;
      default:
        conditionalDetail = null;
    }

    ReactGA.event((pos) => {
      return {
        category: "Class open",
        action: pos,
      };
    });

    setVisible("detail");
  }

  function stateHandler(state) {
    setVisible(state);
  }

  return (
    <div className="App">
      <CSSTransition
        in={visible === "main"}
        unmountOnExit
        timeout={500}
        classNames="app-main"
      >
        <div className="main">
          <Main clickHandler={clickHandler} />
        </div>
      </CSSTransition>

      <CSSTransition
        in={visible === "detail"}
        unmountOnExit
        timeout={500}
        classNames="app-detail"
      >
        <div className="detail">{conditionalDetail}</div>
      </CSSTransition>
    </div>
  );
}

export default App;
