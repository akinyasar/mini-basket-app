import axios from "axios";

const submitOrderService = async (basket) => {
  return await axios
    .post("https://nonchalant-fang.glitch.me/order", basket)
    .then((response) => {
      return {
        response: response.data.message,
        success: response.data.status === "success" ? true : false,
        status: response.status,
      };
    })
    .catch((error) => {
      return {
        response: error.response.data.message,
        success: false,
        status: error.response.status,
      };
    });
};
export { submitOrderService };
