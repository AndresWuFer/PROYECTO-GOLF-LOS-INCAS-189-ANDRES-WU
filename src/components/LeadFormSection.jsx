import { useState } from "react";
import { contactActions, projectConfig } from "../config/projectConfig";

const initialData = {
  fullName: "",
  phone: "",
  email: "",
  interest: "",
  message: ""
};

function LeadFormSection() {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      nextErrors.fullName = "Ingresa tu nombre completo.";
    }

    const phoneRegex = /^\+?[\d\s-]{7,18}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      nextErrors.phone = "Ingresa un teléfono válido.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      nextErrors.email = "Ingresa un correo electrónico válido.";
    }

    if (!formData.interest) {
      nextErrors.interest = "Selecciona tu interés principal.";
    }

    if (formData.message.trim().length < 8) {
      nextErrors.message = "Escribe un mensaje breve para ayudarte mejor.";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setIsSubmitted(true);
      setFormData(initialData);
    }
  };

  return (
    <section id="contacto" className="section lead-form">
      <div className="section-shell lead-form__layout">
        <div className="lead-form__intro">
          <p className="section-kicker">Formulario de captación</p>
          <h2 className="section-title">{projectConfig.leadForm.title}</h2>
          <p className="section-description">{projectConfig.leadForm.description}</p>

          <article className="lead-form__contact-card">
            <h3>Contacto inmediato</h3>
            <p>
              <strong>Asesor:</strong> {projectConfig.contact.contactName}
            </p>
            <a href={contactActions.phoneHref}>{contactActions.formattedPhone}</a>
            <a href={`mailto:${projectConfig.contact.contactEmail}`}>
              {projectConfig.contact.contactEmail}
            </a>
            <a href={contactActions.whatsappHref} target="_blank" rel="noreferrer">
              Iniciar WhatsApp
            </a>
          </article>
        </div>

        <form className="lead-form__form reveal-up" onSubmit={handleSubmit} noValidate>
          <label>
            Nombre completo
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Ej. María Fernanda Ríos"
              required
            />
            {errors.fullName ? <small>{errors.fullName}</small> : null}
          </label>

          <label>
            Teléfono
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+51 999 999 999"
              required
            />
            {errors.phone ? <small>{errors.phone}</small> : null}
          </label>

          <label>
            Correo electrónico
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@correo.com"
              required
            />
            {errors.email ? <small>{errors.email}</small> : null}
          </label>

          <label>
            Interés
            <select name="interest" value={formData.interest} onChange={handleChange} required>
              <option value="">Selecciona una opción</option>
              {projectConfig.leadForm.interests.map((interest) => (
                <option key={interest} value={interest}>
                  {interest}
                </option>
              ))}
            </select>
            {errors.interest ? <small>{errors.interest}</small> : null}
          </label>

          <label className="lead-form__full">
            Mensaje
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Quiero conocer precios, tipologías y fecha estimada de entrega."
              required
            />
            {errors.message ? <small>{errors.message}</small> : null}
          </label>

          <button type="submit" className="btn btn-primary lead-form__submit">
            Quiero información personalizada
          </button>

          {isSubmitted ? (
            <p className="lead-form__success">
              Gracias por tu interés. Un asesor se comunicará contigo en breve.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

export default LeadFormSection;
