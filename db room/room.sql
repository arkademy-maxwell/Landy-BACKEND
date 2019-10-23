-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 23 Okt 2019 pada 06.45
-- Versi server: 10.3.16-MariaDB
-- Versi PHP: 7.3.7

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
-- Struktur dari tabel `room`
--

CREATE TABLE `room` (
  `id` int(5) NOT NULL,
  `room` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `locations` varchar(30) NOT NULL,
  `address` varchar(200) NOT NULL,
  `facility_id` int(5) NOT NULL,
  `image` varchar(100) NOT NULL,
  `price` int(24) NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_date` timestamp NULL DEFAULT current_timestamp(),
  `updated_date` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `room`
--

INSERT INTO `room` (`id`, `room`, `description`, `locations`, `address`, `facility_id`, `image`, `price`, `quantity`, `created_date`, `updated_date`) VALUES
(1, 'Airy Beji Margonda Raya 88 Depok', '•	Jam check-in mulai pukul 14:00 dan check-out sebelum pukul 12:00.\n•	Pihak hotel mungkin akan meminta deposit untuk menutupi pembayaran tak terduga.', 'Depok', 'Jl. Margonda Raya Kav. 88, Tower 3, Kemiri Muka, Beji, Kota Depok, Jawa Barat 16423, Kemiri Muka, Beji, Kemiri Muka, Beji, Kota Depok, Jawa Barat 16423, Indonesia', 3, '3270ac46-03d8-4fe3-a053-4dcd07bd200c.jpeg', 180000, 15, '2019-10-21 16:50:06', NULL),
(3, 'Airy Beji Margonda Raya 88 Jakarta', '•	Jam check-in mulai pukul 14:00 dan check-out sebelum pukul 12:00.\n•	Pihak hotel mungkin akan meminta deposit untuk menutupi pembayaran tak terduga.', 'Jakarta', 'Jl. Margonda Raya Kav. 88, Tower 3, Kemiri Muka, Beji, Kota Depok, Jawa Barat 16423, Kemiri Muka, Beji, Kemiri Muka, Beji, Kota Depok, Jawa Barat 16423, Indonesia', 1, '9b769f63-de9a-44bb-99a6-8a6ba0c9b545.jpeg', 180000, 15, '2019-10-22 02:17:52', NULL),
(4, 'Airy Beji Margonda Raya 88 Bogor', '•	Jam check-in mulai pukul 14:00 dan check-out sebelum pukul 12:00.\n•	Pihak hotel mungkin akan meminta deposit untuk menutupi pembayaran tak terduga.', 'Bogor', 'Jl. Margonda Raya Kav. 88, Tower 3, Kemiri Muka, Beji, Kota Depok, Jawa Barat 16423, Kemiri Muka, Beji, Kemiri Muka, Beji, Kota Depok, Jawa Barat 16423, Indonesia', 1, 'dde5620a-84c0-4e9f-b8de-99e4dc146086.jpeg', 180000, 15, '2019-10-22 02:18:04', NULL),
(5, 'Airy Beji Margonda Raya 88 Yogyakarta', '•	Jam check-in mulai pukul 14:00 dan check-out sebelum pukul 12:00.\n•	Pihak hotel mungkin akan meminta deposit untuk menutupi pembayaran tak terduga.', 'Yogyakarta', 'Jl. Margonda Raya Kav. 88, Tower 3, Kemiri Muka, Beji, Kota Depok, Jawa Barat 16423, Kemiri Muka, Beji, Kemiri Muka, Beji, Kota Depok, Jawa Barat 16423, Indonesia', 1, 'FANTA.jpg', 180000, 15, '2019-10-22 02:41:50', '2019-10-23 04:38:43');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `room` (`room`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `room`
--
ALTER TABLE `room`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
