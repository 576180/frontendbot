import { createContext, useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AppContext = createContext()

// const APIENDPOINT =  "https://asc-ir-backend.azurewebsites.net/qna"
const APIENDPOINT = "http://168.62.23.44:8080/sunnah_bot"


const Context = ({ children }) => {
  const [loader, setLoder] = useState()
  const [langeuage, setLangage] = useState("english")

  // const notify = () => {
  //   toast('Loading ....', {
  //     position: "top-center",
  //     // autoClose: 5000,
  //     hideProgressBar: true,
  //     // closeOnClick: true,
  //     // pauseOnHover: true,
  //     // draggable: true,
  //     // progress: undefined,
  //     theme: "light",
  //   });
  // }

  const [responseAraay, setResponseArray] = useState([{ text: "Hi this is Indian Railways, How can I assist you ?", from: "bot" }]);
  const [sessionId, setSessionID] = useState(0)

  const [documentList, setDocumentList] = useState()
  const [response, setReponse] = useState()


  console.log(documentList)


  useEffect(() => {
    let createSessionID = Date.now();
    setSessionID(createSessionID)
    // listApiCallung();
  }, [])

  //list btn api calling
  const handleBtnSelectAPICall = (select) => {
    // notify()
    var formdata = new FormData();
    formdata.append("query", select);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch(APIENDPOINT, requestOptions)
      .then(response => response.json())
      .then(result => {
        setReponse(result)
        toast.dismiss()
      })
      .catch(error => console.log('error', error));
  }


  //query chat bot.
  const queryResponseApiCallinrgMethod = async (userInp) => {
    setLoder(true)
    // console.log(userInp)

    // var formdata = new FormData();

    // formdata.append("Question", userInp);

    // var requestOptions = {
    //   method: 'POST',

    //   body: formdata,
    //   redirect: 'follow'
    // };


    // var formdata = new FormData();
    // formdata.append("client_name", "indian-railways");
    // formdata.append("query", userInp);
    // formdata.append("conversation_id", "ccbot");
    // formdata.append("language", "english");
    // formdata.append("user_location", "India");
    // formdata.append("length", "500");

    // var requestOptions = {
    //   method: 'POST',
    //   body: formdata,
    //   redirect: 'follow'
    // };
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "Question": userInp
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://168.62.23.44:8080/sunnah_bot", requestOptions)


      .then(response => response.json())
      .then(result => {
        setLoder(false)
        setResponseArray((pre) => [...pre, { from: "bot", text: result.Answer, pdfLink: result.References }]);

      })
      .catch(error => console.log('error', error));

  };

  const listApiCallung = () => {
    // notify();
    fetch("https://eka-lite.azurewebsites.net/list_documents")
      .then(response => response.json())
      .then(result => {
        setDocumentList(result.documents)
        toast.dismiss()
      })
      .catch(error => console.log('error', error));
  }


  return (
    <AppContext.Provider value={{ langeuage, setLangage, response, sessionId, setSessionID, responseAraay, setResponseArray, queryResponseApiCallinrgMethod, loader, setLoder, documentList, setDocumentList, handleBtnSelectAPICall }}>
      {children}
      <ToastContainer />
    </AppContext.Provider>
  )
}

// const GlobalState = () => useContext(AppContext)
export { Context, AppContext }

// {message : "", origin : "bot"}