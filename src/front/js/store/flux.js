const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            message: null,
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white",
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white",
                },
            ],
            auth: false
        },

        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            login: (userEmail, userPassword) => {
                fetch(
                        "https://3001-l183r-atica-d803jhyz4zm.ws-us86.gitpod.io/api/login", {
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
                        }
                    )
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


            signup: (userEmail, userPassword, userName) => {
                fetch("https://3001-l183r-atica-d803jhyz4zm.ws-us86.gitpod.io/api/signup", {
                        method: 'POST',
                        // mode: "no-cors",
                        // credentials: "include",
                        headers: {
                            'Content-Type': 'application/json'
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify({
                            "username": userName,
                            "password": userPassword,
                            "email": userEmail
                        }) // body data type must match "Content-Type" header
                    })
                    .then((response) => {
                        console.log(response.status);
                        if (response.status === 200) {
                            setStore({
                                auth: true
                            })
                        }
                        return response.json()
                    })
                    .then((data) => {
                        console.log(data)
                        if (data.msg === "Bad email or password") {
                            alert(data.msg)
                        }
                        localStorage.setItem("token", data.access_token)
                    })
                    .catch((err) => console.log(err))
            },


            // enviarForm: (postCategoria, postContacto, postDescripcion, postProject, postTitulo, postUser) => {
            //     fetch("https://3001-l183r-atica-d803jhyz4zm.ws-us86.gitpod.io/api/newproject", {
            //             method: 'POST',
            //             // mode: "no-cors",
            //             // credentials: "include",
            //             headers: {
            //                 'Content-Type': 'application/json'
            //                 // 'Content-Type': 'application/x-www-form-urlencoded',
            //             },
            //             body: JSON.stringify({
            //                 "category": postCategoria,
            //                 "title": postTitulo,
            //                 "text": postDescripcion,
            //                 "contact": postContacto,
            //                 "user_id": postUser,
            //                 "project_id": postProject
            //             }) // body data type must match "Content-Type" header
            //         })
            //         .then((response) => {
            //             console.log(response.status);
            //             return response.json()
            //         })
            //         .then((data) => {
            //             console.log(data)
            //         })
            //         .catch((err) => console.log(err))
            // },




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

            logout: () => {
                localStorage.removeItem('token');
                setStore({
                    auth: false
                })
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