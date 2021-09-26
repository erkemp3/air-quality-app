import axios from "axios";

const getAirQuality = (searchText, setSummary, setErrorMessage) => {
  let endpoint = "https://api.openaq.org/v2/latest";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  return axios
    .get(endpoint)
    .then((response) => {
      setSummary(response.data.results[0]);
      setErrorMessage();
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("Please check your spelling and try again😊");
        console.error("Location is not valid", error);
      }
      if (status === 500) {
        setErrorMessage("Oops, server error, try again later.");
        console.error("Server error", error);
      }
    });
};

export default getAirQuality;
