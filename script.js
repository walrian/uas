// Tambahan efek interaktif (alert saat klik kontak)
document.addEventListener("DOMContentLoaded", function () {
  const contactSection = document.querySelector("#contact");

  contactSection.addEventListener("click", () => {
    alert("Terima kasih sudah ingin menghubungi saya!");
  });
});
