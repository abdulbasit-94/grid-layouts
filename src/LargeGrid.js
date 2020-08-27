import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function LargeGrid() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  const getBlocksRow = () => {
    let blocks = [];
    blocks.push(<div className="padding"></div>);
    for (let i = 1; i < windowWidth - 32; i += 8) {
      blocks.push(<div className="block" id={i}></div>);
    }
    blocks.push(<div className="padding"></div>);
    return blocks;
  };

  const getColumns = () => {
    let columns = [];
    for (let i = 1; i < windowHeight; i += 10) {
      columns.push(<div className="row">{getBlocksRow()}</div>);
    }
    return columns;
  };

  return (
    <>
      <div className="grid-layout2">
        <p className="dimensions">
          {windowWidth} x {windowHeight}
        </p>
        <div className="padding"></div>
        <div className="box-container">
          <div className="full-width"></div>
          <div className="full-width full-width-box">
            <div className="box"></div>
            <div className="divider"></div>
            <div className="box"></div>
          </div>
          <div className="multiple-box">
            <div className="full-width full-width-box">
              <div className="box"></div>
              <div className="divider"></div>
              <div className="box"></div>
            </div>
            <div className="divider"></div>
            <div className="full-width full-width-box">
              <div className="box"></div>
              <div className="divider"></div>
              <div className="box"></div>
            </div>
          </div>
        </div>
        <div className="padding"></div>
      </div>
    </>
  );
}

export default LargeGrid;
