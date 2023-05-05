## About

Alert by clicking button



### Credit

0.1.0 Implementation inspired from [use-models](https://www.npmjs.com/package/use-models).



## Installation

install package via [npm](https://www.npmjs.com/package/react-use-models).

```
yarn i react-usealert

// or

npm i react-usealert
```



## Usage

```jsx
export default function App() {
  const { alerts, updateAlert, register } = useAlert({});

  useEffect(() => {
    setTimeout(() => updateAlert("name", ""), 3000);
  }, []);
  return (
    <div>
      <label>Text Area</label>
      <br />
      <textarea {...register.input({ name: "name" })} />

      <br />

      <button
        onClick={() => {
          alert((alerts, alerts.name));
        }}
      >
        Alert
      </button>
    </div>
  );
}

```