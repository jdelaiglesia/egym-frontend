import { useParams } from "react-router-dom";
import { products_gym } from "../../api/data";
import { useState } from "react";

const ProductEdit = () => {
        

const { id } = useParams();
const product = products_gym.find((product) => product.id === Number(id));

//cambiar productEditE por el que se trae desde la DB
const [productEditE, setProductEditE] = useState({
    name: "Algo",
    price: "129090",
    available: false,
    category:"Creatina",
    description: "cargar en DB",
    quantity: "23",
})
const categorys = [
    {
        id: 1,
        name: "Proteinas"
    },
    {
        id: 2,
        name: "Creatinas"
    },
    {
        id: 3,
        name: "Accesorios"
    },
    {
        id: 4,
        name: "Multivitaminicos"
    },
    {
        id: 5,
        name: "Aminoacidos"
    }
];

const [available, setAvailable] = useState(productEditE.available)



const changeHandlerCategory = (event) => {
    const {value} = event.target;
    productEditE.category = value;
    setProductEditE(productEditE);
}

const changeHandlerAvailable = (event) => {
    const {value} = event.target;
    if (value === "Hab") {
        setAvailable(true);
    } else setAvailable(false);
    productEditE.available = !available;
    setProductEditE(productEditE);
}

const changeHandlerInputs = (event) => {
    const {name, value} = event.target;
    setProductEditE({...productEditE, [name]:value});
}

const submitHandler = (event) => {
    event.preventDefault();
    //axios.put("http://localhost:3001/edit:id",productEditE); //metodo para actualizar el producto, hay que hacer la conexion con la DB
    console.log(productEditE);
    return alert("Producto editado Correctamente");
}



if (!product) {
    return <div>Producto no encontrado!</div>;
}

return (
    <div className="flex justify-center items-center min-h-screen bg-base-100">
    <form onSubmit={(event) => {submitHandler(event)}}>
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
            <img src={product.url_image} alt={product.name} />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
                <div>
                    <label>Cambiar nombre</label>
                    <input type="text" name="name" value={productEditE.name} onChange={changeHandlerInputs}></input>
                </div>
            </h2> 
            <div>
                <select onChange={changeHandlerAvailable}defaultValue={"default"} >
                    <option value="default" disabled >Habilitar/Deshabilitar</option>
                    <option value="Hab">Habilitar</option>
                    <option value="Des" >Deshabilitar</option>
                </select>
                {available ? <p>Habilitado✅</p> : <p>Deshabilitado❌</p>}
            </div>
            
            <div>
                <label>Cambiar descripcion</label>
                <input type="tex-area" name="description" value={productEditE.description}  onChange={changeHandlerInputs}></input>
            </div>

            <div className="card-actions justify-left">
                <div>
                    <label>Cambiar categoria: </label>
                    <select onChange={changeHandlerCategory}>
                        <option value="default" name="default" disabled >Cambiar categoria</option>
                        {categorys?.map((cat)=> {
                            return (
                                <option key={cat.id} id={cat.id} value={cat.name}>{cat.name}</option>
                            )
                        })}
                    </select>
                </div>

                <div className="badge badge-outline">Categoria anterior: {product.category}
                </div>
                <div>
                    <label>Cambiar cantidad de disponibles</label>
                    <input type="number" name="quantity" value={productEditE.quantity} onChange={changeHandlerInputs}></input>
                </div>

                <div>
                    <label>Cambiar precio: $</label>
                    <input type="number" name="price" value={productEditE.price} onChange={changeHandlerInputs}></input>
                </div>
            </div>

            <button type="submit" className="btn btn-xs sm:btn-sm md:btn-md lg:btn">
                Confirmar Cambios
            </button>
            
        </div>
    </div>
    </form>
</div>

);
};

export default ProductEdit;