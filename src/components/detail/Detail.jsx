import React from "react";
import './detail.css';
import IMG1 from '../../assets/ss1.png';
import IMG2 from '../../assets/ss3.png';
import IMG3 from '../../assets/ss4.png'; 
import IMG4 from '../../assets/ss5.png';
import IMG5 from '../../assets/ss6.png';
import IMG6 from '../../assets/ss7.png';
import IMG7 from '../../assets/ss8.png';
import IMG8 from '../../assets/ss9.png';
import IMG9 from '../../assets/ss10.png';
import IMG10 from '../../assets/ss11.png';
import IMG11 from '../../assets/ss12.png';
import IMG12 from '../../assets/ss13.png';
import IMG13 from '../../assets/ss14.png';
import IMG14 from '../../assets/ss15.png';
import IMG15 from '../../assets/ss16.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Halaman Home dan Features Products",
    description:
      "Halaman Home ini bisa diakses oleh semua role baik admin dan user. Sekaligus memuat beberapa contoh produk yang tersedia pada website e-commerce. untuk melakukan transaksi diharuskan sign dahulu",
  },
  {
    id: 2,
    image: IMG2,
    title: "Halaman Sign in",
    description:
      "Di sebelah kanan website ada menu Login, setelah di klik akan tampil seperti gambar diatas. Ketika melakukan login, user harus memasukkan email dan password yang sudah diaftarkan sebelumnya. Setelah login berhasil, maka website e-commerce dapat diakses sebagai role user.",
  },
  {
    id: 3,
    image: IMG3,
    title: "Halaman Sign up",
    description:
      "Pada halaman Sign up diperlukan data berupa nama, email, password dan konfirmasi password yang secara default akan terdaftar sebagai role user.",
  },
  {
    id: 4,
    image: IMG4,
    title: "Halaman Home dan Features Products setelah Sign in",
    description:
      "Setelah login berhasil maka akan tampil kembali halaman Halaman Home dan Features Products seperti pada gambar di atas. transaksi sudah bisa dilakukan",
  },
  {
    id: 5,
    image: IMG5,
    title: "Halaman Search Product",
    description:
      "Pada halaman Search Product, user dapat memasukkkan keyword produk yang ingin dicari. Keyword yang dimasukkan dapat berdasarkan kategori dan nama produk.",
  },
  {
    id: 6,
    image: IMG6,
    title: "Halaman Products",
    description:
      "Halaman Products ini memuat keseluruhan produk yang dapat diakses oleh semua role. Pada bagian atas terdapat filter yang berguna untuk memfilter produk berdasarkan kategori.",
  },
  {
    id: 7,
    image: IMG7,
    title: "Halaman Products",
    description:
      "Pada bagian bawah halaman products terdapat pagination yang berguna untuk berpindah ke halaman products yang lain. Setiap halaman products terdiri dari 10 produk.",
  },
  {
    id: 8,
    image: IMG8,
    title: "Halaman Products",
    description:
      "Pada saat cursor berada di atas gambar produk, gambar produk akan membesar seperti gambar diatas",
  },
  {
    id: 9,
    image:IMG9,
    title: "Halaman Cart Products",
    description:
      "Halaman Cart memuat fitur penambahan dan pengurangan jumlah produk, total harga per produk dan total harga keseluruhan produk di dalam cart. Selain itu, terdapat fitur remove product dari cart dan button checkout untuk melanjutkan ke tahap confirm order."
  },
  {
    id: 10,
    image: IMG10,
    title: "Halaman Shipping Address ",
    description:
      "Pada halaman Shipping Address, user diharuskan memasukkan beberapa data pribadi berupa alamat, kota tempat tinggal, kabupaten, kecamatan dan keluaran.",
  },
  {
    id: 11,
    image: IMG11,
    title: "Halaman Shipping Address ",
    description:
      "Setelah memasukkan alamat akan ada button submit dan keterangan produk yang akan diorder. Jika informasi yang ditampilkan sudah benar, user dapat melanjutkan ke proses payment. ",
  },
  {
    id: 12,
    image: IMG12,
    title: "Halaman Invoices",
    description:
      "Halaman invoice berisi detail transaksi",
  },
  {
    id: 13,
    image: IMG13,
    title: "Halaman Transaction History",
    description:
      "Jika sudah akan otomatis direct ke history transaksi",
  },
  {
    id: 14,
    image: IMG14,
    title: "Halaman Information Address",
    description:
      "Halaman ini berisi informasi detail alamat user",
  },
  {
    id: 15,
    image: IMG15,
    title: "Halaman Information Account",
    description:
      "Halaman ini berisi informasi akun user",
  },
];

const Detail = () => {
  return (
    <div className="container container-detailproject">
      <div className="detailproject_header">
        <h2>Website E-commerce</h2>
        <h5>MongoDB || Express JS || Node JS || React JS</h5>

        <p>
          Website e-commerce ini dibuat dengan menerapkan teknologi MERN yaitu
          React JS untuk frontend, redux untuk state management, Node JS dan
          Express JS untuk backend dan MongoDB sebagai database. Hak akses yang
          diterapkan dalam website e-commerce ini dibagi ke dalam 2 role yaitu
          sebagai admin dan user. Sedangkan user memiliki hak akses yang sangat
          terbatas karena ada beberapa fitur website yang hanya bisa diakses
          jika sudah login (role user). Adapun fitur-fitur di dalam website
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
