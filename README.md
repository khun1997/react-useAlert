## About

Alert by clicking button


## Installation

install package via [npm](https://www.npmjs.com/package/react-use-models).

```
yarn i react-usealert

// or

npm i react-usealert
```



## Usage

```jsx
import { useAlert } from "react-usealert";

export default function App() {
  const { alerts } = useAlert({});

  return (
    <div>
      <button
        onClick={() => {
          alert((alerts));
        }}
      >
        Alert
      </button>
    </div>
  );
}


```