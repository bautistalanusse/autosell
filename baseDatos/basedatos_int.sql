-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-05-2021 a las 02:04:45
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `basedatos_int`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE `comentario` (
  `id` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `texto` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comentario`
--

INSERT INTO `comentario` (`id`, `id_producto`, `id_usuario`, `texto`, `created_at`, `updated_at`) VALUES
(1, 23, 1, 'increible auto, muy recomendable', NULL, NULL),
(2, 23, 3, 'perfecto auto para la ciudad', NULL, NULL),
(27, 35, 2, 'excelene deportivo', NULL, NULL),
(28, 32, 4, 'auto perfecto para la familia', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `url_img` varchar(255) NOT NULL,
  `id_usuarios` int(11) NOT NULL,
  `marca` varchar(255) NOT NULL,
  `modelo` varchar(255) NOT NULL,
  `anio` int(11) DEFAULT NULL,
  `caracteristicas` varchar(255) DEFAULT NULL,
  `color` varchar(255) NOT NULL,
  `precio` float NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `url_img`, `id_usuarios`, `marca`, `modelo`, `anio`, `caracteristicas`, `color`, `precio`, `descripcion`, `created_at`, `updated_at`) VALUES
(17, 'ford mustang', '/images/products/mustanggt.jpg', 2, 'ford', 'mustang gt', 2021, NULL, 'naranja', 10000000, NULL, NULL, NULL),
(18, 'volkswagen scirocco', '/images/products/sirocco.jpeg', 4, 'volkswagen', 'scrirocco gts', 2016, NULL, 'negro', 5000000, NULL, NULL, NULL),
(19, 'volkswagen golf ', '/images/products/golf.jpeg', 3, 'volkswagen', 'golf gti', 2020, NULL, 'blanco', 6000000, NULL, NULL, NULL),
(20, 'volkswagen vento', '/images/products/vento.jpeg', 4, 'volkswagen', 'vento gli', 2014, NULL, 'azul', 3000000, NULL, NULL, NULL),
(21, 'volkswagen amarok', '/images/products/amarokv6.jpeg', 2, 'volkswagen', 'amarok v6 dark label', 2020, NULL, 'negra', 7000000, NULL, NULL, NULL),
(22, 'audi tt', '/images/products/auditt.jpeg', 5, 'audi', 'tt rs ', 2019, NULL, 'blanco', 8000000, NULL, NULL, NULL),
(23, 'audi a6 s', '/images/products/audia6.jpeg', 1, 'audi', 'a6 s', 2016, NULL, 'rojo', 5000000, NULL, NULL, NULL),
(24, 'audi q5  rs ', '/images/products/audiq5.jpeg', 4, 'audi', 'q5 rs', 2018, NULL, 'negro', 7000000, NULL, NULL, NULL),
(32, 'jeep cherokee srt', '/images/products/grandcherokee.jpg', 2, 'jeep', 'cherokee srt', 2021, NULL, 'plagada', 10000000, NULL, NULL, NULL),
(33, 'audi rs q8', '/images/products/rsq8.jpg', 5, 'audi', 'rs q8', 2021, NULL, 'gris', 12000000, NULL, NULL, NULL),
(34, 'mercedes benz gt t', '/images/products/gtrpro.jpg', 3, 'mercedes benz', 'amg gt r pro', 2018, NULL, 'verde', 14700000, NULL, NULL, NULL),
(35, 'chevrolet camaro', '/images/products/camaro.jpeg', 2, 'chevrolet', 'camaro ss', 2015, NULL, 'amarillo', 6000000, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `numero_telefono` int(11) DEFAULT NULL,
  `mail` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `apellido`, `fecha_nacimiento`, `numero_telefono`, `mail`, `contrasena`) VALUES
(1, 'igancio', 'cavangh', '2021-02-09', 1156342517, 'icavangh@gmail.com', 'nacho1234'),
(2, 'bautista', 'lanusse', '2000-11-18', 1123492628, 'blanusse@hotmail.com', 'blanusse123'),
(3, 'valentino', 'grisanti', '2000-02-11', 1124992525, 'vgrrisanti@gmail.com', 'vgrisanti1234'),
(4, 'pedro', 'torres', '2021-07-02', 1167543902, 'pepotorres@gmail.com', 'pepito1234'),
(5, 'juan', 'gutierrez', '2020-04-07', 1176834920, 'gutierrez.j@gmail.com', 'juancito123');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_producto` (`id_producto`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuarios`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentario`
--
ALTER TABLE `comentario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD CONSTRAINT `comentario_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `comentario_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`id_usuarios`) REFERENCES `usuario` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
