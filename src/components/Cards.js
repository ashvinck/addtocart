import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import data from '../data/data.json';
import Rating from '@mui/material/Rating';


// Card contents and Layout
export function Cards({ manageItems}) {
  return (
    <div className="product-info-container">
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {data.map(info => (
            <div className="col mb-5">
              <div className="card h-100">
              {/* Sale Badge */}
              {info.onSale === "yes" ? <Badge className="badge" bg="dark" >Sale</Badge> : null}
                {/* Product image */}
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                {/* Product details */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* Product name */}
                    <h5 className="fw-bolder">{info.title}</h5>
                    {/* rating */}
                    { info.rating > 0 ? <div className="star-rating"> <Rating name="read-only" value={info.rating} readOnly /></div> : null}
                    {/* Product price */}
                    <span class= {info.NewPrice !== '' ? "text-muted text-decoration-line-through" : "price" }>{info.basePrice}</span>{' '} {info.NewPrice}
                  </div>
                </div>
                {/* Product actions */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                  <Button className="addbutton" variant="outline-dark mt-auto" onClick={manageItems}>{info.buttonText}</Button>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
