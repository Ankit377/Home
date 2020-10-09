import React, { useEffect, useState } from "react";

import axios from "axios";
import firebase from "./firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

var uiConFig = {
  signInFlow: "popup",
  signInSuccessUrl: "https://ankit377.github.io/schloarshipacedemy/",
  signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
  defaultCountry: "IN",

  callbacks: {
    signInSuccessWithAuthResult: () => {
      return true;
    },
  },
};

const EnterNumber = () => {
  // useEffect(() => {
  //   const authObserver = firebase.auth().onAuthStateChanged((user) => {
  //     setUser(user);
  //   });
  // });

  // const [user, setUser] = useState(null);
  return (
    <>
      <div>
        <h1>login/signup</h1>
        <StyledFirebaseAuth
          uiConfig={uiConFig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </>
  );
};

export default EnterNumber;

// import ButtonAppBar from "./ButtonAppBar";
// import Input from "./Input";
// import Btn from "./Btn";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import firebase from "./firebase";

// //import "firebase/<>";

// import auth from "./auth";
// import { propTypes } from "react-bootstrap/esm/Image";

// export default function EnterNumber(props) {
//   const { register, handleSubmit, errors } = useForm();

//   function onSubmit() {
//     axios.post();
//   }

//   return (
//     <>
//       <ButtonAppBar title="Enter Mobile Number" />
//       <div
//         className="enterNumber"
//         style={{ marginTop: "50%", marginLeft: "1rem" }}
//       >
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div id="recaptcha-container"></div>
//           <input
//             type="number"
//             placeholder="Enter Mobile Number"
//             name="mobilenumber"
//             ref={register({ required: true, maxLength: 10 })}
//           />7

//           <input
//             type="submit"
//             onClick={() => {
//               auth.login(() => {
//                 props.history.push("/src/App.js");
//               });
//             }}
//           />
//           {/* <Link to="/verifyotp">
//             <input type="submit" />
//           </Link> */}
//         </form>
//       </div>
//     </>
//   );
// }
