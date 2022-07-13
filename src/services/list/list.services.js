import axios from "axios";

const getProductListService = async () => {
  const response = await axios.get("https://nonchalant-fang.glitch.me/listing");
  let success = false;
  if (response.status === 200 || response.status === 201) success = true;
  return { response: response.data, success: success };
};
export { getProductListService };
