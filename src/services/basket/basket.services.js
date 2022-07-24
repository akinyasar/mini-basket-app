import axios from "axios";

const submitOrderService = async (basket) => {
  return await axios
    .post("https://nonchalant-fang.glitch.me/order", basket)
    .then((response) => {
      return {
        response: response.data.message,
        success: response.data.status === "success" ? true : false,
      };
    })
    .catch((error) => {
      return {
        response: error.response.data.message,
        success: false,
      };
    });
};
export { submitOrderService };
