import React from "react";
import './detail.css';
import IMG1 from '../../assets/det1.png';
import IMG2 from '../../assets/det2.png';
import IMG3 from '../../assets/det3.png';
import IMG4 from '../../assets/det4.png';
import IMG5 from '../../assets/det5.png';
import IMG6 from '../../assets/det6.png';
import IMG7 from '../../assets/det7.png';
import IMG8 from '../../assets/det8.png';
import IMG9 from '../../assets/det9.png';
import IMG10 from '../../assets/det10.png';
import IMG11 from '../../assets/det11.png';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Halaman Home',
        description: 'Halaman Home memuat beberapa contoh produk yang tersedia pada website e-commerce.',
    },
    {
        id: 2,
        image: IMG2,
        title: 'Halaman Produk Terbaru',
        description: 'Halaman ini memuat beberapa produk terbaru yang tersedia pada website e-commerce.',
    },
    {
        id: 3,
        image: IMG3,
        title: 'Halaman Header',
        description: 'Pada halaman Header terdapat menu produk untuk menampilkan semua produk yang tersedia di dalam website ecommerce, search untuk mencari produk yang diinginkan.',
    },
    {
        id: 4,
        image: IMG4,
        title: 'Halaman Kategori',
        description: 'Halaman kategori ini memuat keseluruhan produk yang dapat diakses oleh semua role. Pada bagian atas terdapat filter yang berguna untuk memfilter kategori berdasarkan nama produk',
    },
    {
        id: 5,
        image: IMG5,
        title: 'Halaman Detail Produk',
        description: 'Halaman Detail Produk berisi informasi setiap produk berupa nama, harga, dan description. Pada halaman ini juga langsung disediakan fitur untuk pembelian produk via WhatsApp',
    },
    {
        id: 6,
        image: IMG6,
        title: 'Halaman Login',
        description: 'Halaman login hanya bisa diakses oleh admin. Ketika melakukan login, admin harus memasukkan email dan password yang sudah diaftarkan sebelumnya.',
    },
    {
        id: 7,
        image: IMG7,
        title: 'Halaman Dashboard -- Admin',
        description: 'Halaman dashboard ini hanya bisa diakses oleh role admin. Halaman dashboard ini berfungsi untuk memudahkan admin dalam mengelola website e-commerce yang terdiri dari akses untuk mengelola products.',
    },
    {
        id: 8,
        image: IMG8,
        title: 'Halaman Profile',
        description: 'Halaman Profil ini berfungsi untuk mengubah data dan mengubah password admin.',
    },
    {
        id: 9,
        image: IMG9,
        title: 'Halaman Data Kategori',
        description: 'Halaman ini berfungsi untuk menambah, mengubah dan menghapus data berdasarkan kategori',
    },
    {
        id: 10,
        image: IMG10,
        title: 'Halaman Data Produk',
        description: 'Halaman ini berfungsi untuk mengelola data produk menambahkan, menghapus dan mengubah data',
    },
    {
        id: 11,
        image: IMG11,
        title: 'Halaman Data Produk',
        description: 'Tampilan halaman Tambah data produk',
    },
    
];

const Detail = () => {
    return (
      <div className="container container-detailproject">
        <div className="detailproject_header">
          <h2>Website E-commerce</h2>
          <h5>MySQL || PHP 7 || HTML  || CSS </h5>
  
          <p>
            Website e-commerce ini dibuat dengan menerapkan teknologi HTML Dan CSS Sebagai
            frontend, PHP untuk backend, Web server menggunakan XAMPP, dan MySQL sebagai database. Hak akses yang
            diterapkan dalam website e-commerce ini dibagi ke dalam 2 role yaitu
            admin sebagai penjual dan user sebagai pembeli. Adapun fitur-fitur di dalam website
            e-commerce ini akan dijelaskan secara detail sebagai berikut.
          </p>
        </div>
  
        <div className="detailproject_content">
          {data.map(({ id, image, title, description }) => {
            return (
              <article key={id} className="content_item">
                <h3>{title}</h3>
                <div className="content_item-image">
                  <img src={image} alt={title} />
                </div>
                <p>{description}</p>
              </article>
            );
          })}
        </div>
      </div>
    );
};

export default Detail;