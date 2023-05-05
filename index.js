import { useState } from "react";

import get from "lodash.get";
import set from "lodash.set";

export const useAlert = ({ defaultState = {} }) => {
  // eslint-disable-next-line
  const [alerts, setAlerts] = useState(() => Object.assign({}, defaultState));

  const getAlert = (name) => get(alerts, name);

  const updateAlert = (name, value) => {
    setAlerts((old) => Object.assign({}, set(old, name, value)));
  };

  return {
    alerts,
    updateAlert,
    getAlert,
  };
};
export default useAlert;
