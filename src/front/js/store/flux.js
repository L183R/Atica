import axios from "axios";

const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            message: null,
            auth: false,
            user_id: "",
            user_username: "",
            user_email: "",
            usuario: "",
            correo: "",
            contraseña1: "",
            contraseña2: "",
            unproyecto: {},
            url: "https://3001-l183r-atica-gvzxs9dupug.ws-us87.gitpod.io",
            projects: [],
            project: {},
            perfil: {},
            comentarios: [],
            mercadoPago: {},
            buscar: "",
            comentariosPerfil: [],
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            prueba: () => {
                let store = getStore();
                alert(store.user_id);
                alert(store.user_username);
                alert(store.user_email);
            },
            login: (userEmail, userPassword) => {
                let store = getStore();
                const Swal = require("sweetalert2");

                function alertaMal() {
                    Swal.fire({
                        title: "La contraseña o el correo electrónico son incorrectos.",
                        width: 600,
                        padding: "3em",
                        color: "#716add",
                        background: "#fff url(/images/trees.png)",
                        backdrop: `
                        rgba(0,0,123,0.4)
                        url("https://i.postimg.cc/nhjjM0md/cat-nyan-cat.gif")
                        left top
                        no-repeat
                        `,
                    });
                }
                fetch(store.url + "/api/login", {
                        method: "POST",
                        // mode: "no-cors",
                        // credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify({
                            email: userEmail,
                            password: userPassword,
                        }), // body data type must match "Content-Type" header
                    })
                    .then((response) => {
                        console.log(response.status);
                        if (response.status === 200) {
                            setStore({
                                auth: true,
                            });
                        }
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                        if (data.msg === "Bad email or password") {
                            {
                                alertaMal();
                            }
                        } else {
                            localStorage.setItem("user_id", data.user.id);
                            localStorage.setItem("user_username", data.user.username);
                            localStorage.setItem("user_email", data.user.email);
                            console.log(data.user.username);
                            console.log(
                                localStorage.getItem("user_username", data.user.username)
                            );
                        }
                        localStorage.setItem("token", data.access_token);
                    })
                    .catch((err) => console.log(err));
            },
            signup: (userName, userPassword, userEmail) => {
                let store = getStore();
                fetch(store.url + "/api/signup", {
                        method: "POST",
                        // mode: "no-cors",
                        // credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify({
                            username: userName,
                            password: userPassword,
                            email: userEmail,
                        }), // body data type must match "Content-Type" header
                    })
                    .then((data) => {
                        console.log(data);
                        if (data.msg === "Bad email or password") {
                            alert(data.msg);
                        }
                        localStorage.setItem("user_id", data.user.id);
                        localStorage.setItem("user_username", data.user.username);
                        localStorage.setItem("user_email", data.user.email);
                        localStorage.setItem("token", data.access_token);
                    })
                    .catch((err) => console.log(err));
            },
            registrarProyecto: (
                postCategoria,
                postImage,
                postTitulo,
                postDescripción,
                postContacto
            ) => {
                const store = getStore();
                let userid = localStorage.getItem("user_id");
                fetch(store.url + "/api/newproject", {
                        method: "POST",
                        // mode: "no-cors",
                        // credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify({
                            category: postCategoria,
                            image: postImage,
                            title: postTitulo,
                            text: postDescripción,
                            contact: postContacto,
                            user_id: userid,
                            // "project_id": postProject
                        }), // body data type must match "Content-Type" header
                    })
                    .then((response) => {
                        console.log(response.status);
                        return response.json();
                    })
                    .catch((err) => console.log(err));
            },
            nuevoComentario: (text, project_id) => {
                const store = getStore();
                let user_id = localStorage.getItem("user_id");
                fetch(store.url + "/api/newcommentary", {
                        method: "POST",
                        // mode: "no-cors",
                        // credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            text: text,
                            user_id: user_id,
                            project_id: project_id,
                            // "project_id": postProject
                        }), // body data type must match "Content-Type" header
                    })
                    .then((response) => {
                        console.log(response.status);
                        return response.json();
                    })
                    .catch((err) => console.log(err));
            },
            nuevoComentarioPerfil: (text, creador_id) => {
                const store = getStore();
                let user_id = localStorage.getItem("user_id");
                fetch(store.url + "/api/newcommentaryprofile", {
                        method: "POST",
                        // mode: "no-cors",
                        // credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify({
                            comentario: text,
                            puntaje: null,
                            user_id: user_id,
                            creador_id: creador_id,
                        }), // body data type must match "Content-Type" header
                    })
                    .then((response) => {
                        console.log(response.status);
                        return response.json();
                    })
                    .catch((err) => console.log(err));
            },
            logout: () => {
                localStorage.removeItem("token");
                localStorage.removeItem("user_id");
                localStorage.removeItem("user_username");
                localStorage.removeItem("user_email");
                setStore({
                    auth: false,
                });
            },
            getMessage: async () => {
                try {
                    // fetching data from the backend
                    const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
                    const data = await resp.json();
                    setStore({
                        message: data.message,
                    });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },
            mostrarProjects: () => {
                let store = getStore();
                fetch(store.url + "/api/projectlist")
                    .then((response) => response.json())
                    .then((data) =>
                        setStore({
                            projects: data,
                        })
                    );
            },
            mostrarProjects1: () => {
                let store = getStore();
                fetch(store.url + "/api/projectlist1")
                    .then((response) => response.json())
                    .then((data) =>
                        setStore({
                            projects: data,
                        })
                    );
            },

            mostrarPerfil: (user_id) => {
                let store = getStore();
                fetch(store.url + "/api/profiledata/" + user_id)
                    .then((response) => response.json())
                    .then((data) =>
                        setStore({
                            perfil: data,
                        })
                    );
            },
            mostrarProjects2: () => {
                let store = getStore();
                fetch(store.url + "/api/projectlist2")
                    .then((response) => response.json())
                    .then((data) =>
                        setStore({
                            projects: data,
                        })
                    );
            },
            eliminarPublicacion: (id) => {
                let store = getStore();
                fetch(store.url + "/api/posts/" + id, {
                        method: "DELETE",
                    })
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            // aquí puedes hacer algo con la respuesta de error
                            console.log("La respuesta de la red no fue satisfactoria");
                        }
                    })
                    .then((data) => {
                        console.log(data);
                        // aquí puedes hacer algo con la respuesta del servidor
                    })
                    .catch((error) => {
                        console.error("Hubo un problema con la operación fetch:", error);
                    });
            },
            eliminarPublicacionPerfil: (id) => {
                let store = getStore();
                fetch(store.url + "/api/postsperfil/" + id, {
                        method: "DELETE",
                    })
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            // aquí puedes hacer algo con la respuesta de error
                            console.log("La respuesta de la red no fue satisfactoria");
                        }
                    })
                    .then((data) => {
                        console.log(data);
                        // aquí puedes hacer algo con la respuesta del servidor
                    })
                    .catch((error) => {
                        console.error("Hubo un problema con la operación fetch:", error);
                    });
            },
            editarPublicacion: (text, id) => {
                let store = getStore();
                fetch(store.url + "/api/editpost/" + id, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            text: text,
                        }),
                    })
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            console.log("La respuesta de la red no fue satisfactoria");
                            throw new Error("Error al actualizar la publicación");
                        }
                    })
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((error) => {
                        console.error("Hubo un problema con la operación fetch:", error);
                    });
            },
            editarPublicacionPerfil: (text, id) => {
                let store = getStore();
                fetch(store.url + "/api/editpostprofile/" + id, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            comentario: text,
                        }),
                    })
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            console.log("La respuesta de la red no fue satisfactoria");
                            throw new Error("Error al actualizar la publicación");
                        }
                    })
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((error) => {
                        console.error("Hubo un problema con la operación fetch:", error);
                    });
            },
            traerProyecto: (id) => {
                let store = getStore();
                fetch(store.url + "/api/viewproject/" + id)
                    .then((response) => response.json())
                    .then((data) =>
                        setStore({
                            project: data,
                        })
                    );
            },
            buscarProyectos: () => {
                let store = getStore();
                console.log("Buscar proyectos / store.buscar" + store.buscar);
                fetch(store.url + "/api/projectfind/" + store.buscar)
                    .then((response) => response.json())
                    .then((data) =>
                        setStore({
                            projects: data,
                        })
                    );
            },
            traerComentariosPerfil: (creador_id) => {
                let store = getStore();
                fetch(store.url + "/api/commentaryprofilelist/" + creador_id)
                    .then((response) => response.json())
                    .then((data) =>
                        setStore({
                            comentariosPerfil: data,
                        })
                    );
            },
            traerComentarios: (project_id) => {
                let store = getStore();
                fetch(store.url + "/api/commentarylist/" + project_id)
                    .then((response) => response.json())
                    .then((data) =>
                        setStore({
                            comentarios: data,
                        })
                    );
            },
            validToken: () => {
                var tokenDeAcceso = localStorage.getItem("token");
                let store = getStore();
                fetch(store.url + "/api/validtoken", {
                        method: "GET",
                        // mode: "no-cors",
                        // credentials: "include",
                        headers: {
                            Authorization: "Bearer " + tokenDeAcceso,
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                    })
                    .then((response) => {
                        console.log(response.status);
                        if (response.status === 200) {
                            setStore({
                                auth: true,
                            });
                        }
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((err) => console.log(err));
            },

            pagoMercadoPago: async (total) => {
                let store = getStore();
                try {
                    const response = await axios.post(store.url + "/api/preference", {
                        total: total, //acá está de nuevo la variable donde se guarda el total a pagar por el cliente
                    });
                    console.log(response);
                    setStore({
                        mercadoPago: response.data,
                    }); //guardamos la info en el objeto que creamos en store
                } catch (error) {
                    console.log(error);
                }
            },

            //-------------------Recuperacion de contraseña------------------------------- //
            recuperarContra: (email) => {
                let store = getStore();
                const Swal = require("sweetalert2");

                function contraseñaEnviada() {
                    Swal.fire({
                        title: "Tu nueva contraseña ha sido enviada a tu correo electrónico.",
                        width: 600,
                        padding: "3em",
                        color: "#716add",
                        background: "#fff url(/images/trees.png)",
                        backdrop: `
                        rgba(0,0,123,0.4)
                        url("https://i.postimg.cc/nhjjM0md/cat-nyan-cat.gif")
                        left top
                        no-repeat
                        `,
                    });
                }
                fetch(store.url + "/api/resetPassword", {
                        method: "POST",
                        // mode: "no-cors",
                        // credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify({
                            email: email,
                        }), // body data type must match "Content-Type" header
                    })
                    .then((response) => {
                        console.log(response.status);
                        return response.json();
                    })
                    .then((data) => {
                        {
                            contraseñaEnviada();
                        }
                    })
                    .catch((err) => console.log(err));
            },

            //----------------Fin de recuperacion de constraseña-----------------------------//

            changeColor: (index, color) => {
                //get the store
                const store = getStore();
                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                //reset the global store
                setStore({
                    demo: demo,
                });
            },
        },
    };
};

export default getState;