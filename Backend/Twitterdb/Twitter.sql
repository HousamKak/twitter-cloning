SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user_types` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Type` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `mydb`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `full_name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `user_types_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_users_user_types_idx` (`user_types_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_user_types`
    FOREIGN KEY (`user_types_id`)
    REFERENCES `mydb`.`user_types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`users_with_users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users_with_users` (
  `users_id` INT NOT NULL,
  `users_id1` INT NOT NULL,
  `follows` TINYINT NULL,
  `blocks` TINYINT NULL,
  PRIMARY KEY (`users_id`, `users_id1`),
 --  INDEX `fk_users_has_users_users2_idx` (`users_id1` ASC) VISIBLE,
  INDEX `fk_users_has_users_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_users_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `mydb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_users_users2`
    FOREIGN KEY (`users_id1`)
    REFERENCES `mydb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tweets`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tweets` (
  `idtweets` INT NOT NULL AUTO_INCREMENT,
  `tweet_text` VARCHAR(45) NULL,
  `tweet_media` VARCHAR(45) NULL,
  `likes_number` INT NULL,
  PRIMARY KEY (`idtweets`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`users_has_tweets`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users_has_tweets` (
  `users_id` INT NOT NULL,
  `tweets_idtweets` INT NOT NULL,
  `likes` TINYINT NULL,
  `tweet_creator` TINYINT NULL,
  PRIMARY KEY (`users_id`, `tweets_idtweets`),
  INDEX `fk_users_has_tweets_tweets1_idx` (`tweets_idtweets` ASC) VISIBLE,
  INDEX `fk_users_has_tweets_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_tweets_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `mydb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_tweets_tweets1`
    FOREIGN KEY (`tweets_idtweets`)
    REFERENCES `mydb`.`tweets` (`idtweets`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
