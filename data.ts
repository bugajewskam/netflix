import { Item } from "./interface";


export const getData = async () : Promise<Item[]> => {
  return fetch("./data.json")
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            console.log(err);
        });

};

