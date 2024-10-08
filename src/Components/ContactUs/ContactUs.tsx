import React, { useState } from "react";
import "./ContactUs.css";
export const ContactUs = () => {
  const [myFormData, setMyFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const userTypedSomething = (e: React.FormEvent, fieldName: string) => {
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
      <div>
        <input
          type="text"
          onInput={(e) => userTypedSomething(e, "fname")}
          placeholder="First Name"
        />
        <input
          type="text"
          onInput={(e) => userTypedSomething(e, "lname")}
          placeholder="Last Name"
        />
        <input
          type="text"
          onInput={(e) => userTypedSomething(e, "phone")}
          placeholder="Phone"
        />
        <input
          type="text"
          onInput={(e) => userTypedSomething(e, "email")}
          placeholder="email"
        />
        <input
          type="text"
          onInput={(e) => userTypedSomething(e, "msg")}
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
