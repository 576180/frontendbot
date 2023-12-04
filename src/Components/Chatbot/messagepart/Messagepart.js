import React, { useContext, useRef, useEffect, useState } from 'react';
import { AppContext } from '../../../context/context';
import TypingIndicator from "../../typingindicator/TypingIndicator.js";
import './msg.css'
import Example from '../../modal/modal';
import user from '../../../assets/images/user.png';
import train from '../../../assets/images/train.png'
import Accordion from 'react-bootstrap/Accordion';
import Markdown from "react-markdown";


const Messagepart = () => {

  const [show, setShow] = useState(false);
  const [docUrl, setDocUrl] = useState("");
  const { responseAraay, loader, setLoder } = useContext(AppContext);

  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };

  const anserCArdfortheRsponse = (msg) => {
    return <div className="main-text">{msg.text}</div>;
  };

  console.log(responseAraay, "jsdksjdksj");
  return (
    <div className="message-part-container">
      {responseAraay.map((msg, i) =>
        msg.from === "user" ? (
          <div
            className="user-message-container"
            key={i}
          >
            <div className="user_message">
              {msg.text}
            </div>
            <div><img src={user} alt='user-dp' className='user-dp' /></div>
          </div>
        ) : (
          msg.from === "bot" && (
            <div
              className="bot-message-container"
              key={i}
            >
              <div><img src={train} alt='train-dp' className='train-dp' /></div>
              <div className="bot_message">
                {/* {anserCArdfortheRsponse(msg)} */}

                <Markdown
                // remarkPlugins={[
                //   [remarkGfm],
                //   [remarkToc, { tight: true, maxDepth: 5 }],
                // ]}
                >
                  {msg.text}
                </Markdown>

                {console.log(msg.pdfLink, "hsjdhsjdhsdjh")}
                {
                  msg.pdfLink &&

                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>References</Accordion.Header>
                      <Accordion.Body>
                        {
                          msg.pdfLink.map(e =>
                            <>
                              <a href={e} onClick={() => {
                              }}> {e}</a>
                            </>
                          )
                        }
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                }

              </div>
            </div>
          )
        )
      )}
      <AlwaysScrollToBottom />
      {loader && <TypingIndicator />}
      <Example show={show} setShow={setShow} docUrl={docUrl} />
    </div>
  );
};

export default Messagepart;







