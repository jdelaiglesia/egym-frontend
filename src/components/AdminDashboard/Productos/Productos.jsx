import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../helpers/axios";
import IconDelete from "../Icons/IconDelete";
import IconEdit from "../Icons/IconEdit";

function Productos() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({
    option: "",
    order: "",
  });

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios("/products")
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((error) => window.alert(error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  useEffect(() => {
    if (filter.option && filter.order) {
      axios(`products/filters?option=${filter.option}&order=${filter.order}`)
        .then(({ data }) => {
          setProducts(data);
        })
        .catch((error) => window.alert(error));
    }
  }, [filter]);

  const handleEdit = (product) => {
    navigate("/dashboard/product/edit", { state: { product } });
  };

  const handleDelete = (id) => {
    axios
      .delete(`/product/${id}`)
      .then((res) => {
        getProducts();
      })
      .catch((error) => console.log(error.response.data.message));
  };

  return (
    <div className="flex flex-col bg-base-100 h-screen w-full">
      <div className="flex gap-2 absolute justify-center top-0 z-10 inset-x-[40%] p-1 mt-1">
        <label className="flex w-full max-w-xs gap-2">
          <select
            onChange={handleChange}
            value={filter.option}
            name="option"
            className="select select-bordered"
          >
            <option hidden>Opcion</option>
            <option value="name">Nombre</option>
            <option value="price">Precio</option>
            <option value="stock">Stock</option>
          </select>
          <select
            onChange={handleChange}
            value={filter.order}
            name="order"
            className="select select-bordered"
          >
            <option hidden>Orden</option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </label>
      </div>
      <div className="overflow-hidden w-full ">
        <table className="table table-zebra bg-transparent mt-2 ml-2">
          <thead>
            <tr>
              <th className="text-base p-2 pl-4">Imagen</th>
              <th className="text-base p-2">Nombre</th>
              <th className="text-base p-2">Categoria</th>
              <th className="text-base p-2">Precio</th>
              <th className="text-base p-2">Stock</th>
              <th className="text-base p-2 pl-10">Accion</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((p) => {
              return (
                <tr>
                  <td>
                    <img src={p.url_image} alt={p.name} className="w-16" />
                  </td>
                  <td className="font-bold text-primary">{p.name}</td>
                  <td>{p.category.name}</td>
                  <td className="font-bold text-primary">${p.price}</td>
                  <td
                    className={`font-bold ${
                      p.stock > 5
                        ? "text-success"
                        : p.stock > 3
                        ? "text-warning"
                        : "text-error"
                    }`}
                  >
                    {p.stock}
                  </td>
                  <td className="flex">
                    <button
                      onClick={() => {
                        handleEdit(p);
                      }}
                      className="btn bg-transparent border-none shadow-none m-1 hover:bg-primary hover:text-black"
                    >
                      <IconEdit />
                    </button>

                    <button
                      onClick={() => {
                        handleDelete(p._id);
                      }}
                      className="btn bg-transparent border-none shadow-none m-1 text-primary hover:bg-error hover:text-white"
                    >
                      <IconDelete />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Productos;
