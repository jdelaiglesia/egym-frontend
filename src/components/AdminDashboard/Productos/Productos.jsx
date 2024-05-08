import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axios } from "../../../helpers/axios";
import IconDelete from "../Icons/IconDelete";
import IconEdit from "../Icons/IconEdit";
import useToast from "../../../hooks/useToast";
import { ToastContainer } from "react-toastify";

function Productos() {
  const { ToastError } = useToast();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({
    option: "",
    order: "",
  });

  const getProducts = () => {
    axios("/products")
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((error) => ToastError("Oh no, error en el servidor", 1350));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (filter.option && filter.order) {
      axios(`products/filters?option=${filter.option}&order=${filter.order}`)
        .then(({ data }) => {
          setProducts(data);
        })
        .catch((error) => ToastError("Oh no, error en el servidor", 1350));
    }
  }, [filter]);

  const handleEdit = (product) => {
    navigate("/dashboard/product/edit", { state: { product } });
  };

  const handleProductDetail = (product) => {
    navigate(`/shop/product/${product._id}`);
  };
  const handleDelete = (id) => {
    axios
      .delete(`/product/${id}`)
      .then((res) => {
        getProducts();
      })
      .catch((error) => ToastError("Oh no, error en el servidor", 1350));
  };

  return (
    <div className="flex flex-col w-full h-screen bg-base-100 ">
      <div className="flex gap-2 absolute justify-center top-0 z-10 md:inset-x-[40%] lg:left-0 p-1 mt-1 xs:right-4">
        <label className="flex w-full max-w-xs gap-2 ">
          <select
            onChange={handleChange}
            value={filter.option}
            name="option"
            className="select select-bordered xs:w-20 sm:w-40"
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
            className="select select-bordered xs:w-20 sm:w-40"
          >
            <option hidden>Orden</option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </label>
      </div>
      <div className="w-full overflow-auto ">
        <table className="table mt-2 ml-2 bg-transparent table-zebra">
          <thead>
            <tr className="flex items-center sm:justify-evenly xs:justify-between xl:justify-between xs:w-full sm:w-[98%] md:w-[98%]">
              <th className="p-2 pl-4 xs:p-0 xs:text-xs sm:text-base sm:block xs:hidden sm:w-18">
                Imagen
              </th>
              <th className="p-2 sm:p-0 xs:p-0 xs:text-xs xs:w-16 sm:text-base sm:w-36 m:pl-2">
                Nombre
              </th>
              <th className="p-2 text-base sm:p-0 xs:hidden xs:p-0 xs:text-xs sm:text-base sm:block sm:w-20 ">
                Categoria
              </th>
              <th className="p-2 text-base sm:p-0 xs:p-0 xs:text-xs xs:w-16 sm:text-base">
                Precio
              </th>
              <th className="p-2 text-base sm:p-0 xs:p-0 xs:text-xs xs:w-12 sm:text-base">
                Stock
              </th>
              <th className="p-2 pl-10 text-base sm:p-0 xs:p-0 xs:text-xs sm:text-base xs:w-16 text-start sm:w-24">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((p) => {
              return (
                <tr className="flex items-center sm:justify-evenly xs:justify-between xl:justify-between xs:w-full sm:w-[98%]">
                  <td className="p-0 xs:hidden sm:block sm:w-10 xl:w-14">
                    <img
                      src={p.url_image}
                      alt={p.name}
                      className="p-0 sm:w-10 xl:w-16 "
                    />
                  </td>
                  <td className="font-bold text-primary xs:p-0 xs:text-xs xs:pl-2 sm:text-base sm:w-36 xs:w-12">
                    <button onClick={()=>{handleProductDetail(p)}}>{p.name}</button>
                  </td>
                  <td className="xs:hidden sm:block sm:text-base sm:p-0 sm:w-20 ">
                    {p.category.name}
                  </td>
                  <td className="sm:font-bold sm:text-primary xs:text-xs xs:p-2 xs:w-16 sm:text-base">
                    ${p.price}
                  </td>
                  <td
                    className={`font-bold xs:text-xs xs:p-0 sm:w-10 sm:text-center ${
                      p.stock > 5
                        ? "text-success"
                        : p.stock > 3
                        ? "text-warning"
                        : "text-error"
                    }`}
                  >
                    {p.stock}
                  </td>
                  <td className="flex gap-2 xs:p-1 xs:w-20 sm:w-28 sm:p-2">
                    <button
                      onClick={() => {
                        handleEdit(p);
                      }}
                      className="m-0 bg-transparent border-none shadow-none btn hover:bg-primary hover:text-black xs:p-0 sm:p-2 "
                    >
                      <IconEdit />
                    </button>

                    <button
                      onClick={() => {
                        handleDelete(p._id);
                      }}
                      className="m-0 bg-transparent border-none shadow-none btn text-primary hover:bg-error hover:text-white xs:p-0 sm:p-2 "
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
      <ToastContainer />
    </div>
  );
}

export default Productos;
