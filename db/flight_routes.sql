-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 22, 2019 at 10:59 PM
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
-- Table structure for table `flight_routes`
--

CREATE TABLE `flight_routes` (
  `id` int(2) NOT NULL,
  `origin_id` int(2) NOT NULL,
  `destination_id` int(2) NOT NULL,
  `departure` datetime NOT NULL,
  `arrival` datetime NOT NULL,
  `quantity` int(3) NOT NULL,
  `price` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `flight_routes`
--

INSERT INTO `flight_routes` (`id`, `origin_id`, `destination_id`, `departure`, `arrival`, `quantity`, `price`) VALUES
(1, 1, 2, '2019-10-18 11:00:00', '2019-10-18 17:00:00', 10, 1000000),
(2, 2, 1, '2019-10-25 20:00:00', '2019-10-25 23:00:00', 20, 2000000),
(3, 1, 2, '2019-10-27 08:00:00', '2019-10-27 12:00:00', 30, 2500000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `flight_routes`
--
ALTER TABLE `flight_routes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `flight_routes`
--
ALTER TABLE `flight_routes`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
