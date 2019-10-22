-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
<<<<<<< HEAD
-- Host: 127.0.0.1
-- Waktu pembuatan: 21 Okt 2019 pada 12.49
-- Versi server: 10.3.16-MariaDB
-- Versi PHP: 7.3.7
=======
-- Host: localhost:3306
-- Generation Time: Oct 21, 2019 at 09:15 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.2
>>>>>>> master

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
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `id` int(5) NOT NULL,
  `room` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `address` varchar(100) NOT NULL,
  `facility` varchar(20) NOT NULL,
  `image` varchar(100) NOT NULL,
  `price` int(24) NOT NULL,
  `quantity` int(11) NOT NULL,
  `duration` int(11) NOT NULL,
  `created_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(5) NOT NULL,
  `title` varchar(10) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `email` varchar(40) NOT NULL,
<<<<<<< HEAD
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
(21, 'Mr.', 'Maxe', 'Welle', '081392371407', 'maxwell12@gmail.com', '$2b$10$3JonOdDMpM/4ZcYTamG8cOHnXXjL8rqxScrvjd.sR.1LFEIsp8olG', '2019-10-21 10:49:04', NULL);
=======
  `password` varchar(100) NOT NULL,
  `created_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `title`, `first_name`, `last_name`, `phone_number`, `email`, `password`, `created_date`, `updated_date`) VALUES
(1, 'Mr.', 'Adila', 'Tresna', '081542055103', 'adilatresna21@gmail.com', '$2b$10$iDU0GoxlaKPXrHXokSqNIeilSzkXoCSxdS3d58Hb28zJV57avsw6S', '2019-10-21 14:14:18', NULL);
>>>>>>> master

--
-- Indexes for dumped tables
--

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;

--
<<<<<<< HEAD
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
=======
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
>>>>>>> master
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
