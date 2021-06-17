-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 17-06-2021 a las 20:57:38
-- Versión del servidor: 5.7.32
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

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
(28, 32, 4, 'auto perfecto para la familia', NULL, NULL),
(32, 17, 12, 'alto auto', '2021-05-28 15:44:30', '2021-05-28 15:44:30'),
(39, 22, 12, 'me encanta', '2021-06-03 20:12:52', '2021-06-03 20:12:52'),
(40, 34, 12, 'me gusta mas en blanco', '2021-06-10 19:48:42', '2021-06-10 19:48:42'),
(41, 18, 12, 'alto auto', '2021-06-10 20:36:30', '2021-06-10 20:36:30'),
(42, 43, 2, 'hay en gris', '2021-06-14 20:18:51', '2021-06-14 20:18:51');

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
  `updated_at` timestamp NULL DEFAULT NULL,
  `comentarios` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `url_img`, `id_usuarios`, `marca`, `modelo`, `anio`, `caracteristicas`, `color`, `precio`, `descripcion`, `created_at`, `updated_at`, `comentarios`) VALUES
(17, 'Ford Mustang GT Naranja 2021', 'mustanggt.jpg', 2, 'Ford', 'Mustang GT', 2021, '', 'Naranja', 10000000, NULL, NULL, '2021-06-10 20:14:42', 1),
(18, 'volkswagen scirocco', 'sirocco.jpeg', 4, 'volkswagen', 'scrirocco gts', 2016, NULL, 'negro', 5000000, NULL, NULL, NULL, 1),
(19, 'volkswagen golf ', 'golf.jpeg', 3, 'volkswagen', 'golf gti', 2020, NULL, 'blanco', 6000000, NULL, NULL, NULL, NULL),
(20, 'volkswagen vento', 'vento.jpeg', 4, 'volkswagen', 'vento gli', 2014, NULL, 'azul', 3000000, NULL, NULL, NULL, NULL),
(22, 'audi tt', 'auditt.jpeg', 5, 'audi', 'tt rs ', 2019, NULL, 'blanco', 8000000, NULL, NULL, NULL, 1),
(23, 'audi a6 s', 'audia6.jpeg', 1, 'audi', 'a6 s', 2016, NULL, 'rojo', 5000000, NULL, NULL, NULL, 2),
(24, 'audi q5  rs ', 'audiq5.jpeg', 4, 'audi', 'q5 rs', 2018, NULL, 'negro', 7000000, NULL, NULL, NULL, NULL),
(32, 'jeep cherokee srt', 'grandcherokee.jpg', 2, 'jeep', 'cherokee srt', 2021, NULL, 'plagada', 10000000, NULL, NULL, NULL, 1),
(33, 'audi rs q8', 'rsq8.jpg', 5, 'audi', 'rs q8', 2021, NULL, 'gris', 12000000, NULL, NULL, NULL, NULL),
(34, 'mercedes benz gt t', 'gtrpro.jpg', 3, 'mercedes benz', 'amg gt r pro', 2018, NULL, 'verde', 14700000, NULL, NULL, NULL, 1),
(35, 'chevrolet camaro', 'camaro.jpeg', 2, 'chevrolet', 'camaro ss', 2015, NULL, 'amarillo', 6000000, NULL, NULL, NULL, NULL),
(43, 'Mercedez benz C200 Negro 2016', '1623357420503-undefined.jpg', 12, 'Mercedez benz', 'C200', 2016, 'Auto usado con 40000km ', 'Negro', 10000000, NULL, '2021-06-10 20:37:00', '2021-06-10 20:38:51', NULL),
(44, 'Ferrari 488 pista sypder rojo 2019', '1623959198807-undefined.jpeg', 2, 'Ferrari', '488 pista sypder', 2019, '', 'rojo', 3000000, NULL, '2021-06-17 19:46:38', '2021-06-17 19:46:38', NULL),
(45, 'Ferrari SF90 Stradale rojo 2019', '1623959282141-undefined.jpeg', 2, 'Ferrari', 'SF90 Stradale', 2019, '', 'rojo', 20000000, NULL, '2021-06-17 19:48:02', '2021-06-17 19:48:02', NULL),
(46, 'Ferrari f8 tributo rojo 2020', '1623959325633-undefined.jpeg', 2, 'Ferrari', 'f8 tributo', 2020, '', 'rojo', 430000, NULL, '2021-06-17 19:48:45', '2021-06-17 19:48:45', NULL),
(47, 'Ferrari   812 superfast rojo 2020', '1623959372126-undefined.png', 2, 'Ferrari  ', '812 superfast', 2020, '', 'rojo', 21212100, NULL, '2021-06-17 19:49:32', '2021-06-17 19:49:32', NULL);

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
  `contrasena` varchar(255) NOT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `apellido`, `fecha_nacimiento`, `numero_telefono`, `mail`, `contrasena`, `foto`, `created_at`, `updated_at`) VALUES
