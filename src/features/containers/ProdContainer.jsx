import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import ProdPages from "../pages/ProdPages";

const ProdContainer = () => {
  // kita deklarasi semua yang dibutuhkan untuk logic containernya
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  // ini digunakan untuk rendering
  useEffect(() => {
    // disini penggunaan async await untuk memanggil API-nya
    const productLoad = async () => {
      try {
        // kita set respon-nya terhadap API yang dipanggil
        const res = await useAxios.get("/products");

        // lalu setProduct akan memanggil data dari responnya
        setProducts(res.data);

        // lalu kita bikin loadingnya di true
        setLoading(true);
      } catch (e) {
        // disini kita set error messagenya
        setError(e.message || "Something went wrong while fetching data...");
      } finally {
        setLoading(false);
      }
    };

    productLoad();
  }, []);

  // disini untuk handle inputan dari user
  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // disini untuk handle submit dari create / edit
  const handleSubmit = async () => {
    // disini aku pakai async karna nantinya waktu edit maupun create butuh waktu
    try {
      // disini logika pemisah antara edit & createnya
      // kalau sedang edit maka axios akan put ke dalam product id-nya lalu memanggil formnya
      // yang dimana nantinya setProducts akan mapping terlebih dahulu datanya sesuai dengan id
      if (isEditing) {
        const res = await useAxios.put(`/products/${currentId}`, form);
        setProducts(
          products.map((p) =>
            p.id === currentId ? { ...res.data, id: currentId } : p,
          ),
        );
        setIsEditing(false);
        setCurrentId(null);
      } else {
        // kalau tidak nantinya axios akan melalukan post ke dalam datanya
        const res = await useAxios.post("/products", form);
        setProducts([res.data, ...products]);
      }

      // kita set untuk formnya
      setForm({
        title: "",
        description: "",
        price: "",
        category: "",
        image: "",
      });
    } catch (err) {
      alert(err.message || "Failed to Create or Edit Products");
    }
  };

  // disini kita lakukan untuk handling editnya
  const handleEdit = (products) => {
    // disini nantinya is editing akan diubah menjadi true dan menyesuaikan dengan id yang dipilih untuk di edit
    setIsEditing(true);
    setCurrentId(products.id);
    setForm({
      title: products.title,
      description: products.description,
      price: products.price,
      category: products.category,
      image: products.image,
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // disini untuk handling delete sesuai dengan id yang dipilih
  // dan menggunakan async untuk melakukan delete karna pastinya untuk delete juga butuh waktu
  const handleDelete = async (id) => {
    // disini aku pakai if untuk memunculkan sebuah popup bawaan jika ingin menghapus seperti konfirmasi
    if (window.confirm("Hapus Produk terkait ?")) {
      // kita try disini untuk mencoba apakah bisa dihapus atau tidak
      try {
        await useAxios.delete(`/products/${id}`);

        // lalu kita filter setelah kita hapus datanya yang dipilih tadi
        setProducts(products.filter((prd) => prd.id !== id));
      } catch (er) {
        alert(er.message || "Failed to delete the data...");
      }
    }
  };

  if (loading) return <p>Loading...</p>;

  if (error) return <p style={{ color: `tomato` }}>Error: {error}</p>;

  return (
    <ProdPages
      products={products}
      loading={loading}
      form={form}
      isEditing={isEditing}
      onChange={handleInputChange}
      onEdit={handleEdit}
      onSubmit={handleSubmit}
      onDelete={handleDelete}
    />
  );
};

export default ProdContainer;
