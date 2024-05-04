import React, { useEffect, useState } from "react";
import { axios } from "../../../helpers/axios";
import IconDelete from "../Icons/IconDelete";
import IconAdmin from "../Icons/IconAdmin";
import IconMember from "../Icons/IconMember";
import useToast from "../../../hooks/useToast";
import { ToastContainer } from "react-toastify";

function Usuarios() {
  const { ToastError } = useToast();
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios("/users")
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((error) => ToastError("Oh no, error en el servidor", 1350));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/user/${id}`).then((res) => {
      getUsers();
    });
  };

  const handlePutRank = (user) => {
    const rank = user.rank === 10 ? 0 : 10;
    axios.put(`/user/rank/${user._id}`, { rank }).then((res) => {
      getUsers();
    });
  };
  const handlePutMember = (user) => {
    const member = !user.is_member;
    axios.put(`/user/member/${user._id}`, { member }).then((res) => {
      getUsers();
    });
  };
  return (
    <>
      <div className="overflow-hidden w-full ">
        <table className="table table-zebra bg-transparent mt-2 ml-2">
          <thead className="max-w-md w-full">
            <tr>
              <th className="text-base p-2 max-w-xs overflow-auto">Nombre</th>
              <th className="text-base p-2 max-w-xs overflow-auto">Email</th>
              <th className="text-base p-2 max-w-xs overflow-auto">
                Direccion
              </th>
              <th className="text-base p-2 max-w-xs overflow-auto">Telefono</th>
              <th className="text-base p-2 max-w-xs overflow-auto">Rango</th>
              <th className="text-base p-2 pl-10 max-w-xs overflow-auto">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="max-w-md w-full">
            {users?.map((u) => {
              return (
                <tr>
                  <td className="font-bold text-primary max-w-xs overflow-auto">
                    {u.name} {u.last_name}
                  </td>
                  <td className="max-w-xs overflow-auto">{u.email}</td>
                  <td className="max-w-40 h-16 overflow-auto flex-wrap text-xs">
                    {u.address ? u.address : "Sin dirección"}
                  </td>
                  <td className="max-w-xs overflow-auto">
                    {u.phone_number.toString().length > 5
                      ? u.phone_number
                      : "Sin numero"}
                  </td>
                  <td
                    className={`font-bold max-w-xs overflow-auto ${
                      u.rank === 10
                        ? "text-primary"
                        : u.is_member
                        ? "text-success"
                        : null
                    }`}
                  >
                    {u.rank === 10
                      ? "Administrador"
                      : u.is_member
                      ? "Miembro"
                      : "No registrado"}
                  </td>
                  <td className="flex max-w-xs overflow-auto">
                    <button
                      onClick={() => {
                        handlePutMember(u);
                      }}
                      className={`btn bg-transparent border-none shadow-none m-1 hover:bg-${
                        u.is_member ? "success" : "gray-400"
                      } ${
                        u.is_member ? "text-success hover:text-black"  : null
                      }`}
                    >
                      <IconMember />
                    </button>
                    <button
                      onClick={() => {
                        handlePutRank(u);
                      }}
                      className={`btn bg-transparent border-none shadow-none m-1 hover:bg-${
                        u.rank === 10 ? "primary" : "gray-400"
                      } ${
                        u.rank === 10 ? "text-primary hover:text-black" : null
                      }`}
                    >
                      <IconAdmin />
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(u._id);
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
        <ToastContainer />
      </div>
    </>
  );
}

export default Usuarios;
