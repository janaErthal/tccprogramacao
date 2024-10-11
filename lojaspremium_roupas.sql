-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: lojaspremium
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

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
-- Table structure for table `roupas`
--

DROP TABLE IF EXISTS `roupas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roupas` (
  `idroupas` int(11) NOT NULL AUTO_INCREMENT,
  `preco` decimal(5,2) NOT NULL,
  `descricao` varchar(100) DEFAULT NULL,
  `tamanho` varchar(20) NOT NULL,
  `estoque` int(11) NOT NULL,
  `cores` varchar(10) NOT NULL,
  `linkimg` varchar(150) DEFAULT NULL,
  `nome` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idroupas`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roupas`
--

LOCK TABLES `roupas` WRITE;
/*!40000 ALTER TABLE `roupas` DISABLE KEYS */;
INSERT INTO `roupas` VALUES (1,35.00,'','M, G, GG',250,'Branco','https://www.inkpapersuprimentos.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/a/camiseta_regata_masculina_1.jpg','Regata Academia'),(2,200.00,'','M, G ',350,'Preto','https://images.tcdn.com.br/img/img_prod/698738/copia_jaqueta_masculina_puffer_nylon_preta_747_1_378b31a1d36e3a94d141494c066d7f39.jpg','Jaqueta Confort'),(3,199.00,'','P, M, G',0,'','https://dohler.vtexassets.com/arquivos/ids/157659/19737-02457-6357-Roupao-Adulto-Dohler-Confort-Azul-Escuro-G-1.jpg?v=638091326603570000','Roupão de Lã');
/*!40000 ALTER TABLE `roupas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-10 21:01:21
