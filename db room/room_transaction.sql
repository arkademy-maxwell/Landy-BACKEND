-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 23 Okt 2019 pada 05.51
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

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `room_transaction`
--
ALTER TABLE `room_transaction`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `room_transaction`
--
ALTER TABLE `room_transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
