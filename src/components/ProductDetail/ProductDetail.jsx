import React, { useContext } from 'react';
import { GlobalData } from '../../context/GlobalContext';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

  const {data}=useContext(GlobalData);
const {id}=useParams();
const myDetailedProduct=data.find((item)=>item.id===parseInt(id))
  return (
    <div>
      <div className="card mb-3" style={{maxWidth: '540px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={myDetailedProduct.image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{myDetailedProduct.title}</h5>
              <p>{myDetailedProduct.price} Euro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
