import { useState } from "react";

function Filters({ products, setProducts, update, setUpdate, setPage }) {
    const [filters, setFilters] = useState({
        category: "",
        order: "",
    });

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const filterProducts = () => {
        if (filters.category && filters.order) {
            const filter_category = products.filter(
                (product) => product.category === filters.category
            );
            if (filters.order == "1-10") {
                setProducts(filter_category.sort((a, b) => a.price - b.price));
                setPage(1);
            } else if (filters.order == "10-1") {
                setProducts(filter_category.sort((a, b) => b.price - a.price));
                setPage(1);
            } else if (filters.order == "A-Z") {
                setProducts(
                    filter_category.sort((a, b) => a.name.localeCompare(b.name))
                );
                setPage(1);
            } else if (filters.order == "Z-A") {
                setProducts(
                    filter_category.sort((a, b) => b.name.localeCompare(a.name))
                );
                setPage(1);
            }
        } else if (filters.category) {
            setProducts(
                products.filter(
                    (product) => product.category === filters.category
                )
            );
            setPage(1);
        } else if (filters.order == "1-10") {
            setProducts(products.sort((a, b) => a.price - b.price));
            setPage(1);
        } else if (filters.order == "10-1") {
            setProducts(products.sort((a, b) => b.price - a.price));
            setPage(1);
        } else if (filters.order == "A-Z") {
            setProducts(products.sort((a, b) => a.name.localeCompare(b.name)));
            setPage(1);
        } else if (filters.order == "Z-A") {
            setProducts(products.sort((a, b) => b.name.localeCompare(a.name)));
            setPage(1);
        }

        setUpdate(!update);
    };

    return (
        <div className="dropdown flex justify-center pt-10">
            <div tabIndex={0} role="button" className="btn m-1">
                Filtros
            </div>

            <div className="dropdown-content top-32 z-[1] menu p-10 w-[20rem] shadow-xl bg-base-100 rounded-box">
                {/* Filtro de Orden */}

                <div className="flex flex-col gap-4 items-center">
                    <label htmlFor="order">Ordenar por:</label>
                    <select
                        className="select select-bordered select-sm w-full max-w-xs"
                        name="order"
                        onChange={handleChange}
                    >
                        <option value="A-Z">Alfabeticamente A-Z</option>
                        <option value="Z-A">Alfabeticamente Z-A</option>
                        <option value="1-10">Precio, menor a mayor</option>
                        <option value="10-1">Precio, mayor a menor</option>
                    </select>
                </div>

                <div className="divider"></div>

                {/* Filtro de Categoria */}

                <div className="flex flex-col gap-4 items-center">
                    <label htmlFor="category">Categoria:</label>
                    <select
                        className="select select-bordered select-sm w-full max-w-xs"
                        name="category"
                        onChange={handleChange}
                    >
                        <option value="Proteinas">Proteinas</option>
                        <option value="Creatinas">Creatinas</option>
                        <option value="Accesorios">Accesorios</option>
                        <option value="Aminoacidos">Aminoacidos</option>
                        <option value="Multivitaminicos">
                            Multivitaminicos
                        </option>
                    </select>
                </div>

                <div className="divider"></div>

                <button
                    className="btn"
                    onClick={() => {
                        filterProducts();
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Filters;
