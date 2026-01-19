import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";

/* ---------- REGEX ---------- */
const nameRegex = /^[A-Z][a-z ]+$/;
const phoneRegex = /^[6-9][0-9]{9}$/;
const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    phone: "",
    email: "",
    comment: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  /* ---------- HANDLERS ---------- */
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleNameChange = (e) => {
    const value =
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setFormData({ ...formData, name: value });
  };

  /* ---------- VALIDATION ---------- */
  const validate = () => {
    let temp = {};

    if (!formData.service) temp.service = "Select service";

    if (!formData.name || !nameRegex.test(formData.name))
      temp.name = "Name must start with capital letter";

    if (!formData.phone || !phoneRegex.test(formData.phone))
      temp.phone = "Enter valid Indian number";

    if (!formData.email || !gmailRegex.test(formData.email))
      temp.email = "Only @gmail.com allowed";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  /* ---------- SUBMIT ---------- */
  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);

    try {
      await emailjs.send(
        "service_d8dliko",
        "template_h9rkieu",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.comment,
          to_name: formData.name,
          to_email: formData.email,
        },
        "0i0XspRSi4XQMtDwx"
      );

      Swal.fire("Mail Sent ❤️", "We will contact you soon", "success");

      setFormData({
        service: "",
        name: "",
        phone: "",
        email: "",
        comment: "",
      });

      setErrors({});
    } catch (err) {
      console.error(err);
      Swal.fire("Error ❌", "Mail not sent", "error");
    } finally {
      setLoading(false);
    }
  };

  /* ---------- UI ---------- */
  return (
    <div className="contact-box">
      <h2>I’m looking for help in…</h2>

      <div className="services button-flex">
        {[
          "App",
          "Website",
          "Logo",
          "Branding",
          "Design Consultation",
          "Motion Graphics",
          "Frontend Development",
          "SEO",
          "Other",
        ].map((item) => (
          <Button
            key={item}
            variant={formData.service === item ? "contained" : "outlined"}
            onClick={() => setFormData({ ...formData, service: item })}
          >
            {item}
          </Button>
        ))}
      </div>
      <FormHelperText error>{errors.service}</FormHelperText>

      <div className="form">
        <div className="row">
          <div className="col-md-6">
            <FormControl variant="standard" fullWidth className="form-controls">
              <InputLabel className="form-color f1-color">Name</InputLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={handleNameChange}
                className="form-color f2-color"
              />
              <FormHelperText error>{errors.name}</FormHelperText>
            </FormControl>
          </div>

          <div className="col-md-6">
            <FormControl variant="standard" fullWidth className="form-controls">
              <InputLabel className="form-color f1-color">Phone</InputLabel>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                inputProps={{ maxLength: 10 }}
                className="form-color f2-color"
              />
              <FormHelperText error>{errors.phone}</FormHelperText>
            </FormControl>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <FormControl variant="standard" fullWidth className="form-controls">
              <InputLabel className="form-color f1-color">Email</InputLabel>
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-color f2-color"
              />
              <FormHelperText error>{errors.email}</FormHelperText>
            </FormControl>
          </div>

          <div className="col-md-6">
            <TextField
              name="comment"
              label="Comment"
              variant="standard"
              multiline
              value={formData.comment}
              onChange={handleChange}
              fullWidth
              className="form-controls-2"
            />
          </div>
        </div>
      </div>

      <Button
        variant="outlined"
        onClick={handleSubmit}
        disabled={loading}
        style={{ marginTop: "20px" }}
        className="send-button"
      >
        {loading ? "Sending..." : "Send"}
      </Button>
    </div>
  );
};

export default ContactForm;
