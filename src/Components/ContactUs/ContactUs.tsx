import React, { useState } from "react";
import "./ContactUs.css";

import { FormInfo } from "../utils/FormUtils";

export const ContactUs = () => {
  const [myFormData, setMyFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const userTypedSomething = (
    e: React.FormEvent<HTMLInputElement>,
    fieldName: string,
    setMyFormData: React.Dispatch<React.SetStateAction<FormInfo>>,
    myFormData: FormInfo
  ) => {
    console.log("user Typed Something ");
    console.log((e.target as HTMLInputElement).value);

    setMyFormData({
      ...myFormData,
      [fieldName]: (e.target as HTMLInputElement).value,
    });
    console.log(myFormData);
  };

  return (
    <div>
      <h1>ContactUs</h1>
      <div className="ContactForm">
        <input
          type="text"
          onInput={(e) =>
            userTypedSomething(e, "fname", setMyFormData, myFormData)
          }
          placeholder="First Name"
        />
        <input
          type="text"
          onInput={(e) =>
            userTypedSomething(e, "lname", setMyFormData, myFormData)
          }
          placeholder="Last Name"
        />
        <input
          type="text"
          onInput={(e) =>
            userTypedSomething(e, "phone", setMyFormData, myFormData)
          }
          placeholder="Phone"
        />
        <input
          type="text"
          onInput={(e) =>
            userTypedSomething(e, "email", setMyFormData, myFormData)
          }
          placeholder="email"
        />
        <input
          type="text"
          onInput={(e) =>
            userTypedSomething(e, "msg", setMyFormData, myFormData)
          }
          placeholder="message"
        />
        <input type="button" value="Submit" />
      </div>
    </div>
  );
};

// // this is forbidden
// <input type="text" id="myInput" />
// document.querySelector("#muDiv")?.innerHTML = "<div>Hi</div>"
// // this is NOT forbidden, but it is not in a React way
// document.querySelector("#myInput")?.value = "<div>Hi</div>"

// ContactUs
// first name
// last name
// phone
// email
// message

// submit button
