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
            usuario: "",
            correo: "",
            contraseña1: "",
            contraseña2: "",
            unproyecto: {},

            projects: []

        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            login: (userEmail, userPassword) => {
                fetch(process.env.BACKEND_URL + "/api/login", {

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
                            alert(data.msg);
                        } else {
                            setStore({
                                user_id: data.user.id,
                            });
                        }
                        localStorage.setItem("token", data.access_token);
                    })
                    .catch((err) => console.log(err));
            },

            signup: (userName, userPassword, userEmail) => {

                fetch(process.env.BACKEND_URL + "/api/signup", {
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
                            alert(data.msg);
                        }
                        localStorage.setItem("token", data.access_token);
                    })
                    .catch((err) => console.log(err));
            },

            registrarProyecto: (
                postCategoria,
                postTitulo,
                postDescripción,
                postContacto
            ) => {
                const store = getStore();
                fetch(process.env.BACKEND_URL + "/api/newproject", {
                        method: "POST",
                        // mode: "no-cors",
                        // credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify({
                            category: postCategoria,
                            title: postTitulo,
                            text: postDescripción,
                            contact: postContacto,
                            user_id: store.user_id,
                            // "project_id": postProject
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
                fetch("https://3001-l183r-atica-gq9oyms5fqh.ws-us86.gitpod.io/api/projectlist")
                    .then((response) => response.json())
                    .then((data) => setStore({
                        projects: data
                    }))
            },
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