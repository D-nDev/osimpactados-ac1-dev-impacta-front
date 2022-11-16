/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from "next";
import Head from "next/head";
import { usermicroservice } from "@services/api";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import "./styles.module.css";
import { Logo } from "@components/AppHeader/styles";
import Cookies from "universal-cookie";
import Modal from "react-modal";
import { Input1, LoginButton } from "@styles/LoginStyles";

const Register: NextPage = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
    },
  };
  const cookies = new Cookies();
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(false);
  const [address, setAddress] = useState<any[]>();
  const [photo, setPhoto] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [name, setName] = useState<string>();
  const [modalIsOpen, setIsOpen] = useState(false);
  const addressref = useRef<any>();
  const addressnumberref = useRef<any>();
  const addressdistrictref = useRef<any>();
  const addresscomplementref = useRef<any>();
  const cityref = useRef<any>();
  const stateref = useRef<any>();
  const cepref = useRef<any>();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = async () => {
    if (
      !addressref.current!.value ||
      !addressnumberref.current!.value ||
      !addressdistrictref.current!.value ||
      !cityref.current!.value ||
      !stateref.current!.value ||
      !cepref.current!.value
    ) {
      Swal.fire({
        title: "Erro",
        text: "Preencha todos os campos!",
        icon: "error",
      });
    } else {
      try {
        const result: any = await usermicroservice.post(
          "/address",
          {
            address: addressref.current!.value,
            addressNumber: parseInt(addressnumberref.current!.value),
            addressComplement: addresscomplementref.current!
              ? addresscomplementref.current!.value
              : "N/A",
            addressDistrict: addressdistrictref.current!.value,
            city: cityref.current!.value,
            state: stateref.current!.value,
            cep: cepref.current!.value,
          },
          {
            withCredentials: true,
          }
        );
        Swal.fire({
          title: "Sucesso",
          text: "Endereço cadastrado",
          icon: "success",
        }).then(() => {
          window.location.href = "/account";
        });
      } catch (error: any) {
        console.log(error);
        console.log(error.response);
        Swal.fire({
          title: "Erro",
          text: error.response.data.error,
          icon: "error",
        });
      }
    }
  };

  useEffect(() => {
    async function fetchData() {
      const result: any = await usermicroservice.get("/myuser", {
        withCredentials: true,
      });

      if(result.data.photo) {

        setPhoto(result.data.photo);
      } else {
        setPhoto('/static/images/default_photo.png')
      }

      setAddress(result.data.addresses);
      setName(result.data.name);
      setEmail(result.data.email);
    }

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>FoodOnClick | Painel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{ display: "flex", gap: "150px" }}>
          <h2>Código 2FA</h2>
          <button onClick={closeModal}>Fechar</button>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Input1 type="text" placeholder="Rua" ref={addressref} style={{ marginRight: "2%" }} />
          <Input1
            type="number"
            ref={addressnumberref}
            placeholder="Número"
            style={{ marginRight: "2%" }}
          />
          <Input1
            type="text"
            ref={addresscomplementref}
            placeholder="Complemento"
            style={{ marginRight: "2%" }}
          />
          <Input1
            type="text"
            ref={addressdistrictref}
            placeholder="Bairro"
            style={{ marginRight: "2%" }}
          />
          <Input1
            type="text"
            ref={cityref}
            placeholder="Cidade"
            style={{ marginRight: "2%" }}
          />
          <Input1
            type="text"
            ref={stateref}
            placeholder="Estado"
            style={{ marginRight: "2%" }}
          />
          <Input1 type="text" placeholder="CEP" ref={cepref} style={{ marginRight: "2%" }} />
          <LoginButton
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleSubmit();
            }}
          >
            Cadastrar
          </LoginButton>
        </div>
      </Modal>

      <body style={{ height: "100vh" }}>
        <div className="w-full h-full bg-gray-200">
          <div className="flex flex-no-wrap">
            {/* Sidebar starts */}
            <div className="absolute lg:relative w-64 h-screen shadow bg-gray-100 hidden lg:block">
              <div className="h-16 w-full flex items-center px-8">
                <Logo style={{ marginLeft: "inherit" }}>Food OnClick</Logo>
              </div>
              <ul aria-orientation="vertical" className=" py-6">
                <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal pb-4 pt-5 text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <span style={{ marginBottom: "-10px" }} className="ml-2">
                      Endereços
                    </span>
                  </div>
                </li>
                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <span className="ml-2">2FA</span>
                  </div>
                </li>
                <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <span
                      onClick={() => {
                        openModal();
                      }}
                      className="ml-2"
                    >
                      Adicionar Endereço
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            {/*Mobile responsive sidebar*/}
            <div
              className={
                show
                  ? "w-full h-full absolute z-40  transform  translate-x-0 "
                  : "   w-full h-full absolute z-40  transform -translate-x-full"
              }
              id="mobile-nav"
            >
              <div
                className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden"
                onClick={() => setShow(!show)}
              />
              <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="flex items-center justify-between px-8">
                      <div className="h-16 w-full flex items-center">
                        <Logo style={{ marginLeft: "inherit" }}>
                          Food OnClick
                        </Logo>
                      </div>
                      <div
                        id="closeSideBar"
                        className="flex items-center justify-center h-10 w-10"
                        onClick={() => setShow(!show)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-x"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <line x1={18} y1={6} x2={6} y2={18} />
                          <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                      </div>
                    </div>
                    <ul aria-orientation="vertical" className=" py-6">
                      <li className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal pb-4 pt-5 text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                          <span
                            style={{ marginBottom: "-10px" }}
                            className="ml-2"
                          >
                            Endereços
                          </span>
                        </div>
                      </li>
                      <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                          <span className="ml-2">2FA</span>
                        </div>
                      </li>
                      <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                          <span
                            onClick={() => {
                              openModal();
                            }}
                            className="ml-2"
                          >
                            Adicionar Endereço
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-center mb-4 w-full px-6">
                      <div className="relative w-full"></div>
                    </div>
                    <div className="border-t border-gray-300">
                      <div className="w-full flex items-center justify-between px-6 pt-1">
                        <div className="flex items-center">
                          <img
                            alt="profile-pic"
                            src={photo}
                            className="w-8 h-8 rounded-md"
                          />
                          <p className="md:text-xl text-gray-800 text-base leading-4 ml-2">
                            {name}
                          </p>
                        </div>
                        <ul className="flex">
                          <li className="cursor-pointer text-white pt-5 pb-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-logout"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="#718096"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              onClick={() => {
                                cookies.remove("token");
                                window.location.href = "/";
                              }}
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                              <path d="M7 12h14l-3 -3m0 6l3 -3" />
                            </svg>
                          </li>
                          <li className="cursor-pointer text-white pt-5 pb-3 pl-3"></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Mobile responsive sidebar*/}
            {/* Sidebar ends */}
            <div className="w-full">
              {/* Navigation starts */}
              <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10">
                <div className="hidden lg:flex w-full pr-6">
                  <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
                    <div className="relative w-full"></div>
                  </div>
                  <div className="w-1/2 hidden lg:flex">
                    <div className="w-full flex items-center pl-8 justify-end">
                      <div
                        className="flex items-center relative cursor-pointer"
                        onClick={() => setProfile(!profile)}
                      >
                        <div className="rounded-full">
                          {profile ? (
                            <ul className="p-1 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-12 ">
                              <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2">
                                <div className="flex items-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-logout"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                    <path d="M7 12h14l-3 -3m0 6l3 -3" />
                                  </svg>
                                  <span
                                    className="text-sm ml-2"
                                    onClick={() => {
                                      cookies.remove("token");
                                      window.location.href = "/";
                                    }}
                                  >
                                    Deslogar
                                  </span>
                                </div>
                              </li>
                            </ul>
                          ) : (
                            ""
                          )}
                          <div className="relative">
                            <img
                              className="rounded-full h-10 w-10 object-cover"
                              src={photo}
                              alt="avatar"
                            />
                            <div className="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto" />
                          </div>
                        </div>
                        <p className="text-gray-800 text-sm mx-3">{name}</p>
                        <div className="cursor-pointer text-gray-600">
                          <svg
                            aria-haspopup="true"
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-chevron-down"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="text-gray-600 mr-8 visible lg:hidden relative"
                  onClick={() => setShow(!show)}
                >
                  {show ? (
                    " "
                  ) : (
                    <svg
                      aria-label="Main Menu"
                      aria-haspopup="true"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-menu cursor-pointer"
                      width={30}
                      height={30}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={4} y1={8} x2={20} y2={8} />
                      <line x1={4} y1={16} x2={20} y2={16} />
                    </svg>
                  )}
                </div>
              </nav>
              <div className="w-full mt-2" id="main_table">
                <div className="bg-white overflow-auto" id="table1">
                  <table
                    id="table_main"
                    className="min-w-full leading-normal bg-gray"
                  >
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          ID
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Rua
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Número
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Complemento
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Bairro
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Cidade
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Estado
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          CEP
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                      </tr>
                      {address?.map((eachAddress) => (
                        // eslint-disable-next-line react/jsx-key
                        <tr>
                          <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                            <div className="flex items-center">
                              <div className="ml-3">
                                <p
                                  id="p_${element.id}"
                                  className="text-gray-900 whitespace-no-wrap"
                                >
                                  <b>{eachAddress.id}</b>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 border-b border-gray-200 bg-white text-sm">
                            <p
                              id="p_${element.nome}"
                              className="text-gray-900 whitespace-no-wrap"
                            >
                              {eachAddress.address}
                            </p>
                          </td>
                          <td className="px-5 border-b border-gray-200 bg-white text-sm">
                            <p
                              id="p_${element.endereco}"
                              className="text-gray-900 whitespace-no-wrap"
                            >
                              {eachAddress.addressNumber}
                            </p>
                          </td>
                          <td className="px-5 border-b border-gray-200 bg-white text-sm">
                            <p
                              id="p_${element.complemento}"
                              className="text-gray-900 whitespace-no-wrap"
                            >
                              {eachAddress.addressComplement}
                            </p>
                          </td>
                          <td className="px-5 border-b border-gray-200 bg-white text-sm">
                            <p
                              id="p_${element.cep}"
                              className="text-gray-900 whitespace-no-wrap"
                            >
                              {eachAddress.addressDistrict}
                            </p>
                          </td>
                          <td className="px-5 border-b border-gray-200 bg-white text-sm">
                            <p
                              id="p_${element.cidade}"
                              className="text-gray-900 whitespace-no-wrap"
                            >
                              {eachAddress.city}
                            </p>
                          </td>
                          <td className="px-5 border-b border-gray-200 bg-white text-sm">
                            <p
                              id="p_${element.estado}"
                              className="text-gray-900 whitespace-no-wrap"
                            >
                              {eachAddress.state}
                            </p>
                          </td>
                          <td className="px-5 border-b border-gray-200 bg-white text-sm">
                            <p
                              id="p_${element.telefone}"
                              className="text-gray-900 whitespace-no-wrap"
                            >
                              {eachAddress.cep}
                            </p>
                          </td>
                          <td className="px-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              <button
                                id="user${element.id}_delete"
                                className="btn btn-danger btn-sm rounded-0"
                                type="button"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Deletar"
                              >
                                <i className="fa fa-trash"></i>
                              </button>
                              <button
                                id="user${element.id}_edit"
                                className="btn btn-info btn-sm rounded-0"
                                type="button"
                                data-toggle="tooltip"
                                data-placement="top"
                                data-bs-id="${element.id}"
                                title="Editar"
                              >
                                <i className="fas fa-user-edit"></i>
                              </button>
                            </p>
                          </td>
                        </tr>
                      ))}
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Register;
