import axios from "axios";
import { useEffect } from "react";
import { setSEO } from "../utils/seo";
import toast from "react-hot-toast";
import ContactForm from "../components/layout/ContactForm";

const ContactPage = () => {
  const handleFormSubmit = async (data) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/contacts`,
        data
      );

      if (res.data.success) {
          toast.success("Thank you! Your message has been sent.");
      }
    } catch (error) {
      console.error("Contact submit error: ", error);
      alert(
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

    useEffect(() => {
      setSEO({
        title: "Contact - Creature Industry",
        description:
          "Contact Us Get In Touch +919555542745 support@creatureindustry.com Address - C-24, Landmark - One Up Motor, Near - Transport Metro Station, Kanpur Road,",
        canonical: `${window.location.origin}/contact/`,
      });
     }, []);

  return (
    <section>

      <ContactForm onSubmit={handleFormSubmit} />

    </section>
  )
}

export default ContactPage;