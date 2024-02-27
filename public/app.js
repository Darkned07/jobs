import { getData } from "./request.js";
import { updateUI } from "./updateUI.js";
getData("http://localhost:3000/jobs")
    .then((data) => {
    updateUI(data);
})
    .catch((error) => {
    console.log(error);
});
