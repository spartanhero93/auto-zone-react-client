import { useEffect } from "react";
import { useDispatch} from 'react-redux'
import Products from "./products.json";
import { loadAllProducts, addProduct } from './store/reducer'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadAllProducts)
  }, []);

  //const [addItem, handleItem] = useState({});

  return (
    <div>
        {Products.map((i) => (
          <div>

            <div style={{display: 'flex;'}} >
              <div>
                <img src={i.image} alt={i.productDescription} />
              </div>
              <div>
                {i.productDescription}
                <div>PartNo: <b>{i.partNumber}</b></div>
                <span>{i.pricing.list}</span>
              </div>
            </div>
            <div>
              <button>Add to Cart</button>
            </div>


          </div>
        ))}
    </div>
  );
}

export default App;
