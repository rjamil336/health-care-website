import { useEffect, useState } from "react";

const useServices = () => {
  const [serviceItem, setServiceItem] = useState([]);

  useEffect(() => {
    fetch("/service.json")
      .then((res) => res.json())
      .then((data) => setServiceItem(data));
  }, []);

  return [serviceItem];
};

export default useServices;
