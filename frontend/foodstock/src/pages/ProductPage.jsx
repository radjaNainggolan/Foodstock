import useGet from "../customHooks/useGet";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Loader from "../components/Loader";
import {BsCartPlus} from 'react-icons/bs'
const ProductPage = () => {

    const {id} = useParams();
    const {data, loading, error} = useGet('http://localhost:4000/products/'+id);
    const [open, setOpen] = useState(true);

    return (
        <>
            <Loader loading={loading}></Loader>
            {data && 
                <div className="product-page">
                    <div className="image-and-basic-info">
                        <img src={data[0].Src} alt="" />
                        <div className="basic-info">
                            <h2>{data[0].Name}</h2>
                            <p>{data[0].Description}</p>
                            <div className="price-and-btn">
                                <h1>{data[0].Price}&#x20AC;</h1>
                                <button><BsCartPlus size={20}></BsCartPlus></button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="additional-info">
                        <div>
                            <button onClick={()=> setOpen(true)}>Nutritional values</button>
                            <button onClick={()=> setOpen(false)}>Product info</button>
                        </div>
                        {open ? 
                        (
                            <div className="in">
                                <h2>Nutritional values at 100g/ml</h2>
                                <div className="items">
                                    <div className="item">
                                        <label htmlFor="">Energy :</label>
                                        <p>{data[0].Energy} kJ/kcal</p>
                                    </div>
                                    <div className="item">
                                        <label htmlFor="">Fats :</label>
                                        <p>{data[0].Fats} g</p>
                                    </div>
                                    <div className="item">
                                        <label htmlFor="">Saturated fats :</label>
                                        <p>{data[0].SaturatedFats} g</p>
                                    </div>
                                    <div className="item">
                                        <label htmlFor="">Protein :</label>
                                        <p>{data[0].Protein} g</p>
                                    </div>
                                    <div className="item">
                                        <label htmlFor="">Carbonhydrates :</label>
                                        <p>{data[0].Carbonhydrates} g</p>
                                    </div>
                                    <div className="item">
                                        <label htmlFor="">Sugar :</label>
                                        <p>{data[0].Sugar} g</p>
                                    </div>
                                    <div className="item">
                                        <label htmlFor="">Fibers :</label>
                                        <p>{data[0].Fibers} g</p>
                                    </div>
                                    <div className="item">
                                        <label htmlFor="">Salt :</label>
                                        <p>{data[0].Salt} g</p>
                                    </div>

                                </div>
                            </div>

                        ):(

                            <div className="add-info">
                                <h2>Product information</h2>
                                <div className="items">
                                    <div className="item">
                                        <label htmlFor="">Storage :</label>
                                        <p>{data[0].Storage}</p>
                                    </div>
                                
                                    <div className="item">
                                        <label htmlFor="">Made in :</label>
                                        <p>{data[0].MadeIn}</p>
                                    </div>
                                    
                                    <div className="item">
                                        <label htmlFor="">Producer :</label>
                                        <p>{data[0].Producer}</p>
                                    </div>
                                    
                                    <div className="item">
                                        <label htmlFor="">Import :</label>
                                        <p>{data[0].Import}</p>
                                    </div>
                                    
                                    <div className="item">
                                        <label htmlFor="">Ingredients :</label>
                                        <p>{data[0].Ingredients}</p>
                                    </div>
                                    
                                    <div className="item">
                                        <label htmlFor="">Expire date :</label>
                                        <p>{data[0].ExpireDate}</p>
                                    </div>
                                    
                                    <div className="item">
                                        <label htmlFor="">Alergens :</label>
                                        <p>{data[0].Alergens} </p>
                                    </div>
                                    
                                    <div className="item">
                                        <label htmlFor="">Alcohol :</label>
                                        <p>{data[0].Alcohol}</p>
                                    </div>
                                </div>
                            </div>
                        )
                        }
                    </div>
                </div>
            }
        </>
    );
}
 
export default ProductPage;