import { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import Products from "./products.json";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch()
  }, {});

  const [addItem, handleItem] = useState({});

  return (
    <div>
      <p>
        <b>Start Writing code here.</b>
        {Products.map((i) => (
          <div>{i.brandName}</div>
        ))}
      </p>
    </div>
  );
}

export default App;
