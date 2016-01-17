SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS `channel` (
  `alias` varchar(30) NOT NULL,
  `topic` varchar(255) NOT NULL DEFAULT '1',
  `avatar` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `channel` (`alias`, `topic`, `avatar`) VALUES
('3iudjlqwxiqwdjlxsanxjl', 'Parties', 'http://www.cemup.com/app2.0/img/menu/vital.png'),
('gsyhgxshxbkdbwhxb', 'Superball', 'http://www.cemup.com/app2.0/img/menu/vital.png'),
('tfgqjvbxjbgqvxbwjbhw', 'Sports', 'http://www.cemup.com/app2.0/img/menu/vital.png'),
('yghbxhbxyd3egh3iduxnweb', 'Fan', 'http://www.cemup.com/app2.0/img/menu/vital.png');

CREATE TABLE IF NOT EXISTS `message` (
  `id` bigint(20) NOT NULL,
  `sender` varchar(100) NOT NULL,
  `channel` bigint(20) NOT NULL,
  `body` text,
  `created_on` bigint(20) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `user2channel` (
  `user` varchar(30) NOT NULL,
  `channel` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `channel`
  ADD UNIQUE KEY `alias` (`alias`), ADD KEY `owner` (`owner`);

ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `message`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;