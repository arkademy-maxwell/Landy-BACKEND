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

--
-- Indexes for dumped tables
--

--
-- Indexes for table `nationalities`
--
ALTER TABLE `nationalities`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `nationalities`
--
ALTER TABLE `nationalities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
