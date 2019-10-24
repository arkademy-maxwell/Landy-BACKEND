-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 23 Okt 2019 pada 05.41
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
-- Struktur dari tabel `airlines`
--

CREATE TABLE `airlines` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `code` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `airlines`
--

INSERT INTO `airlines` (`id`, `name`, `code`) VALUES
(1, 'Garuda Indonesia', 'GI'),
(2, 'Lion Air', 'LA'),
(3, 'Batik Air', 'BA'),
(4, 'Citilink', 'CL'),
(5, 'Sriwijaya Air', 'SA');

-- --------------------------------------------------------

--
-- Struktur dari tabel `facility`
--

CREATE TABLE `facility` (
  `id` int(5) NOT NULL,
  `name` text NOT NULL,
  `image` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `facility`
--

INSERT INTO `facility` (`id`, `name`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Toilet', '', '2019-10-21 15:15:37', NULL),
(3, 'Kompor', '', '2019-10-21 15:18:21', '2019-10-21 16:40:03'),
(4, 'Kulkas', '', '2019-10-21 16:39:25', NULL),
(5, 'Area merokok', '', '2019-10-22 16:28:47', NULL),
(6, 'Televisi', 'television.png', '2019-10-23 03:36:02', NULL),
(7, 'Wifi', 'wifi.png', '2019-10-23 03:39:13', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `flight`
--

CREATE TABLE `flight` (
  `id` int(11) NOT NULL,
  `code` varchar(100) NOT NULL,
  `seat_row` int(11) NOT NULL,
  `seat_column` int(11) NOT NULL,
  `airline_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `flight`
--

INSERT INTO `flight` (`id`, `code`, `seat_row`, `seat_column`, `airline_id`) VALUES
(1, 'GI-645', 4, 4, 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `flight_facilities`
--

CREATE TABLE `flight_facilities` (
  `id` int(11) NOT NULL,
  `baggage` varchar(11) NOT NULL,
  `food` varchar(14) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `flight_facilities`
--

INSERT INTO `flight_facilities` (`id`, `baggage`, `food`) VALUES
(1, '20', 'Tidak Tersedia');

-- --------------------------------------------------------

--
-- Struktur dari tabel `flight_transactions`
--

CREATE TABLE `flight_transactions` (
  `id` int(2) NOT NULL,
  `invoice` int(11) NOT NULL,
  `date_transaction` timestamp NULL DEFAULT current_timestamp(),
  `flight_id` int(2) NOT NULL,
  `routes_id` int(2) NOT NULL,
  `users_id` int(2) NOT NULL,
  `code_seat` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `room`
--

CREATE TABLE `room` (
  `id` int(5) NOT NULL,
  `room` varchar(100) NOT NULL,
  `description` text NOT NULL,
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

INSERT INTO `room` (`id`, `room`, `description`, `address`, `facility_id`, `image`, `price`, `quantity`, `created_date`, `updated_date`) VALUES
(1, 'Airy Beji Margonda Raya 88 Depok', '•	Jam check-in mulai pukul 14:00 dan check-out sebelum pukul 12:00.\n•	Pihak hotel mungkin akan meminta deposit untuk menutupi pembayaran tak terduga.', 'Jl. Margonda Raya Kav. 88, Tower 3, Kemiri Muka, Beji, Kota Depok, Jawa Barat 16423, Kemiri Muka, Beji, Kemiri Muka, Beji, Kota Depok, Jawa Barat 16423, Indonesia', 3, '3270ac46-03d8-4fe3-a053-4dcd07bd200c.jpeg', 180000, 15, '2019-10-21 16:50:06', NULL),
(3, 'Airy Beji Margonda Raya 88 Jakarta', '•	Jam check-in mulai pukul 14:00 dan check-out sebelum pukul 12:00.\n•	Pihak hotel mungkin akan meminta deposit untuk menutupi pembayaran tak terduga.', 'Jl. Margonda Raya Kav. 88, Tower 3, Kemiri Muka, Beji, Kota Depok, Jawa Barat 16423, Kemiri Muka, Beji, Kemiri Muka, Beji, Kota Depok, Jawa Barat 16423, Indonesia', 1, '9b769f63-de9a-44bb-99a6-8a6ba0c9b545.jpeg', 180000, 15, '2019-10-22 02:17:52', NULL),
(4, 'Airy Beji Margonda Raya 88 Bogor', '•	Jam check-in mulai pukul 14:00 dan check-out sebelum pukul 12:00.\n•	Pihak hotel mungkin akan meminta deposit untuk menutupi pembayaran tak terduga.', 'Jl. Margonda Raya Kav. 88, Tower 3, Kemiri Muka, Beji, Kota Depok, Jawa Barat 16423, Kemiri Muka, Beji, Kemiri Muka, Beji, Kota Depok, Jawa Barat 16423, Indonesia', 1, 'dde5620a-84c0-4e9f-b8de-99e4dc146086.jpeg', 180000, 15, '2019-10-22 02:18:04', NULL),
(5, 'Airy Beji Margonda Raya 88 Yogyakarta', '•	Jam check-in mulai pukul 14:00 dan check-out sebelum pukul 12:00.\n•	Pihak hotel mungkin akan meminta deposit untuk menutupi pembayaran tak terduga.', 'Jl. Margonda Raya Kav. 88, Tower 3, Kemiri Muka, Beji, Kota Depok, Jawa Barat 16423, Kemiri Muka, Beji, Kemiri Muka, Beji, Kota Depok, Jawa Barat 16423, Indonesia', 1, 'FANTA.jpg', 180000, 15, '2019-10-22 02:41:50', '2019-10-23 02:31:07');

-- --------------------------------------------------------

--
-- Struktur dari tabel `room_transaction`
--

CREATE TABLE `room_transaction` (
  `id` int(11) NOT NULL,
  `invoices` int(11) NOT NULL,
  `date_transaction` timestamp NOT NULL DEFAULT current_timestamp(),
  `durations` int(5) NOT NULL,
  `room_id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  `transaction_id` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `room_transaction`
--

INSERT INTO `room_transaction` (`id`, `invoices`, `date_transaction`, `durations`, `room_id`, `users_id`, `transaction_id`) VALUES
(1, 1234, '2019-10-22 07:25:03', 2, 5, 22, '2');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaction`
--

CREATE TABLE `transaction` (
  `id` int(2) NOT NULL,
  `transaction` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `transaction`
--

INSERT INTO `transaction` (`id`, `transaction`) VALUES
(1, 'UNPAID'),
(2, 'PAID');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(5) NOT NULL,
  `title` varchar(10) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(200) NOT NULL,
  `created_date` timestamp NULL DEFAULT current_timestamp(),
  `updated_date` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `title`, `first_name`, `last_name`, `phone_number`, `email`, `password`, `created_date`, `updated_date`) VALUES
(1, 'Mr.', 'Admin', 'Admin', '2147483647', 'admin@admin.com', '$2b$10$l.eHLzQtSJjXCcsRVLcV/OLaem7v/x0YvURkDLyHdMDz9ZD5ECUCC', '2019-10-21 10:08:24', NULL),
(19, 'Mr.', 'Max', 'Well', '2147483647', 'maxwell@gmail.com', '$2b$10$JUkrv7BmTEjLCxB7QECBeeax.0Y6dnIAR6DPcDxRvEzU.AF201hea', '2019-10-21 10:32:13', NULL),
(20, 'Mr.', 'Max', 'Well', '2147483647', 'maxwell@gmail.com', '$2b$10$2Z6aNKU2HbgVNEilLuT.9eYtFE3Yqgj1Y2nt6ljpKSXLU6T/WQ.Ke', '2019-10-21 10:33:16', NULL),
(21, 'Mr.', 'Maxe', 'Welle', '081392371407', 'maxwell12@gmail.com', '$2b$10$3JonOdDMpM/4ZcYTamG8cOHnXXjL8rqxScrvjd.sR.1LFEIsp8olG', '2019-10-21 10:49:04', NULL),
(22, 'Mr.', 'Muhammad', 'Luthfi', '081392371407', 'maxwell12@gmail.com', '$2a$10$wQMy9U7r7FZ6TcM1mY41/e5M8fJEe.LMM9.DC2SZTCUQ226TPDLzW', '2019-10-21 14:21:01', NULL);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `airlines`
--
ALTER TABLE `airlines`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `facility`
--
ALTER TABLE `facility`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `flight`
--
ALTER TABLE `flight`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `flight_facilities`
--
ALTER TABLE `flight_facilities`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `flight_transactions`
--
ALTER TABLE `flight_transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `room` (`room`);

--
-- Indeks untuk tabel `room_transaction`
--
ALTER TABLE `room_transaction`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `airlines`
--
ALTER TABLE `airlines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `facility`
--
ALTER TABLE `facility`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `flight`
--
ALTER TABLE `flight`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `flight_facilities`
--
ALTER TABLE `flight_facilities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `flight_transactions`
--
ALTER TABLE `flight_transactions`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `room`
--
ALTER TABLE `room`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `room_transaction`
--
ALTER TABLE `room_transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
