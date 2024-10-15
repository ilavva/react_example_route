export type FormInfo = {
  fname: string;
  lname: string;
  phone: string;
  email: string;
  msg: string;
};

export const userTypedSomething = (
  e: React.FormEvent<HTMLInputElement>,
  fieldName: string,
  setFormDataFunc: React.Dispatch<React.SetStateAction<FormInfo>>,
  theFormInfo: FormInfo
) => {
  console.log("user Typed Something ");
  console.log((e.target as HTMLInputElement).value);

  setFormDataFunc({
    ...theFormInfo,
    [fieldName]: (e.target as HTMLInputElement).value,
  });
  console.log(theFormInfo);
};
