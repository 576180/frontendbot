import { useState, useCallback } from "react";
import InputArrowIcon from "../../../assets/images/InputArrow.svg";
import './input.css'
import { useContext } from "react";
import { AppContext } from "../../../context/context";
// import inputarrow from '../../assests/inputarrow.png'
// import inputaerrowsvg from '../../Assets/inputarrow1.svg'


const Inputbox = () => {
  const { queryResponseApiCallinrgMethod, setResponseArray } = useContext(AppContext);
  const [inputValue, setInputValue] = useState("");

  const handleFunctionCallingOnkeyPress = (inputValue) => {
    if (inputValue) {
      queryResponseApiCallinrgMethod(inputValue);
      setResponseArray((pre) => [...pre, { from: "user", text: inputValue }]);
      setInputValue("");
    }
  };

  return (
    <div className="outer-div-input">
        <input
          autoFocus={true}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="textbox"
          value={inputValue}
          className="inputBox-text-item"
          placeholder="Type here..."
          onKeyDown={(e) =>
            e.keyCode === 13 ? handleFunctionCallingOnkeyPress(inputValue) : ""
          }
        />

        <button
          onClick={() => {
            queryResponseApiCallinrgMethod(inputValue);
            setResponseArray((pre) => [
              ...pre,
              { from: "user", text: inputValue },
            ]);
            setInputValue("");
          }}
          className="input-button-chat"
        >
          <img
            className="inputimg"
            src={InputArrowIcon}
            alt="."
          />
        </button>
    </div>
  );
};

export default Inputbox;
