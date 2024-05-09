import React, { useEffect, useState } from "react";
import { axios } from "../../../helpers/axios";
import IconDelete from "../Icons/IconDelete";
import IconAdmin from "../Icons/IconAdmin";
import IconMember from "../Icons/IconMember";
import useToast from "../../../hooks/useToast";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../../../hooks/useAuth";

function Usuarios() {
  const { ToastError } = useToast();
  const [users, setUsers] = useState([]);
  const { auth } = useAuth();

  const getUsers = () => {
    axios("/users", {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((error) => ToastError("Oh no, error en el servidor", 1350));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`/user/${id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((res) => {
        getUsers();
      });
  };

  const handlePutRank = (user) => {
    const rank = user.rank === 10 ? 0 : 10;
    axios
      .put(
        `/user/rank/${user._id}`,
        { rank },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      )
      .then((res) => {
        getUsers();
      });
  };
  const handlePutMember = (user) => {
    const member = !user.is_member;
    axios
      .put(
        `/user/member/${user._id}`,
        { member },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      )
      .then((res) => {
        getUsers();
      });
  };
  return (
    <div className="w-full overflow-y-auto ">
      <table className="table w-full bg-transparent sm:mt-2 sm:ml-2 table-zebra">
        <thead>
          <tr className="flex xs:justify-between xs:w-[98%]  gap-2 ">
            <th className="text-base xs:text-xs lg:text-sm xs:w-10 xs:p-0 md:p-2 xs:hidden md:block md:w-40 lg:ml-16">
              Nombre
            </th>
            <th className="text-base xs:text-xs lg:text-sm xs:p-0 md:p-2 xs:hidden md:block md:w-32">
              Email
            </th>
            <th className="text-base xs:text-xs lg:text-sm xs:p-0 md:p-2 xs:hidden md:block md:w-32 xl:w-40">
              Direccion
            </th>
            <th className="text-base xs:text-xs lg:text-sm xs:p-0 md:p-2 xs:hidden md:block xl:w-24">
              Telefono
            </th>
            <th className="text-base xs:text-xs lg:text-sm xs:p-0 md:p-2 xs:block md:hidden">
              Contacto
            </th>
            <th className="text-base xs:text-xs lg:text-sm xs:p-0 md:p-2 xl:w-24">
              Rango
            </th>
            <th className="pl-10 text-base xs:text-xs lg:text-sm xs:p-0 md:p-2">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((u) => {
            return (
              <tr className="flex items-center w-[98%] md:w-[98%] gap-2 xs:justify-between md:pl-2">
                <div className="items-center justify-between hidden md:flex lg:w-48 xl:w-60">
                  <td className="font-bold text-primary xs:hidden lg:flex md:p-0">
                    <img
                      src={u.url_image}
                      alt={u.name}
                      className="w-8 rounded-full "
                    />
                  </td>
                  <td className="font-bold text-primary xs:text-[11px] lg:text-sm lg:w-32 xl:w-40 xs:w-10 xs:p-0 hidden md:block md:w-40">
                    {u.name} {u.last_name}
                  </td>
                </div>
                <td className="overflow-auto text-xs  lg:text-sm xs:hidden md:block md:p-0 md:w-40">
                  {u.email}
                </td>
                <td className="flex-wrap text-[11px] xs:hidden md:block md:p-0 md:w-32 lg:text-sm lg:w-32 xl:w-40">
                  {u.address ? u.address : "Sin dirección"}
                </td>
                <td className="text-[11px] xs:hidden md:block lg:text-sm xl:w-24">
                  {u.phone_number?.toString().length > 5
                    ? u.phone_number
                    : "Sin numero"}
                </td>
                <td className="xs:p-1 xs:w-24 xs:max-w-24 xs:block md:hidden">
                  {" "}
                  {/*CONTACTO*/}
                  <div className="flex flex-wrap xs:text-[10px] xs:w-24 ">
                    <p className="flex flex-wrap text-xs font-bold text-primary">
                      {" "}
                      {u.name} {u.last_name}
                    </p>
                    <p className="overflow-auto"> {u.email}</p>
                    <p>Tel {u.phone_number}</p>
                  </div>
                </td>
                <td
                  className={`font-bold xs:p-0 xs:text-[10px] md:text-xs lg:text-sm md:w-20 xl:w-24 ${
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
                <td className="flex xs:gap-1 xs:p-0">
                  <button
                    onClick={() => {
                      handlePutMember(u);
                    }}
                    className={`btn bg-transparent border-none shadow-none m-1 xs:p-0 xs:m-0 xl:p-1 ${
                      u.is_member ? "hover:bg-success" : "hover:bg-gray-400"
                    } ${u.is_member ? "text-success hover:text-black" : null}`}
                  >
                    <IconMember />
                  </button>
                  <button
                    onClick={() => {
                      handlePutRank(u);
                    }}
                    className={`btn bg-transparent border-none shadow-none m-1 xs:p-0 xs:m-0 xl:p-1 hover:bg-${
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
                    className="m-1 bg-transparent border-none shadow-none btn text-primary hover:bg-error hover:text-white xs:p-0 xs:m-0 xl:p-1 lg:text-sm"
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
  );
}

export default Usuarios;
