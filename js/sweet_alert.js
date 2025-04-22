document.getElementById("Form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' },
        });

        if (response.ok) {
            Swal.fire({
                title: "¡Mensaje enviado!",
                text: "Gracias por contactarme. Responderé pronto.",
                icon: "success"
            });
            form.reset();
        } else {
            Swal.fire({
                title: "Error",
                text: "Hubo un problema al enviar el mensaje.",
                icon: "error"
            });
        }
    } catch (error) {
        Swal.fire("Error", "No se pudo enviar el mensaje.", "error");
    }
});