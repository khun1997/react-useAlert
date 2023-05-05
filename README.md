## About

Alert by clicking button


## Installation
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