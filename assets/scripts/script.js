document.getElementById('registrationForm').addEventListener(
    'submit',
    function(e) {

        e.preventDefault();

        const dni = document.getElementById("dni").value;
        const email = document.getElementById("email").value;
        const company = document.getElementById("company").value;

        // const googleFormUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSei3pkZVL2EyaQdxHEQSduVjtjigAGg_8kr4_w_p1Wiq557zw/formResponse';
        const googleFormUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScZnJW2-pnDDRpOOlnNxM6D4yaEUFbCZRWKtMDSvjrXVsUkHw/formResponse";

        const formData = new FormData();

        formData.append("entry.1110018253", dni);
        formData.append("entry.782283230", email);
        formData.append("entry.1689696521", company);

        fetch(
            googleFormUrl, {
                method: "POST",
                mode: "no-cors",
                body: formData
            }
        )

        this.reset()

        .then(
            response => {
                console.log("Formulario enviado");
                alert("Datos registrados correctamente");
            }
        )

        .catch(
            error => {
                console.error("Error:", error);
                alert("Error al registrar los datos");
            }
        )

        
    }
);