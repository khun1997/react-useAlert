import { useState } from "react";

import get from "lodash.get";
import set from "lodash.set";

const v = (o, k) => o[k] !== undefined;

export const useAlert = ({ defaultState = {} }) => {
    // eslint-disable-next-line
  const [alerts, setAlerts] = useState(() => Object.assign({}, defaultState));

  const getAlert = (name) => get(alerts, name);

  const updateAlert = (name, value) => {
    setAlerts((old) => Object.assign({}, set(old, name, value)));
  };

  const textarea = ({ name, onChange = () => {} }) => ({
    onChange: (e) => {
      const value = e.target.value;

      updateAlert(name, value);

      onChange(e);
    },
    value: getAlert(name) || "",
    name,
  });
  const input = ({ name, type = "text", onChange = () => {} }) => ({
    onChange: (e) => {
      let value = null;

      //primitive values
      if (v(e, "value")) {
        value = e.value;
      }

      //normal value
      if (v(e, "target")) {
        value = e.target.value;
      }

      updateAlert(name, value);

      onChange(e);
    },
    value: getAlert(name) || "",
    name,
    type,
  });
  return {
    alerts,
    register: {
      textarea,
      input,
    },
    updateAlert,
    getAlert,
  };
};
