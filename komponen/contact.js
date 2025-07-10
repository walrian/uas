import { useState } from "react";

const Contact = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    alert("Terima kasih sudah ingin menghubungi saya!");
    setClicked(true);
  };

  return (
    <section id="contact" className="section" onClick={handleClick}>
      <h2>Kontak</h2>
      <p>Email: walriansihombing@gmail.com</p>
      <p>Instagram: <a href="https://www.instagram.com/walrian_shmbg/?__pwa=1#" target="_blank" rel="noreferrer">@walrian_shmbg</a></p>
      {clicked && <p>Pesan telah diklik</p>}
    </section>
  );
};

export default Contact;
