const MyComponent = ({ value, name , saludar, children}) => {
    console.log(value);
    console.log(name);
    console.log(children);

    saludar();


    return (
        <h1>Hola Bienvenidos! (name) </h1>
    )

    
};

export default MyComponent;