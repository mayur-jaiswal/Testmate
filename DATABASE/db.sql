CREATE DATABASE  IF NOT EXISTS `gatewebsite` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `gatewebsite`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: gatewebsite
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `options`
--

DROP TABLE IF EXISTS `options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `options` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question_id` int NOT NULL,
  `option_text` varchar(255) DEFAULT NULL,
  `is_correct` tinyint(1) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `question_id` (`question_id`),
  CONSTRAINT `options_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `options_ibfk_10` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_11` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_12` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_13` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_14` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_15` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_16` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_17` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_18` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_19` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_2` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_20` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_21` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_22` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_23` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_24` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_25` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_26` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_27` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_28` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_29` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_3` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_30` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_31` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_32` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_33` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_4` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_5` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_6` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_7` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_8` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `options_ibfk_9` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=412 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `options`
--

LOCK TABLES `options` WRITE;
/*!40000 ALTER TABLE `options` DISABLE KEYS */;
INSERT INTO `options` VALUES (156,83,'A',0,'2024-07-08 17:31:16'),(157,83,'B',0,'2024-07-08 17:31:16'),(158,83,'C',0,'2024-07-08 17:31:16'),(159,83,'D',1,'2024-07-08 17:31:16'),(160,84,'A',0,'2024-07-08 17:32:57'),(161,84,'B',0,'2024-07-08 17:32:57'),(162,84,'C',1,'2024-07-08 17:32:57'),(163,84,'D',0,'2024-07-08 17:32:57'),(164,85,'A',0,'2024-07-08 17:33:44'),(165,85,'B',0,'2024-07-08 17:33:45'),(166,85,'C',0,'2024-07-08 17:33:45'),(167,85,'D',1,'2024-07-08 17:33:45'),(168,86,'A',1,'2024-07-08 17:34:37'),(169,86,'B',0,'2024-07-08 17:34:37'),(170,86,'C',0,'2024-07-08 17:34:37'),(171,86,'D',0,'2024-07-08 17:34:37'),(172,87,'A',0,'2024-07-08 17:36:40'),(173,87,'B',1,'2024-07-08 17:36:40'),(174,87,'C',0,'2024-07-08 17:36:40'),(175,87,'D',0,'2024-07-08 17:36:40'),(176,88,'A',0,'2024-07-08 17:38:04'),(177,88,'B',1,'2024-07-08 17:38:04'),(178,88,'C',0,'2024-07-08 17:38:04'),(179,88,'D',0,'2024-07-08 17:38:04'),(180,89,'A',0,'2024-07-08 17:39:16'),(181,89,'B',0,'2024-07-08 17:39:16'),(182,89,'C',0,'2024-07-08 17:39:16'),(183,89,'D',1,'2024-07-08 17:39:16'),(184,90,'A',0,'2024-07-08 17:39:36'),(185,90,'B',0,'2024-07-08 17:39:36'),(186,90,'C',0,'2024-07-08 17:39:36'),(187,90,'D',1,'2024-07-08 17:39:36'),(188,91,'A',0,'2024-07-08 17:40:34'),(189,91,'B',1,'2024-07-08 17:40:34'),(190,91,'C',0,'2024-07-08 17:40:35'),(191,91,'D',0,'2024-07-08 17:40:35'),(192,92,'A',0,'2024-07-08 17:41:29'),(193,92,'B',0,'2024-07-08 17:41:29'),(194,92,'C',0,'2024-07-08 17:41:30'),(195,92,'D',1,'2024-07-08 17:41:30'),(196,93,'A',1,'2024-07-08 17:42:30'),(197,93,'B',0,'2024-07-08 17:42:30'),(198,93,'C',0,'2024-07-08 17:42:30'),(199,93,'D',0,'2024-07-08 17:42:30'),(200,94,'A',0,'2024-07-08 17:43:23'),(201,94,'B',0,'2024-07-08 17:43:23'),(202,94,'C',0,'2024-07-08 17:43:23'),(203,94,'D',1,'2024-07-08 17:43:23'),(204,95,'A',0,'2024-07-08 17:44:15'),(205,95,'B',0,'2024-07-08 17:44:15'),(206,95,'C',0,'2024-07-08 17:44:15'),(207,95,'D',1,'2024-07-08 17:44:15'),(208,96,'A',1,'2024-07-08 17:45:21'),(209,96,'B',0,'2024-07-08 17:45:21'),(210,96,'C',0,'2024-07-08 17:45:21'),(211,96,'D',0,'2024-07-08 17:45:21'),(212,97,'A',1,'2024-07-08 17:45:53'),(213,97,'B',0,'2024-07-08 17:45:53'),(214,97,'C',0,'2024-07-08 17:45:53'),(215,97,'D',0,'2024-07-08 17:45:53'),(216,98,'A',0,'2024-07-08 17:47:29'),(217,98,'B',1,'2024-07-08 17:47:29'),(218,98,'C',0,'2024-07-08 17:47:29'),(219,98,'D',0,'2024-07-08 17:47:29'),(220,99,'A',1,'2024-07-08 17:48:23'),(221,99,'B',0,'2024-07-08 17:48:23'),(222,99,'C',0,'2024-07-08 17:48:23'),(223,99,'D',0,'2024-07-08 17:48:23'),(224,100,'A',0,'2024-07-08 17:49:21'),(225,100,'B',1,'2024-07-08 17:49:21'),(226,100,'C',0,'2024-07-08 17:49:22'),(227,100,'D',0,'2024-07-08 17:49:22'),(228,101,'A',0,'2024-07-08 17:50:16'),(229,101,'B',0,'2024-07-08 17:50:16'),(230,101,'C',1,'2024-07-08 17:50:16'),(231,101,'D',0,'2024-07-08 17:50:16'),(232,102,'A',0,'2024-07-08 17:50:56'),(233,102,'B',0,'2024-07-08 17:50:56'),(234,102,'C',1,'2024-07-08 17:50:56'),(235,102,'D',0,'2024-07-08 17:50:57'),(236,103,'A',0,'2024-07-08 17:51:51'),(237,103,'B',0,'2024-07-08 17:51:51'),(238,103,'C',0,'2024-07-08 17:51:52'),(239,103,'D',1,'2024-07-08 17:51:52'),(240,104,'A',0,'2024-07-08 17:53:19'),(241,104,'B',0,'2024-07-08 17:53:19'),(242,104,'C',1,'2024-07-08 17:53:19'),(243,104,'D',0,'2024-07-08 17:53:19'),(244,105,'A',0,'2024-07-08 17:55:31'),(245,105,'B',1,'2024-07-08 17:55:31'),(246,105,'C',1,'2024-07-08 17:55:31'),(247,105,'D',1,'2024-07-08 17:55:31'),(248,106,'A',1,'2024-07-08 18:04:29'),(249,106,'B',1,'2024-07-08 18:04:29'),(250,106,'C',0,'2024-07-08 18:04:29'),(251,106,'D',1,'2024-07-08 18:04:29'),(252,107,'A',1,'2024-07-08 18:05:25'),(253,107,'B',1,'2024-07-08 18:05:25'),(254,107,'C',0,'2024-07-08 18:05:25'),(255,107,'D',0,'2024-07-08 18:05:25'),(256,108,'A',1,'2024-07-08 18:06:33'),(257,108,'B',0,'2024-07-08 18:06:33'),(258,108,'C',0,'2024-07-08 18:06:33'),(259,108,'D',1,'2024-07-08 18:06:34'),(260,109,'A',1,'2024-07-08 18:08:17'),(261,109,'B',1,'2024-07-08 18:08:17'),(262,109,'C',1,'2024-07-08 18:08:17'),(263,109,'D',0,'2024-07-08 18:08:17'),(264,110,'512',0,'2024-07-08 18:10:57'),(265,110,'503',0,'2024-07-08 18:10:57'),(266,110,'509',1,'2024-07-08 18:10:57'),(267,110,'506',0,'2024-07-08 18:10:57'),(268,111,'8',0,'2024-07-08 18:13:10'),(269,111,'5',1,'2024-07-08 18:13:10'),(270,111,'9',0,'2024-07-08 18:13:10'),(271,111,'6',0,'2024-07-08 18:13:10'),(272,112,'30',0,'2024-07-08 18:15:10'),(273,112,'36',1,'2024-07-08 18:15:10'),(274,112,'32',0,'2024-07-08 18:15:10'),(275,112,'33',0,'2024-07-08 18:15:10'),(276,113,'3',0,'2024-07-08 18:18:19'),(277,113,'6',0,'2024-07-08 18:18:19'),(278,113,'8',1,'2024-07-08 18:18:19'),(279,113,'9',0,'2024-07-08 18:18:19'),(280,114,'7',1,'2024-07-08 18:19:48'),(281,114,'6',0,'2024-07-08 18:19:48'),(282,114,'8',0,'2024-07-08 18:19:48'),(283,114,'9',0,'2024-07-08 18:19:48'),(284,115,'0.85',1,'2024-07-08 18:22:05'),(285,115,'0.95',0,'2024-07-08 18:22:05'),(286,115,'0.75',0,'2024-07-08 18:22:05'),(287,115,'0.65',0,'2024-07-08 18:22:05'),(288,116,'-0.8',0,'2024-07-08 18:24:18'),(289,116,'-0.9',0,'2024-07-08 18:24:18'),(290,116,'-0.5',1,'2024-07-08 18:24:18'),(291,116,'0.5',0,'2024-07-08 18:24:18'),(292,117,'8',0,'2024-07-08 18:25:49'),(293,117,'9',0,'2024-07-08 18:25:49'),(294,117,'4',1,'2024-07-08 18:25:49'),(295,117,'5',0,'2024-07-08 18:25:49'),(296,118,'A',1,'2024-07-08 18:28:12'),(297,118,'B',0,'2024-07-08 18:28:12'),(298,118,'C',0,'2024-07-08 18:28:12'),(299,118,'D',0,'2024-07-08 18:28:12'),(300,119,'A',0,'2024-07-08 18:30:09'),(301,119,'B',0,'2024-07-08 18:30:09'),(302,119,'C',0,'2024-07-08 18:30:09'),(303,119,'D',1,'2024-07-08 18:30:09'),(304,120,'A',0,'2024-07-08 18:31:37'),(305,120,'B',0,'2024-07-08 18:31:37'),(306,120,'C',1,'2024-07-08 18:31:37'),(307,120,'D',0,'2024-07-08 18:31:37'),(308,121,'A',1,'2024-07-08 18:32:31'),(309,121,'B',0,'2024-07-08 18:32:31'),(310,121,'C',0,'2024-07-08 18:32:31'),(311,121,'D',0,'2024-07-08 18:32:31'),(312,122,'A',0,'2024-07-08 18:34:27'),(313,122,'B',1,'2024-07-08 18:34:27'),(314,122,'C',0,'2024-07-08 18:34:27'),(315,122,'D',0,'2024-07-08 18:34:27'),(316,123,'A',0,'2024-07-08 18:35:33'),(317,123,'B',0,'2024-07-08 18:35:33'),(318,123,'C',0,'2024-07-08 18:35:33'),(319,123,'D',1,'2024-07-08 18:35:33'),(320,124,'A',1,'2024-07-08 18:36:29'),(321,124,'B',0,'2024-07-08 18:36:29'),(322,124,'C',0,'2024-07-08 18:36:29'),(323,124,'D',0,'2024-07-08 18:36:29'),(324,125,'A',1,'2024-07-08 18:37:17'),(325,125,'B',0,'2024-07-08 18:37:17'),(326,125,'C',0,'2024-07-08 18:37:17'),(327,125,'D',0,'2024-07-08 18:37:17'),(328,126,'A',0,'2024-07-08 18:38:33'),(329,126,'B',0,'2024-07-08 18:38:33'),(330,126,'C',0,'2024-07-08 18:38:33'),(331,126,'D',1,'2024-07-08 18:38:33'),(332,127,'A',1,'2024-07-08 18:40:18'),(333,127,'B',1,'2024-07-08 18:40:18'),(334,127,'C',1,'2024-07-08 18:40:18'),(335,127,'D',0,'2024-07-08 18:40:18'),(336,128,'A',1,'2024-07-08 18:41:08'),(337,128,'B',1,'2024-07-08 18:41:08'),(338,128,'C',1,'2024-07-08 18:41:08'),(339,128,'D',0,'2024-07-08 18:41:08'),(340,129,'A',0,'2024-07-08 18:42:09'),(341,129,'B',1,'2024-07-08 18:42:09'),(342,129,'C',1,'2024-07-08 18:42:09'),(343,129,'D',1,'2024-07-08 18:42:09'),(344,130,'A',1,'2024-07-08 18:43:30'),(345,130,'B',1,'2024-07-08 18:43:30'),(346,130,'C',1,'2024-07-08 18:43:30'),(347,130,'D',0,'2024-07-08 18:43:30'),(348,131,'A',1,'2024-07-08 18:44:14'),(349,131,'B',1,'2024-07-08 18:44:14'),(350,131,'C',1,'2024-07-08 18:44:14'),(351,131,'D',0,'2024-07-08 18:44:15'),(352,132,'A',1,'2024-07-08 18:44:56'),(353,132,'B',1,'2024-07-08 18:44:56'),(354,132,'C',1,'2024-07-08 18:44:56'),(355,132,'D',0,'2024-07-08 18:44:56'),(356,133,'A',1,'2024-07-08 18:46:12'),(357,133,'B',0,'2024-07-08 18:46:12'),(358,133,'C',0,'2024-07-08 18:46:12'),(359,133,'D',0,'2024-07-08 18:46:12'),(360,134,'A',1,'2024-07-08 18:47:36'),(361,134,'B',0,'2024-07-08 18:47:36'),(362,134,'C',1,'2024-07-08 18:47:36'),(363,134,'D',1,'2024-07-08 18:47:36'),(364,135,'A',1,'2024-07-08 18:48:34'),(365,135,'B',1,'2024-07-08 18:48:34'),(366,135,'C',0,'2024-07-08 18:48:34'),(367,135,'D',1,'2024-07-08 18:48:34'),(368,136,'A',0,'2024-07-08 18:49:34'),(369,136,'B',1,'2024-07-08 18:49:34'),(370,136,'C',0,'2024-07-08 18:49:34'),(371,136,'D',1,'2024-07-08 18:49:34'),(372,137,'5',0,'2024-07-08 18:51:34'),(373,137,'3',0,'2024-07-08 18:51:34'),(374,137,'4',0,'2024-07-08 18:51:34'),(375,137,'2',1,'2024-07-08 18:51:34'),(376,138,'0.5',1,'2024-07-08 18:53:16'),(377,138,'0.3',0,'2024-07-08 18:53:16'),(378,138,'0.4',0,'2024-07-08 18:53:16'),(379,138,'0.2',0,'2024-07-08 18:53:16'),(380,139,'24',1,'2024-07-08 18:54:55'),(381,139,'22',0,'2024-07-08 18:54:55'),(382,139,'25',0,'2024-07-08 18:54:55'),(383,139,'20',0,'2024-07-08 18:54:55'),(384,140,'7.07 to 7.09',1,'2024-07-08 18:58:20'),(385,140,'7.17 to 7.19',0,'2024-07-08 18:58:20'),(386,140,'8.07 to 8.09',0,'2024-07-08 18:58:20'),(387,140,'8.17 to 8.19',0,'2024-07-08 18:58:20'),(388,141,'36',0,'2024-07-08 19:00:04'),(389,141,'43',0,'2024-07-08 19:00:04'),(390,141,'33',1,'2024-07-08 19:00:04'),(391,141,'30',0,'2024-07-08 19:00:04'),(392,142,'3.42 to 3.45',0,'2024-07-08 19:02:34'),(393,142,'0.42 to 0.45',0,'2024-07-08 19:02:34'),(394,142,'1.42 to 1.45',1,'2024-07-08 19:02:34'),(395,142,'2.42 to 2.45',0,'2024-07-08 19:02:34'),(396,143,'2',0,'2024-07-08 19:03:41'),(397,143,'3',0,'2024-07-08 19:03:41'),(398,143,'0',1,'2024-07-08 19:03:41'),(399,143,'1',0,'2024-07-08 19:03:41'),(400,144,'152',0,'2024-07-08 19:05:20'),(401,144,'153',1,'2024-07-08 19:05:20'),(402,144,'155',0,'2024-07-08 19:05:20'),(403,144,'150',0,'2024-07-08 19:05:20'),(404,145,'0.9',0,'2024-07-08 19:07:08'),(405,145,'0.2',0,'2024-07-08 19:07:08'),(406,145,'0.6',1,'2024-07-08 19:07:08'),(407,145,'0.5',0,'2024-07-08 19:07:08'),(408,146,'40',0,'2024-07-08 19:11:05'),(409,146,'50',0,'2024-07-08 19:11:05'),(410,146,'80',1,'2024-07-08 19:11:05'),(411,146,'70',0,'2024-07-08 19:11:05');
/*!40000 ALTER TABLE `options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `test_id` int NOT NULL,
  `question_link` varchar(255) NOT NULL,
  `question_type` enum('MCQ','NUMERICAL','MSQ') NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `marks` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `test_id` (`test_id`),
  CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_10` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_11` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_12` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_13` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_14` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_15` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_16` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_17` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_18` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_19` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_2` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_20` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_21` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_22` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_23` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_24` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_25` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_26` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_27` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_28` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_29` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_3` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_30` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_31` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_32` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_33` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_34` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_4` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_5` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_6` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_7` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_8` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `questions_ibfk_9` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=147 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (83,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720459876/questions/fpsgpxdkyvcj938t58mk.png','MCQ','2024-07-08 17:31:16',1),(84,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720459977/questions/meavqhlcg2rycgmiwm10.png','MCQ','2024-07-08 17:32:57',1),(85,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720460024/questions/c9njr9ovqlfnbbqmwtih.png','MCQ','2024-07-08 17:33:44',1),(86,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720460077/questions/haozsojmnmhhtbghvqp6.png','MCQ','2024-07-08 17:34:36',1),(87,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720460200/questions/iorehkmimtjxbrzdytnc.png','MCQ','2024-07-08 17:36:39',1),(88,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720460284/questions/fcnpalgalzsdi5w6qg00.png','MCQ','2024-07-08 17:38:04',2),(89,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720460356/questions/yqelyb4ffqshait7i1la.png','MCQ','2024-07-08 17:39:16',2),(90,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720460376/questions/danktdnypdwtkakbnl36.png','MCQ','2024-07-08 17:39:36',2),(91,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720460434/questions/rf2g9axyneo69bfgdndg.png','MCQ','2024-07-08 17:40:34',2),(92,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720460490/questions/gmyhzt86dg0tgbhjoo5z.png','MCQ','2024-07-08 17:41:29',2),(93,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720460550/questions/y0ysufusk8wvd6babjzy.png','MCQ','2024-07-08 17:42:30',1),(94,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720460603/questions/tr0klsjyug8dtdewdhiw.png','MCQ','2024-07-08 17:43:23',1),(95,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720460654/questions/tfuci9bt8c6olscxh014.png','MCQ','2024-07-08 17:44:15',1),(96,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720460721/questions/i16kkqq2tnfngrbf6as0.png','MCQ','2024-07-08 17:45:21',1),(97,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720460753/questions/kvduhlrjitvti5ab4359.png','MCQ','2024-07-08 17:45:53',1),(98,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720460850/questions/jdfgal6yn0ah5sapqqtg.png','MCQ','2024-07-08 17:47:29',1),(99,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720460899/questions/gic5acekw4la6oa5tyms.png','MCQ','2024-07-08 17:48:23',1),(100,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720460962/questions/hgwe0unhbxuauhfveugm.png','MCQ','2024-07-08 17:49:21',1),(101,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720461016/questions/muvrexs0nx5ec3rwusgf.png','MCQ','2024-07-08 17:50:16',1),(102,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720461057/questions/aohx1hwj59hmrrao1xsh.png','MCQ','2024-07-08 17:50:56',1),(103,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720461111/questions/vqytz1abwnzkw9ipay3y.png','MCQ','2024-07-08 17:51:51',1),(104,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720461199/questions/belukt1aodzxlnovxx1v.png','MCQ','2024-07-08 17:53:19',1),(105,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720461331/questions/zmqyuvr2amfeabjlgivi.png','MSQ','2024-07-08 17:55:31',1),(106,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720461869/questions/ospev6kxas7iaef73q8r.png','MSQ','2024-07-08 18:04:29',1),(107,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720461926/questions/ce9fvdw7bg6czv3fgjcg.png','MSQ','2024-07-08 18:05:25',1),(108,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720461993/questions/zhxqv5roafsyzal5ilht.png','MSQ','2024-07-08 18:06:33',1),(109,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720462095/questions/gn0lwrfduye8fty8wfmj.png','MSQ','2024-07-08 18:08:16',1),(110,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720462257/questions/brxmpvonqpvwymcdtp2q.png','MCQ','2024-07-08 18:10:57',1),(111,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720462390/questions/evwtmaldoaz6nvlblhwy.png','MCQ','2024-07-08 18:13:10',1),(112,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720462510/questions/kylpgfbeblif33rop3h0.png','MCQ','2024-07-08 18:15:10',1),(113,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720462699/questions/b9w0dcfzrbf9hnxouhmk.png','MCQ','2024-07-08 18:18:18',1),(114,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720462788/questions/kluulkyrxq33hcktce9o.png','MCQ','2024-07-08 18:19:47',1),(115,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720462924/questions/dvwzllayjuyqvjyqgy5e.png','MCQ','2024-07-08 18:22:05',1),(116,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720463058/questions/lnpyhvfygfrth79clmin.png','MCQ','2024-07-08 18:24:18',1),(117,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720463149/questions/dpkc7vpf38igsyzsx8mb.png','MCQ','2024-07-08 18:25:49',1),(118,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720463292/questions/v4zd35jwvrh6bnjvrdj0.png','MCQ','2024-07-08 18:28:12',2),(119,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720463409/questions/dmacbmnlrqcozwcvqbbh.png','MCQ','2024-07-08 18:30:09',2),(120,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720463497/questions/q9hnwjeud4bdryirl9qf.png','MCQ','2024-07-08 18:31:37',2),(121,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720463552/questions/scd2tvesaofzftsyozzj.png','MCQ','2024-07-08 18:32:31',2),(122,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720463667/questions/blsg06zx6iplb5yo8ao0.png','MCQ','2024-07-08 18:34:27',2),(123,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720463731/questions/stjf50p9u8jrkpze7o1r.png','MCQ','2024-07-08 18:35:33',2),(124,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720463787/questions/ujtyybxennwrnxfoeaxx.png','MCQ','2024-07-08 18:36:29',2),(125,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720463837/questions/pwon43yldzkzfa6aawhf.png','MCQ','2024-07-08 18:37:17',2),(126,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720463913/questions/ofv0pcczvrapciiuujlr.png','MCQ','2024-07-08 18:38:32',2),(127,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720464016/questions/ii3vu8jie7sceubfta8i.png','MSQ','2024-07-08 18:40:18',2),(128,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720464068/questions/vatszhglsj1ozeegi3cv.png','MSQ','2024-07-08 18:41:08',2),(129,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720464129/questions/zm3smde7o4nahfw5xknu.png','MSQ','2024-07-08 18:42:09',2),(130,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720464211/questions/gw52i7mzk7eaylvy6t3d.png','MSQ','2024-07-08 18:43:30',2),(131,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720464254/questions/ne9dkd3vfhyecnr0mvqu.png','MSQ','2024-07-08 18:44:14',2),(132,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720464296/questions/fy2oxjvhcoboovzfspc0.png','MSQ','2024-07-08 18:44:56',2),(133,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720464373/questions/ae1kxeo0tprtx9cbhbli.png','MSQ','2024-07-08 18:46:12',2),(134,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720464454/questions/rn6c2nji5k0a5gwfbddf.png','MSQ','2024-07-08 18:47:36',2),(135,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720464514/questions/rh6p69wwnqcbcloybs5n.png','MSQ','2024-07-08 18:48:34',2),(136,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720464574/questions/hrrynuc3hro0icuws9ck.png','MSQ','2024-07-08 18:49:34',2),(137,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720464694/questions/pecqystehmqxzqyqmqfn.png','MCQ','2024-07-08 18:51:34',2),(138,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720464796/questions/n6c4zghjuvzv7ymoyovi.png','MCQ','2024-07-08 18:53:16',2),(139,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720464896/questions/efhak1r55hg6pptlzdm7.png','MCQ','2024-07-08 18:54:55',2),(140,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720465100/questions/x28gps6nmrj5jiaqr4wf.png','MCQ','2024-07-08 18:58:20',2),(141,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720465203/questions/wvliqrb2obgkhddnf2dj.png','MCQ','2024-07-08 19:00:03',2),(142,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720465352/questions/mmg8okg3ouhicoxpip7g.png','MCQ','2024-07-08 19:02:34',2),(143,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720465420/questions/ezh0hdxigivapsexpo87.png','MCQ','2024-07-08 19:03:41',2),(144,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720465520/questions/jxhavwmedocy4vurtr0c.png','MCQ','2024-07-08 19:05:20',2),(145,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720465628/questions/znj6c4jjecviaisvntze.png','MCQ','2024-07-08 19:07:08',2),(146,3,'https://res.cloudinary.com/dtpp4j1w9/image/upload/v1720465864/questions/pcevyqyp33nw9nt5vtyv.png','MCQ','2024-07-08 19:11:04',2);
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `responses`
--

DROP TABLE IF EXISTS `responses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `responses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `attempt_id` int NOT NULL,
  `question_id` int NOT NULL,
  `option_id` int DEFAULT NULL,
  `numerical_response` decimal(10,2) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `optionId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `attempt_id` (`attempt_id`),
  KEY `question_id` (`question_id`),
  KEY `option_id` (`option_id`),
  KEY `optionId` (`optionId`),
  CONSTRAINT `responses_ibfk_100` FOREIGN KEY (`optionId`) REFERENCES `options` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `responses_ibfk_11` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_12` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_14` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_15` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_17` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_18` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_2` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_20` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_21` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_23` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_24` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_26` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_27` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_29` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_3` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_30` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_32` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_33` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_35` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_36` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_38` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_39` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_40` FOREIGN KEY (`optionId`) REFERENCES `options` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `responses_ibfk_42` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_43` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_44` FOREIGN KEY (`optionId`) REFERENCES `options` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `responses_ibfk_46` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_47` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_48` FOREIGN KEY (`optionId`) REFERENCES `options` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `responses_ibfk_5` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_50` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_51` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_52` FOREIGN KEY (`optionId`) REFERENCES `options` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `responses_ibfk_54` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_55` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_56` FOREIGN KEY (`optionId`) REFERENCES `options` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `responses_ibfk_58` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_59` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_6` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_60` FOREIGN KEY (`optionId`) REFERENCES `options` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `responses_ibfk_62` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_63` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_64` FOREIGN KEY (`optionId`) REFERENCES `options` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `responses_ibfk_66` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_67` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_68` FOREIGN KEY (`optionId`) REFERENCES `options` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `responses_ibfk_70` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_71` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_72` FOREIGN KEY (`optionId`) REFERENCES `options` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `responses_ibfk_74` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_75` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_76` FOREIGN KEY (`optionId`) REFERENCES `options` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `responses_ibfk_78` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_79` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_8` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_80` FOREIGN KEY (`optionId`) REFERENCES `options` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `responses_ibfk_82` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_83` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_84` FOREIGN KEY (`optionId`) REFERENCES `options` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `responses_ibfk_86` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_87` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_88` FOREIGN KEY (`optionId`) REFERENCES `options` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `responses_ibfk_9` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_90` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_91` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_92` FOREIGN KEY (`optionId`) REFERENCES `options` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `responses_ibfk_94` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_95` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `responses_ibfk_96` FOREIGN KEY (`optionId`) REFERENCES `options` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `responses_ibfk_97` FOREIGN KEY (`attempt_id`) REFERENCES `testattempts` (`id`),
  CONSTRAINT `responses_ibfk_98` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  CONSTRAINT `responses_ibfk_99` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`),
  CONSTRAINT `Responses_optionId_foreign_idx` FOREIGN KEY (`optionId`) REFERENCES `options` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `responses`
--

LOCK TABLES `responses` WRITE;
/*!40000 ALTER TABLE `responses` DISABLE KEYS */;
INSERT INTO `responses` VALUES (6,15,83,156,NULL,'2024-07-11 10:58:47','2024-07-11 10:58:47',NULL),(7,15,83,156,NULL,'2024-07-11 10:59:49','2024-07-11 10:59:49',NULL),(8,15,88,176,NULL,'2024-07-11 11:00:14','2024-07-11 11:00:14',NULL),(9,15,88,177,NULL,'2024-07-11 11:00:14','2024-07-11 11:00:14',NULL);
/*!40000 ALTER TABLE `responses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `results`
--

DROP TABLE IF EXISTS `results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `results` (
  `id` int NOT NULL AUTO_INCREMENT,
  `attempt_id` int NOT NULL,
  `score` decimal(10,2) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `attempt_id` (`attempt_id`),
  CONSTRAINT `results_ibfk_1` FOREIGN KEY (`attempt_id`) REFERENCES `testattempts` (`id`),
  CONSTRAINT `results_ibfk_2` FOREIGN KEY (`attempt_id`) REFERENCES `testattempts` (`id`),
  CONSTRAINT `results_ibfk_3` FOREIGN KEY (`attempt_id`) REFERENCES `testattempts` (`id`),
  CONSTRAINT `results_ibfk_4` FOREIGN KEY (`attempt_id`) REFERENCES `testattempts` (`id`),
  CONSTRAINT `results_ibfk_5` FOREIGN KEY (`attempt_id`) REFERENCES `testattempts` (`id`),
  CONSTRAINT `results_ibfk_6` FOREIGN KEY (`attempt_id`) REFERENCES `testattempts` (`id`),
  CONSTRAINT `results_ibfk_7` FOREIGN KEY (`attempt_id`) REFERENCES `testattempts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `results`
--

LOCK TABLES `results` WRITE;
/*!40000 ALTER TABLE `results` DISABLE KEYS */;
INSERT INTO `results` VALUES (3,15,2.00,'2024-07-12 06:40:14','2024-07-12 06:40:14');
/*!40000 ALTER TABLE `results` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test_attempts`
--

DROP TABLE IF EXISTS `test_attempts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test_attempts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) NOT NULL,
  `test_id` int NOT NULL,
  `started_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `completed_at` timestamp NULL DEFAULT NULL,
  `duration` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `test_id` (`test_id`),
  CONSTRAINT `test_attempts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `test_attempts_ibfk_2` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_attempts`
--

LOCK TABLES `test_attempts` WRITE;
/*!40000 ALTER TABLE `test_attempts` DISABLE KEYS */;
/*!40000 ALTER TABLE `test_attempts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `testattempts`
--

DROP TABLE IF EXISTS `testattempts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `testattempts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) NOT NULL,
  `test_id` int NOT NULL,
  `started_at` datetime DEFAULT NULL,
  `completed_at` datetime DEFAULT NULL,
  `duration` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `test_id` (`test_id`),
  CONSTRAINT `testattempts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_10` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_11` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_12` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_13` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_14` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_15` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_16` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_17` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_18` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_19` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_2` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_20` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_21` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_22` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_23` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_24` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_25` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_26` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_27` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_28` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_29` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_30` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_31` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_32` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_33` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_34` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_35` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_36` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_37` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_38` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_39` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_4` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_40` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_41` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_42` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_43` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_44` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_45` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_46` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_47` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_48` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_49` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_5` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_50` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_51` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_52` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_53` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_54` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_55` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_56` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_57` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_58` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_6` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_7` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`),
  CONSTRAINT `testattempts_ibfk_8` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`),
  CONSTRAINT `testattempts_ibfk_9` FOREIGN KEY (`user_id`) REFERENCES `users` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testattempts`
--

LOCK TABLES `testattempts` WRITE;
/*!40000 ALTER TABLE `testattempts` DISABLE KEYS */;
INSERT INTO `testattempts` VALUES (1,'student@gmail.com',3,'2024-07-09 14:04:33',NULL,NULL),(2,'student@gmail.com',3,'2024-07-09 14:23:17',NULL,NULL),(3,'student@gmail.com',3,'2024-07-09 14:23:24',NULL,NULL),(4,'student@gmail.com',3,'2024-07-09 14:25:34',NULL,NULL),(5,'student@gmail.com',3,'2024-07-09 14:29:37',NULL,NULL),(6,'student@gmail.com',3,'2024-07-09 14:30:47',NULL,NULL),(7,'student@gmail.com',3,'2024-07-09 14:31:48',NULL,NULL),(8,'student@gmail.com',3,'2024-07-09 14:43:06',NULL,NULL),(9,'student@gmail.com',3,'2024-07-09 14:53:14',NULL,NULL),(10,'student@gmail.com',3,'2024-07-09 14:55:32',NULL,NULL),(11,'student@gmail.com',3,'2024-07-09 14:56:38',NULL,NULL),(12,'student@gmail.com',3,'2024-07-09 15:12:25',NULL,NULL),(13,'student@gmail.com',3,'2024-07-09 15:23:22',NULL,NULL),(14,'student@gmail.com',3,'2024-07-09 15:40:26',NULL,NULL),(15,'student@gmail.com',3,'2024-07-11 08:49:40','2024-07-12 06:40:14',1311);
/*!40000 ALTER TABLE `testattempts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tests`
--

DROP TABLE IF EXISTS `tests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tests` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `type` enum('GATE_PYQ','MOCK_TEST','CUSTOM_TEST','CHAPTER_WISE','SUBJECT_WISE') NOT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `chapter` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `duration` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`),
  UNIQUE KEY `title_2` (`title`),
  UNIQUE KEY `title_3` (`title`),
  UNIQUE KEY `title_4` (`title`),
  UNIQUE KEY `title_5` (`title`),
  UNIQUE KEY `title_6` (`title`),
  UNIQUE KEY `title_7` (`title`),
  UNIQUE KEY `title_8` (`title`),
  UNIQUE KEY `title_9` (`title`),
  UNIQUE KEY `title_10` (`title`),
  UNIQUE KEY `title_11` (`title`),
  UNIQUE KEY `title_12` (`title`),
  UNIQUE KEY `title_13` (`title`),
  UNIQUE KEY `title_14` (`title`),
  UNIQUE KEY `title_15` (`title`),
  UNIQUE KEY `title_16` (`title`),
  UNIQUE KEY `title_17` (`title`),
  UNIQUE KEY `title_18` (`title`),
  UNIQUE KEY `title_19` (`title`),
  UNIQUE KEY `title_20` (`title`),
  UNIQUE KEY `title_21` (`title`),
  UNIQUE KEY `title_22` (`title`),
  UNIQUE KEY `title_23` (`title`),
  UNIQUE KEY `title_24` (`title`),
  UNIQUE KEY `title_25` (`title`),
  UNIQUE KEY `title_26` (`title`),
  UNIQUE KEY `title_27` (`title`),
  UNIQUE KEY `title_28` (`title`),
  UNIQUE KEY `title_29` (`title`),
  UNIQUE KEY `title_30` (`title`),
  UNIQUE KEY `title_31` (`title`),
  UNIQUE KEY `title_32` (`title`),
  UNIQUE KEY `title_33` (`title`),
  UNIQUE KEY `title_34` (`title`),
  UNIQUE KEY `title_35` (`title`),
  UNIQUE KEY `title_36` (`title`),
  UNIQUE KEY `title_37` (`title`),
  UNIQUE KEY `title_38` (`title`),
  UNIQUE KEY `title_39` (`title`),
  UNIQUE KEY `title_40` (`title`),
  UNIQUE KEY `title_41` (`title`),
  UNIQUE KEY `title_42` (`title`),
  KEY `created_by` (`created_by`),
  CONSTRAINT `tests_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_10` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_11` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_12` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_13` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_14` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_15` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_16` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_17` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_18` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_19` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_20` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_21` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_22` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_23` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_24` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_25` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_26` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_27` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_28` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_29` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_3` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_30` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_31` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_32` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_33` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_34` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_35` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_36` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_37` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_38` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_39` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_4` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_40` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_5` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_6` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_7` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_8` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`),
  CONSTRAINT `tests_ibfk_9` FOREIGN KEY (`created_by`) REFERENCES `users` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tests`
--

LOCK TABLES `tests` WRITE;
/*!40000 ALTER TABLE `tests` DISABLE KEYS */;
INSERT INTO `tests` VALUES (3,'GATE 2022 ','A comprehensive previous year test of GATE 2022','GATE_PYQ','teacher@gmail.com','2024-06-28 13:31:07','null','null',180);
/*!40000 ALTER TABLE `tests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` enum('student','teacher') NOT NULL,
  `branch` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`email`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `username_2` (`username`),
  UNIQUE KEY `username_3` (`username`),
  UNIQUE KEY `username_4` (`username`),
  UNIQUE KEY `username_5` (`username`),
  UNIQUE KEY `username_6` (`username`),
  UNIQUE KEY `username_7` (`username`),
  UNIQUE KEY `username_8` (`username`),
  UNIQUE KEY `username_9` (`username`),
  UNIQUE KEY `username_10` (`username`),
  UNIQUE KEY `username_11` (`username`),
  UNIQUE KEY `username_12` (`username`),
  UNIQUE KEY `username_13` (`username`),
  UNIQUE KEY `username_14` (`username`),
  UNIQUE KEY `username_15` (`username`),
  UNIQUE KEY `username_16` (`username`),
  UNIQUE KEY `username_17` (`username`),
  UNIQUE KEY `username_18` (`username`),
  UNIQUE KEY `username_19` (`username`),
  UNIQUE KEY `username_20` (`username`),
  UNIQUE KEY `username_21` (`username`),
  UNIQUE KEY `username_22` (`username`),
  UNIQUE KEY `username_23` (`username`),
  UNIQUE KEY `username_24` (`username`),
  UNIQUE KEY `username_25` (`username`),
  UNIQUE KEY `username_26` (`username`),
  UNIQUE KEY `username_27` (`username`),
  UNIQUE KEY `username_28` (`username`),
  UNIQUE KEY `username_29` (`username`),
  UNIQUE KEY `username_30` (`username`),
  UNIQUE KEY `username_31` (`username`),
  UNIQUE KEY `username_32` (`username`),
  UNIQUE KEY `username_33` (`username`),
  UNIQUE KEY `username_34` (`username`),
  UNIQUE KEY `username_35` (`username`),
  UNIQUE KEY `username_36` (`username`),
  UNIQUE KEY `username_37` (`username`),
  UNIQUE KEY `username_38` (`username`),
  UNIQUE KEY `username_39` (`username`),
  UNIQUE KEY `username_40` (`username`),
  UNIQUE KEY `username_41` (`username`),
  UNIQUE KEY `username_42` (`username`),
  UNIQUE KEY `username_43` (`username`),
  UNIQUE KEY `username_44` (`username`),
  UNIQUE KEY `username_45` (`username`),
  UNIQUE KEY `username_46` (`username`),
  UNIQUE KEY `username_47` (`username`),
  UNIQUE KEY `username_48` (`username`),
  UNIQUE KEY `username_49` (`username`),
  UNIQUE KEY `username_50` (`username`),
  UNIQUE KEY `username_51` (`username`),
  UNIQUE KEY `username_52` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('student@gmail.com','student','$2b$10$ZvaYB3v0foYuVV/UfmkY5uv4glAumqqBTOERPK8TNVGBq0duMRBqu','student','student','CSE','2024-06-27 09:24:33'),('teacher@gmail.com','teacher','$2b$10$1K6.5Vww17oMoUdfNMAQXu4fUL54AjfxyvR6Vfpgysh98j5nTkBI.','teacher','teacher','CSE','2024-06-27 09:22:28');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-04 16:53:00
