-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 26, 2019 at 03:36 AM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_landyapi`
--

-- --------------------------------------------------------

--
-- Table structure for table `airlines`
--

CREATE TABLE `airlines` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `code` varchar(5) NOT NULL,
  `facilities_id` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `airlines`
--

INSERT INTO `airlines` (`id`, `name`, `code`, `facilities_id`) VALUES
(1, 'Garuda Indonesia', 'GI', 1),
(2, 'Lion Air', 'LA', 1),
(3, 'Batik Air', 'BA', 1),
(4, 'Citilink', 'CL', 1),
(5, 'Sriwijaya Air', 'SA', 1),
(6, 'Adam Air', 'AA', 2);

-- --------------------------------------------------------

--
-- Table structure for table `airport`
--

CREATE TABLE `airport` (
  `id` int(2) NOT NULL,
  `name` varchar(50) NOT NULL,
  `code` varchar(5) NOT NULL,
  `location` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `airport`
--

INSERT INTO `airport` (`id`, `name`, `code`, `location`) VALUES
(1, 'Soekarno Hatta International Airport', 'JKTA', 'Jakarta'),
(2, 'Achmad Yani', 'SRG', 'Semarang'),
(3, 'Syamsudin Noor', 'BDJ', 'Banjarmasin'),
(4, 'Kualanamu International Airport', 'KNO', 'Medan'),
(5, 'Ngurah Rai International Airport', 'DPS', 'Bali / Denpasar'),
(6, 'Adi Sutjipto', 'JOG', 'Yogyakarta'),
(7, 'Juanda', 'SUB', 'Surabaya'),
(8, 'Husein Sastranegara', 'BDO', 'Bandung'),
(9, 'Sultan Iskandarmuda', 'BTJ', 'Banda Aceh'),
(10, 'Minangkabau Intl', 'PDG', 'Padang'),
(11, 'Radin Inten II Airport', 'TKG', 'Bandar Lampung'),
(12, 'Sepinggan', 'BPN', 'Balikpapan'),
(13, 'Pattimura Airport', 'AMQ', 'Ambon');

-- --------------------------------------------------------

--
-- Table structure for table `album`
--

CREATE TABLE `album` (
  `id` int(2) NOT NULL,
  `image` varchar(100) NOT NULL,
  `room_id` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `album`
--

INSERT INTO `album` (`id`, `image`, `room_id`) VALUES
(1, '029816c9-07c3-4be4-b749-1829a6068d58.jpeg', 1),
(2, 'a7563513-82d1-4623-9df4-fee1d565dd5a.jpeg', 1),
(3, 'cd62f50d-11a6-4edf-80c3-22971db5279e.jpeg', 1),
(4, '6019c05d-ef59-4e03-8c24-84d8bb0f9e10.jpeg', 1),
(5, '6327c7df-7b8d-4311-852c-2a08c77ac5af.jpeg', 1),
(6, 'b0777f86-4c6f-454e-b3b4-556a7bcf4eba.png', 2),
(7, '6d8a3a48-307e-4ed0-a6ac-b29b85637e91.jpeg', 2),
(8, '423f38c6-ff4f-4114-bdad-3e5305e7ebf9.jpeg', 2),
(9, '09a386ba-0a2c-4b0a-b70c-e2bfce03e17e.jpeg', 2),
(10, '1933ff82-1da6-46ff-b3e6-399d9f351200.jpeg', 2);

-- --------------------------------------------------------

--
-- Table structure for table `customer_info`
--

CREATE TABLE `customer_info` (
  `id` int(11) NOT NULL,
  `first_name` varchar(15) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `nationality_code` varchar(4) NOT NULL,
  `title_id` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer_info`
--

INSERT INTO `customer_info` (`id`, `first_name`, `last_name`, `nationality_code`, `title_id`) VALUES
(1, 'Adillun', 'Tresno', 'IDN', 1),
(2, 'Lalisa', 'Manoban', 'THA', 3),
(3, 'Herpitaa', 'Ayyyuuu', 'IDN', 2);

