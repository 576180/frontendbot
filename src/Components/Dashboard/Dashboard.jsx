import React, { useContext, useState } from "react";
import { AppContext } from "../../context/context";

import Modal from "react-bootstrap/Modal";
import "./dash.css";
import Pdfviewer from "../pdfviewer/pdfviewer";
import Example from "../modal/modal";
const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [docUrl, setDocUrl] = useState("");
  const { response, documentList, handleBtnSelectAPICall } =
    useContext(AppContext);

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        {/* Sidebar content goes here */}

        <h2>Document List</h2>
        <ul className="ul">
          {!!documentList &&
            documentList.map((ans, index) => (
              <li
                onClick={() => handleBtnSelectAPICall(ans.name)}
                className="file-names"
                key={index}
              >
                <div className="text1 ">
                  {" "}
                  {ans.name} <span className="file-cat">{ans.category}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
      {!!response && response ? (
        <>
          <div className="main-content">
            <div className="widthnavbar">
              <div>Document metadata :</div>
              <button
                onClick={() => {
                  setShow(true);
                  setDocUrl(response.sas_url);
                }}
                className="buttonvss"
              >
                Preview Document
              </button>
            </div>
            <div className="mc-left">
              {!!response && (
                <div className="mc-body">
                  <div>
                    <span className="span">Category :</span> {response.category}
                  </div>
                  <div>
                    <span className="span">Key Phrases :</span>
                    {response["key-phrases"]?.map((elem) => (
                      <li>{elem}</li>
                    ))}
                  </div>
                  <div>
                    <span className="span">Summary : </span>
                    {response.summary}
                  </div>
                  <div>
                    <span className="span">Upload Date : </span>
                    {response.upload_date}
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="imgg">
          <img
            className="centerimg"
            width={350}
            src="https://img.freepik.com/premium-vector/flat-design-content-marketing-strategy_108061-1237.jpg?w=740"
            alt=""
          />
        </div>
      )}
      <Example show={show} setShow={setShow} docUrl={docUrl} />
    </div>
  );
};

export default Dashboard;