(1, 'igancio', 'cavangh', '2021-02-09', 1156342517, 'icavangh@gmail.com', '$2a$10$HJXPQ9Hk/gLdzj.q85t/V.zbtgLRU9N0C3ysuqmcnF.QdsyKC7IUW', NULL, NULL, NULL),
(2, 'bautista', 'lanusse', '2000-11-18', 1123492628, 'blanusse@hotmail.com', '$2a$10$HJXPQ9Hk/gLdzj.q85t/V.zbtgLRU9N0C3ysuqmcnF.QdsyKC7IUW', NULL, NULL, NULL),
(3, 'valentino', 'grisanti', '2000-02-11', 1124992525, 'vgrrisanti@gmail.com', '$2a$10$HJXPQ9Hk/gLdzj.q85t/V.zbtgLRU9N0C3ysuqmcnF.QdsyKC7IUW', NULL, NULL, NULL),
(4, 'pedro', 'torres', '2021-07-02', 1167543902, 'pepotorres@gmail.com', '$2a$10$HJXPQ9Hk/gLdzj.q85t/V.zbtgLRU9N0C3ysuqmcnF.QdsyKC7IUW', NULL, NULL, NULL),
(5, 'juan', 'gutierrez', '2020-04-07', 1176834920, 'gutierrez.j@gmail.com', '$2a$10$HJXPQ9Hk/gLdzj.q85t/V.zbtgLRU9N0C3ysuqmcnF.QdsyKC7IUW', NULL, NULL, NULL),
(11, 'Pedro', 'Rodriguez', '0000-00-00', 1123864528, 'prodriguez@gmail.com', '$2a$10$j8cMfHNnWQLasE6.UpTWk.eUcUXVFzGUB4XlzwbY8R/Kcz4bLcuNG', NULL, NULL, NULL),
(12, 'Ignacio', 'Cavanagh', '2002-06-14', 1155670279, 'ncavanagh@gmail.com', '$2a$10$HJXPQ9Hk/gLdzj.q85t/V.zbtgLRU9N0C3ysuqmcnF.QdsyKC7IUW', '1623354323351-undefined.png', NULL, '2021-06-10 19:45:23'),
(13, 'pablo', 'Rodriguez', '2021-06-21', 11234234, 'prodriguez@gmail.com', '$2a$10$vk3CGjK0aB6sp0Vk3oXCkuKegQEYtGWC.snb2lin2gbpCpnmOmjJW', NULL, '2021-06-10 20:12:38', '2021-06-10 20:12:38'),
(14, 'fernando', 'flores', '1988-12-31', 1234334, 'fflores@gmail.com', '$2a$10$NPM.c9F.JScxezkMcpV8reUKWFrxJ3hMWEay53OXrET/KzpjfA6bi', '1623961780584-undefined.jpeg', '2021-06-17 20:28:50', '2021-06-17 20:29:40');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_producto` (`id_producto`),
  ADD KEY `id_usuario` (`id_usuario`) USING BTREE;

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuarios`) USING BTREE;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

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
