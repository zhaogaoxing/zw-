/*
Navicat MySQL Data Transfer

Source Server         : database
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : db_user

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2016-12-03 16:52:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_herochoose
-- ----------------------------
DROP TABLE IF EXISTS `t_herochoose`;
CREATE TABLE `t_herochoose` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userID` int(10) DEFAULT NULL,
  `heroName` varchar(20) DEFAULT NULL,
  `heroLevel` int(3) DEFAULT '0',
  `loginTimes` int(3) DEFAULT NULL,
  `profession` varchar(20) DEFAULT '游民',
  `heroTexture` int(10) DEFAULT NULL,
  `headTexture` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_t_herochoose` (`userID`),
  CONSTRAINT `FK_t_herochoose` FOREIGN KEY (`userID`) REFERENCES `t_user` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_herochoose
-- ----------------------------
INSERT INTO `t_herochoose` VALUES ('5', '1', '林海威', '100', '3', '弓术师范', '1', '1');
INSERT INTO `t_herochoose` VALUES ('6', '2', 'panda', '120', '5', '影', '2', '2');
INSERT INTO `t_herochoose` VALUES ('7', '1', 'CocosCreator越来越好', '999', '999', '致CC全体人员', '0', '0');

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `userID` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('1', 'LINHAIWEI123', 'ASD520');
INSERT INTO `t_user` VALUES ('2', 'PANDA123', 'ASD520');
