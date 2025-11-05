<!-- Script untuk preview gambar & localStorage -->
<script>
  // ... kode JS biasa ...
</script>

<!-- Script khusus untuk Firebase -->
<script type="module">
  import { db } from "./firebase-init.js";
  import { ref, push, set } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";

  const form = document.getElementById("produkForm");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const dataProduk = {
      nama: document.getElementById("nama").value,
      harga: document.getElementById("harga").value,
      deskripsi: document.getElementById("deskripsi").value,
      gambarProfil: document.getElementById("previewProfil").src || "",
      tanggal: Date.now()
    };

    const newRef = push(ref(db, "produk/"));
    await set(newRef, dataProduk);
    alert("Data produk berhasil disimpan ke Firebase!");
    form.reset();
  });
</script>
