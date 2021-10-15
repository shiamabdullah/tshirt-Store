import { API } from "../../backend";
import { cartEmpty } from "../../core/helper/cartHelper";

export const signup = (user) => {
  return (fetch(`${API}user/`),
  {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

//could go on with json type signup but using form field instead
export const signin = (user) => {
  const formData = new FormData();

  for (const name in user) {
    formData.append(name, user[name]);
  }
  return fetch(`${API}user/login/`, {
    method: "POST",
    body: FormData,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
