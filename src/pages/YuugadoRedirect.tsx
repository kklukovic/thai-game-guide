import { useEffect } from "react";

const AFFILIATE_URL =
  "https://tinyurl.com/infiaff?bid=115&lid=112&aid=SRS3VKBJj&cid=7829";

const YuugadoRedirect = () => {
  useEffect(() => {
    window.location.replace(AFFILIATE_URL);
  }, []);

  return null;
};

export default YuugadoRedirect;
