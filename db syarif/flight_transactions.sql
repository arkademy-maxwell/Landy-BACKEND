-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 23, 2019 at 04:17 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.1.32

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
-- Table structure for table `flight_transactions`
--

CREATE TABLE `flight_transactions` (
  `id` int(2) NOT NULL,
  `invoice` int(11) NOT NULL,
  `date_transaction` timestamp NULL DEFAULT current_timestamp(),
  `routes_id` int(2) NOT NULL,
  `users_id` int(2) NOT NULL,
  `passenger_id` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `flight_transactions`
--

INSERT INTO `flight_transactions` (`id`, `invoice`, `date_transaction`, `routes_id`, `users_id`, `passenger_id`) VALUES
(1, 407, '2019-10-22 15:31:58', 1, 1, 1),
(2, 94, '2019-10-22 15:32:25', 2, 2, 1),
(11, 79, '2019-10-23 13:03:47', 3, 2, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `flight_transactions`
--
ALTER TABLE `flight_transactions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `flight_transactions`
--
ALTER TABLE `flight_transactions`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