-- --------------------------------------------------------

--
-- Table structure for table `discount_flight`
--

CREATE TABLE `discount_flight` (
  `id` int(2) NOT NULL,
  `name` text NOT NULL,
  `image` varchar(100) NOT NULL,
  `amount` int(15) NOT NULL,
  `max_amount` int(15) NOT NULL,
  `description` text NOT NULL,
  `coupon_code` varchar(10) NOT NULL,
  `coupon_code_description` text NOT NULL,
  `terms` text NOT NULL,
  `duration` date NOT NULL,
  `duration_end` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `discount_flight`
--

INSERT INTO `discount_flight` (`id`, `name`, `image`, `amount`, `max_amount`, `description`, `coupon_code`, `coupon_code_description`, `terms`, `duration`, `duration_end`) VALUES
(3, 'Ini Waktumu Jadi Lebih Murah untuk Jelajah Nusantara', '0eddacc4-b042-4a56-9c42-f881299bf694.png', 10, 100000, 'Keindahan Indonesia itu luas banget, lho! Masa kamu cuma liburan di destinasi yang itu-itu aja? Untuk rencana liburan nanti, cobain destinasi baru bersama Airy, yuk! Supaya liburannya lebih murah, kamu bisa gunakan kode kupon dari Airy untuk mendapatkan DISKON tiket pesawat sebesar Rp100.000*. Ayo, buruan booking tiket pesawat di Airy sekarang juga! (Syarat dan Ketentuan berlaku)', 'AIRYS100', 'Masukkan kode kupon untuk mendapatkan potongan harga sebesar Rp 100.000 dengan minimal transaksi Rp 2.250.000. Berlaku untuk penerbangan dengan maskapai Garuda Indonesia dan/atau Citilink, bagi semua pelanggan Airy.', '1. Periode promo: 21 Oktober 2019 - 23 Oktober 2019.\n2. Periode terbang: kapan saja.\n3. AIRYS100 : Diskon Rp 100.000 dengan minimal transaksi Rp 2.250.000 untuk penerbangan dengan maskapai Citilink dan Garuda Indonesia bagi semua pelanggan Airy.\n4. AIRYA100 : Diskon Rp 100.000 dengan minimal transaksi Rp 2.250.000 untuk penerbangan dengan maskapai Batik Air bagi semua pelanggan Airy.\n5. AIRYN75 : Diskon Rp 75.000 dengan minimal transaksi Rp 2.000.000 untuk penerbangan dengan maskapai Lion Air bagi pelanggan baru yang belum pernah melakukan transaksi tiket pesawat domestik di Airy.\n6. AIRYS75 : Diskon Rp 75.000 dengan minimal transaksi Rp 2.000.000 untuk penerbangan dengan maskapai Trigana Air, Xpress Air, TransNusa dan Wings Air bagi semua pelanggan Airy.\n7. Promo berlaku untuk semua rute domestik di Airy.\n8.Berlaku untuk pemesanan melalui aplikasi Airy (minimal versi [1.20.0] untuk Android dan minimal versi [1.21.0] untuk iOS).\n9. Tiap kode kupon hanya dapat digunakan 1 kali oleh setiap pelanggan selama periode promo.\n10. Masukkan kode kupon setelah memilih metode pembayaran pada halaman pembayaran.\n11. Program ini tidak dapat digabung dengan promo Airy lainnya.\n12. Airy berhak untuk membatalkan pemesanan, dan/atau penggunaan kode promo apabila terjadi kecurangan, atau tindak pelanggaran atas syarat dan ketentuan lainnya yang berlaku.', '2019-10-26', '2019-10-29');

-- --------------------------------------------------------

--
-- Table structure for table `discount_room`
--

CREATE TABLE `discount_room` (
  `id` int(2) NOT NULL,
  `name` text NOT NULL,
  `image` varchar(100) NOT NULL,
  `amount` int(15) NOT NULL,
  `max_amount` int(15) NOT NULL,
  `description` text NOT NULL,
  `coupon_code` varchar(10) NOT NULL,
  `coupon_code_description` text NOT NULL,
  `terms` text NOT NULL,
  `duration` date NOT NULL,
  `duration_end` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `discount_room`
--

INSERT INTO `discount_room` (`id`, `name`, `image`, `amount`, `max_amount`, `description`, `coupon_code`, `coupon_code_description`, `terms`, `duration`, `duration_end`) VALUES
(3, 'Ini Waktumu Nginap Nyaman Bebas Worry di Airy Syariah', 'd0ffe27c-684c-4e57-a7b5-608e6bf7c126.png', 10, 200000, 'Nginap di Airy Syariah, kamu bisa liburan nyaman, hepi, dan bebas worry! Kamarnya nyaman, memiliki fasilitas lengkap, bisa ditemukan di 100+ di Indonesia, dan bikin liburan makin tenang. Gak percaya? Yuk, buktikan langsung dengan pesan kamarnya sekarang juga mumpung ada DISKON kamar hingga Rp200.000* dari Airy! Tinggal gunakan kode kuponnya, kamu sudah bisa langsung menikmati liburan bebas worry bersama Airy Syariah. Tunggu apa lagi? Ayo pesan kamarnya sekarang! (Syarat dan Ketentuan berlaku)', 'SYARIAH200', 'Masukkan kode kupon untuk mendapatkan diskon 10% maksimal potongan Rp200.000 tanpa minimal transaksi. Kupon hanya berlaku untuk pemesanan properti Airy Syariah di seluruh Indonesia.', '1. Periode promo: 21 Oktober 2019 - 23 Oktober 2019.\n2. Periode inap: 21 Oktober 2019 - 31 Oktober 2019.\n3. Diskon 10% maksimal potongan Rp 200.000 tanpa minimum transaksi.\n4. Promo berlaku untuk kamar Airy di seluruh Indonesia.\n5. Promo berlaku untuk property Airy Syariah.\n6. Berlaku untuk pemesanan melalui desktop web, mobile web, serta aplikasi Airy (minimal versi [1.22.0] untuk Android dan minimal versi [1.22.0] untuk iOS).\n7. Tiap kode kupon hanya dapat digunakan 1 kali oleh setiap pelanggan selama periode promo.\n8. Pemesanan kamar dengan promo ini bersifat non-refundable, tidak dapat dibatalkan, dan tidak dapat diubah.\n9. Masukkan kode kupon setelah memilih metode pembayaran pada halaman pembayaran.\n10. Program ini tidak dapat digabung dengan promo Airy lainnya.\n11. Airy berhak untuk membatalkan pemesanan, dan/atau penggunaan kode promo apabila terjadi kecurangan, atau tindak pelanggaran atas syarat dan ketentuan lainnya yang berlaku.', '2019-10-26', '2019-10-29');

-- --------------------------------------------------------

--
-- Table structure for table `flight`
--

CREATE TABLE `flight` (
  `id` int(11) NOT NULL,
  `code` varchar(100) NOT NULL,
  `airline_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `flight`
--

INSERT INTO `flight` (`id`, `code`, `airline_id`) VALUES
(1, 'GI-645', 1),
(4, 'LA-543', 2),
(5, 'CL-423', 4);

-- --------------------------------------------------------

--
-- Table structure for table `flight_facilities`
--

CREATE TABLE `flight_facilities` (
  `id` int(11) NOT NULL,
  `baggage` varchar(5) NOT NULL,
  `food` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `flight_facilities`
--

INSERT INTO `flight_facilities` (`id`, `baggage`, `food`) VALUES
(1, '20', 'Tidak Tersedia'),
(2, '20', 'Makanan Tersedia');

-- --------------------------------------------------------

--
-- Table structure for table `flight_routes`
--

CREATE TABLE `flight_routes` (
  `id` int(2) NOT NULL,
  `origin_id` int(2) NOT NULL,
  `destination_id` int(2) NOT NULL,
  `departure` datetime NOT NULL,
  `arrival` datetime NOT NULL,
  `quantity` int(3) NOT NULL,
  `price` int(8) NOT NULL,
  `airlines_id` int(2) NOT NULL,
  `type_id` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `flight_routes`
--

INSERT INTO `flight_routes` (`id`, `origin_id`, `destination_id`, `departure`, `arrival`, `quantity`, `price`, `airlines_id`, `type_id`) VALUES
(1, 1, 2, '2019-10-18 11:00:00', '2019-10-18 17:00:00', 10, 3500000, 1, 1),
(2, 2, 1, '2019-10-25 20:00:00', '2019-10-25 23:00:00', 20, 2000000, 2, 1),
(3, 1, 2, '2019-10-27 08:00:00', '2019-10-27 12:00:00', 30, 2500000, 1, 1),
(4, 3, 4, '2019-11-01 08:00:00', '2019-11-01 12:00:00', 30, 2500000, 3, 1),
(5, 3, 2, '2019-11-01 08:00:00', '2019-11-01 12:00:00', 30, 2200000, 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `flight_transactions`
--

CREATE TABLE `flight_transactions` (
  `id` int(2) NOT NULL,
  `invoice` int(11) NOT NULL,
  `date_transaction` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `routes_id` int(2) NOT NULL,
  `users_id` int(2) NOT NULL,
  `total_price` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `flight_transactions`
--

INSERT INTO `flight_transactions` (`id`, `invoice`, `date_transaction`, `routes_id`, `users_id`, `total_price`) VALUES
(1, 407, '2019-10-22 15:31:58', 1, 1, 0),
(2, 94, '2019-10-22 15:32:25', 2, 2, 0),
(11, 79, '2019-10-23 13:03:47', 3, 2, 0),
(12, 46, '2019-10-23 15:34:35', 3, 3, 0),
(13, 296, '2019-10-23 15:35:47', 3, 1, 1000000),
(14, 12, '2019-10-24 13:53:41', 2, 1, 10000000),
(15, 945, '2019-10-25 20:24:43', 4, 1, 2500000);

-- --------------------------------------------------------

--
-- Table structure for table `flight_transactions_detail`
--

CREATE TABLE `flight_transactions_detail` (
  `id` int(2) NOT NULL,
  `invoice_id` int(5) NOT NULL,
  `routes_id` int(2) NOT NULL,
  `passenger_type_id` int(2) NOT NULL,
  `price` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `flight_transactions_detail`
--

INSERT INTO `flight_transactions_detail` (`id`, `invoice_id`, `routes_id`, `passenger_type_id`, `price`) VALUES
(1, 1, 1, 1, 1000000),
(2, 1, 1, 3, 1000000);

-- --------------------------------------------------------

--
-- Table structure for table `flight_type`
--

CREATE TABLE `flight_type` (
  `id` int(1) NOT NULL,
  `type` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `flight_type`
--

INSERT INTO `flight_type` (`id`, `type`) VALUES
(1, 'Langsung'),
(2, 'Transit');

-- --------------------------------------------------------

--
-- Table structure for table `insurance_flight`
--

CREATE TABLE `insurance_flight` (
  `id` int(2) NOT NULL,
  `name` varchar(50) NOT NULL,
  `pay` int(10) NOT NULL,
  `description` text NOT NULL,
  `terms` text NOT NULL,
  `claim` text NOT NULL,
  `disclaimer` text NOT NULL,
  `benefit` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `insurance_flight`
--

INSERT INTO `insurance_flight` (`id`, `name`, `pay`, `description`, `terms`, `claim`, `disclaimer`, `benefit`) VALUES
(1, 'CHUBB Trip Insurance - Flight', 32000, 'Bebas terbang ke seluruh Indonesia tanpa rasa khawatir. Perjalanan Anda akan terlindungi hingga Rp300.000.000', '- Hanya berlaku untuk penduduk Indonesia dan warga negara asing dengan izin tinggal, bekerja, atau belajar di Indonesia.\n- Hanya berlaku untuk penerbangan yang berasal dari Indonesia.\n- Asuransi tidak berlaku untuk ibu hamil.\n- Asuransi tidak dapat dibatalkan.', '- Online claim via situs Chubb (www.chubbclaims.id)\n- Via email (travel.id@chubb.com\n- Via telepon (1500-257)', '- Seluruh urusan terkait asuransi setelah pembelian adalah antara Tertanggung dan PT Chubb General Insurance Indonesia.\n- Nominal manfaat yang dikembalikan adalah sepenuhnya kebijakan PT Chubb General Insurance Indonesia. Airy tidak bertanggung jawab atas nominal manfaat yang dikembalikan kepada Tertanggung.\n- Dipertanggungkan oleh PT. Chubb General Insurance Indonesia. PT. Chubb General Insurance Indonesia terdaftar dan diawasi oleh OJK.\n- Memahami bahwa Sertifikat Asuransi dan Ketentuan Polis akan dikirim melalui email sebagai pengganti dokumen hardcopy.', '- Kecelakaan Pribadi hingga IDR 300.000.000\n- Pembatalan Penerbangan oleh Penumpang hingga IDR 20.000.000\n- Tertinggal Penerbangan Transit hingga IDR 5.000.000\n- Keterlambatan Bagasi hingga IDR 3.000.000\n- Keterlambatan Penerbangan hingga IDR 4.500.000'),
(2, 'CHUBB Trip Insurance - Baggage', 32000, 'Bebas terbang ke seluruh Indonesia tanpa rasa khawatir. Perjalanan Anda akan terlindungi hingga Rp300.000.000', '- Hanya berlaku untuk bagasi yang dimasukkan ke dalam bagasi pesawat saat check-in (bagasi kabin tidak termasuk).\n- Untuk kerusakan bagasi, berlaku untuk seluruh isi bagasi check-in, dengan syarat koper juga mengalami kerusakan.\n- Asuransi tidak dapat dibatalkan.', '- Online claim via situs Chubb (www.chubbclaims.id)\n- Via email (travel.id@chubb.com\n- Via telepon (1500-257)', '- Seluruh urusan terkait asuransi setelah pembelian adalah antara Tertanggung dan PT Chubb General Insurance Indonesia.\n- Nominal manfaat yang dikembalikan adalah sepenuhnya kebijakan PT Chubb General Insurance Indonesia. Airy tidak bertanggung jawab atas nominal manfaat yang dikembalikan kepada Tertanggung.\n- Dipertanggungkan oleh PT. Chubb General Insurance Indonesia. PT. Chubb General Insurance Indonesia terdaftar dan diawasi oleh OJK.\n- Memahami bahwa Sertifikat Asuransi dan Ketentuan Polis akan dikirim melalui email sebagai pengganti dokumen hardcopy.', '- Kehilangan Bagasi Check-in hingga IDR 5.000.000/barang\n- Kerusakan Bagasi Check-in hinga IDR 1.000.000');

-- --------------------------------------------------------

--
-- Table structure for table `nationalities`
--

CREATE TABLE `nationalities` (
  `id` int(11) NOT NULL,
  `nation` varchar(15) NOT NULL,
  `initial` varchar(5) NOT NULL,
  `code` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nationalities`
--

INSERT INTO `nationalities` (`id`, `nation`, `initial`, `code`) VALUES
(1, 'Indonesia', 'IDN', 62),
(2, 'United States', 'USA', 1),
(3, 'Portugal', 'PRT', 351),
(4, 'France', 'FRA', 33),
(5, 'Malaysia', 'MYS', 60),
(6, 'Japan', 'JPN', 81),
(7, 'South Korea', 'KOR', 82),
(8, 'Russian', 'RUS', 7),
(9, 'Egypt', 'EGY', 20),
(10, 'Singapore', 'SGP', 65),
(11, 'Italy', 'ITA', 39),
(12, 'Iran', 'IRN', 98),
(13, 'Iraq', 'IRQ', 964),
(14, 'Turkey', 'TUR', 90),
(15, 'Thailand', 'THA', 66),
(16, 'Germany', 'DEU', 49),
(17, 'Cambodia', 'KHM', 855);

-- --------------------------------------------------------

--
-- Table structure for table `passenger_type`
--

CREATE TABLE `passenger_type` (
  `id` int(11) NOT NULL,
  `name` varchar(10) NOT NULL,
  `discount` int(3) NOT NULL,
  `airlines_id` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `passenger_type`
--

INSERT INTO `passenger_type` (`id`, `name`, `discount`, `airlines_id`) VALUES
(1, 'Adult', 0, 1),
(2, 'Child', 0, 1),
(3, 'Baby', 90, 1),
(4, 'Adult', 0, 2),
(5, 'Child', 30, 2),
(6, 'Baby', 90, 2);

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `id` int(2) NOT NULL,
  `room` varchar(100) NOT NULL,
  `room_type` varchar(10) NOT NULL,
  `bed_type` varchar(10) NOT NULL,
  `description` text NOT NULL,
  `locations` varchar(30) NOT NULL,
  `address` varchar(200) NOT NULL,
  `price` int(24) NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`id`, `room`, `room_type`, `bed_type`, `description`, `locations`, `address`, `price`, `quantity`, `created_date`, `updated_date`) VALUES
(1, 'Airy Eco Cibinong Gor Barat Pemda 66 Bogor', 'eco', 'double', '•	Jam check-in mulai pukul 14:00 dan check-out sebelum pukul 12:00.\n•	Pihak hotel mungkin akan meminta deposit untuk menutupi pembayaran tak terduga.', 'Bogor', 'Jl. Gor Barat Pemda No.66, Pakansari, Cibinong, Bogor, Jawa Barat 16915, Indonesia', 400000, 15, '2019-10-22 02:18:04', '2019-10-25 14:01:33'),
(2, 'Airy Beji Margonda Raya 88 Depok', 'standard', 'twin', '•	Jam check-in mulai pukul 14:00 dan check-out sebelum pukul 12:00.\n•	Pihak hotel mungkin akan meminta deposit untuk menutupi pembayaran tak terduga.', 'Depok', 'Jl. Margonda Raya Kav. 88, Tower 3, Kemiri Muka, Beji, Kota Depok, Jawa Barat 16423, Kemiri Muka, Beji, Kemiri Muka, Beji, Kota Depok, Jawa Barat 16423, Indonesia', 350000, 5, '2019-10-21 16:50:06', '2019-10-25 10:04:12'),
(3, 'Airy Mantrijeron Panjaitan 51 Yogyakarta', 'eco', 'single', '•	Jam check-in mulai pukul 14:00 dan check-out sebelum pukul 12:00.\n•	Pihak hotel mungkin akan meminta deposit untuk menutupi pembayaran tak terduga.', 'Yogyakarta', 'Jl. DI Panjaitan No.51, Mantrijeron, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55141, Indonesia', 200000, 15, '2019-10-22 02:41:50', '2019-10-25 14:14:18'),
(4, 'Airy Buah Batu Logam 37A Bandung', 'eco', 'double', 'Jam check-in mulai pukul 14:00 dan check-out sebelum pukul 12:00', 'Bandung', 'Jl. Logam No. 37 A. Kujangsari, Bandung Kidul, Bandung, Jawa Barat 40287', 180000, 15, '2019-10-23 09:51:54', '2019-10-25 14:12:52'),
(5, 'Airy Kemang Prapanca Raya 30 Jakarta', 'standard', 'twin', 'Jam check-in mulai pukul 14:00 dan check-out sebelum pukul 12:00.', 'Jakarta', 'Jalan Prapanca Raya No. 30-31, Cipete Utara, Kebayoran Baru , Jaksel', 260000, 10, '2019-10-23 09:52:26', '2019-10-25 13:53:46'),
(6, 'Airy Eco Syariah Dramaga Kampus Dalam 5 Bogor', 'eco', 'double', 'AIRY SYARIAH adalah pilihan alternatif yang memadukan konsep perhotelan dengan kaidah syariah. Bagi tamu berlawanan jenis, akan diminta untuk menunjukkan dokumen Akta Nikah (bagi pasangan) atau Kartu Keluarga (bagi anggota keluarga yang berbeda jenis kelamin).', 'Bogor', 'Jl. Kampus Dalam no.5-6 RT4/RW6 , Babakan Lebak DRAMAGA BOGOR, Balungbangjaya, Bogor Bar., Bogor, Jawa Barat 16680, Indonesia', 130000, 5, '2019-10-23 15:04:37', '2019-10-25 14:00:15'),
(7, 'Airy Ancol Kemayoran RE Martadinata 12 Jakarta', 'standard', 'twin', 'Jam check-in mulai pukul 14:00 dan check-out sebelum pukul 12:00.', 'Jakarta Pusat', 'Jl. R E Martadinata No.12 P-Q, Kemayoran, Jakarta Pusat', 250000, 10, '2019-10-24 07:44:26', '2019-10-25 14:06:43'),
(8, 'Airy Fatmawati Abdul Majid Raya 12 Jakarta', 'standard', 'double', 'Jam check-in mulai pukul 14:00 dan check-out sebelum pukul 12:00.', 'Jakarta Selatan', 'Jl. Abdul Majid Raya No. 12,  Cipete Selatan , Cilandak, Jaksel', 180000, 7, '2019-10-24 15:27:55', '2019-10-25 14:09:06');

-- --------------------------------------------------------

--
-- Table structure for table `room_facility`
--

CREATE TABLE `room_facility` (
  `id` int(2) NOT NULL,
  `name` varchar(20) NOT NULL,
  `room_id` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `room_facility`
--

INSERT INTO `room_facility` (`id`, `name`, `room_id`) VALUES
(1, 'Toilet', 1),
(2, 'Kompor', 1),
(3, 'Kulkas', 1),
(4, 'Toilet', 2),
(5, 'Kompor', 2),
(6, 'Kulkas', 3),
(7, 'Toilet', 3),
(8, 'Kompor', 3),
(9, 'Kulkas', 4);

-- --------------------------------------------------------

--
-- Table structure for table `room_transaction`
--

CREATE TABLE `room_transaction` (
  `id` int(11) NOT NULL,
  `invoices` int(11) NOT NULL,
  `date_transaction` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `durations` int(5) NOT NULL,
  `room_id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  `transaction_id` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `room_transaction`
--

INSERT INTO `room_transaction` (`id`, `invoices`, `date_transaction`, `durations`, `room_id`, `users_id`, `transaction_id`) VALUES
(1, 1234, '2019-10-22 07:25:03', 2, 5, 1, '2'),
(2, 645, '2019-10-25 15:28:35', 1, 2, 1, '1'),
(3, 113, '2019-10-25 15:39:37', 1, 1, 1, '1'),
(4, 460, '2019-10-25 18:24:03', 1, 1, 1, '1'),
(5, 242, '2019-10-25 18:26:10', 1, 1, 1, '1'),
(6, 12, '2019-10-25 18:33:08', 1, 1, 1, '1');

-- --------------------------------------------------------

--
-- Table structure for table `title`
--

CREATE TABLE `title` (
  `id` int(1) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `title`
--

INSERT INTO `title` (`id`, `name`) VALUES
(1, 'Tuan'),
(2, 'Nyonya'),
(3, 'Nona');

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `id` int(2) NOT NULL,
  `transaction` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`id`, `transaction`) VALUES
(1, 'UNPAID'),
(2, 'PAID');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(2) NOT NULL,
  `title_id` int(2) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `code` int(5) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(100) NOT NULL,
  `created_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `activation_key` varchar(64) DEFAULT NULL,
  `date_req_activation_key` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `title_id`, `first_name`, `last_name`, `code`, `phone_number`, `email`, `password`, `created_date`, `updated_date`, `activation_key`, `date_req_activation_key`) VALUES
(1, 1, 'Adila', 'Tresna', 62, '081542055103', 'adilatresna21@gmail.com', '$2b$10$iDU0GoxlaKPXrHXokSqNIeilSzkXoCSxdS3d58Hb28zJV57avsw6S', '2019-10-21 14:14:18', '2019-10-25 06:22:07', '', NULL),
(2, 3, 'Hervita', 'Ayu', 62, '081512312', 'hervita@gmail.com', '$2a$10$TAFuUPaWLZL14EImLf9pLe9.GFdjAvafq/9srDuY2JbRwSGM05JCW', '2019-10-23 15:37:32', '2019-10-25 06:22:14', '', NULL),
(3, 3, 'Kim', 'Jisoo', 82, '8151231232', 'jisookim12@gmail.com', '$2a$10$EiYclDRAlgnCh7gFC/68D.RNgAxY8iu2GfDlxeOBzFuhe/exHYPuK', '2019-10-25 06:33:02', '2019-10-25 06:37:14', '', NULL),
(4, 1, 'Rizky', 'Syarif', 62, '081512312', 'rizky@gmail.com', '$2a$10$JTQ2P7YOO0Clp95TM8rn8e.DjYVzXdC9qwSi9C52wGvV59rt7LIZO', '2019-10-21 15:42:59', '2019-10-25 06:22:24', '', NULL),
(5, 3, 'Kim', 'Jennie', 82, '081512312', 'jennie@gmail.com', '$2a$10$gWn2hxCEqvpD4z4wDwQFK.fJMi/g3FhMFghNYBYDuNl81AO9yJMy2', '2019-10-25 06:39:24', NULL, '', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `airlines`
--
ALTER TABLE `airlines`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `airport`
--
ALTER TABLE `airport`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `album`
--
ALTER TABLE `album`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer_info`
--
ALTER TABLE `customer_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `discount_flight`
--
ALTER TABLE `discount_flight`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `discount_room`
--
ALTER TABLE `discount_room`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `flight`
--
ALTER TABLE `flight`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `flight_facilities`
--
ALTER TABLE `flight_facilities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `flight_routes`
--
ALTER TABLE `flight_routes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `flight_transactions`
--
ALTER TABLE `flight_transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `flight_transactions_detail`
--
ALTER TABLE `flight_transactions_detail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `flight_type`
--
ALTER TABLE `flight_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `insurance_flight`
--
ALTER TABLE `insurance_flight`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nationalities`
--
ALTER TABLE `nationalities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `passenger_type`
--
ALTER TABLE `passenger_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `room` (`room`);

--
-- Indexes for table `room_facility`
--
ALTER TABLE `room_facility`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `room_transaction`
--
ALTER TABLE `room_transaction`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `title`
--
ALTER TABLE `title`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `airlines`
--
ALTER TABLE `airlines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `airport`
--
ALTER TABLE `airport`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `album`
--
ALTER TABLE `album`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `customer_info`
--
ALTER TABLE `customer_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `discount_flight`
--
ALTER TABLE `discount_flight`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `discount_room`
--
ALTER TABLE `discount_room`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `flight`
--
ALTER TABLE `flight`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `flight_facilities`
--
ALTER TABLE `flight_facilities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `flight_routes`
--
ALTER TABLE `flight_routes`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `flight_transactions`
--
ALTER TABLE `flight_transactions`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `flight_transactions_detail`
--
ALTER TABLE `flight_transactions_detail`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `flight_type`
--
ALTER TABLE `flight_type`
  MODIFY `id` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `insurance_flight`
--
ALTER TABLE `insurance_flight`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `nationalities`
--
ALTER TABLE `nationalities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `passenger_type`
--
ALTER TABLE `passenger_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `room_facility`
--
ALTER TABLE `room_facility`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `room_transaction`
--
ALTER TABLE `room_transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `title`
--
ALTER TABLE `title`
  MODIFY `id` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
