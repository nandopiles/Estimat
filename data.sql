INSERT INTO `user`(`id`, `name`, `password`, `email`, `status`, `role`) 
VALUES (101, 'Nerea', '12345', 'eljesus@gmail.com', False, true);

insert into `news`(`id`, `title`, `description`, `image`)
values 
    (109, 'Importancia de la detección temprana del cáncer de mama', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Expertos destacan la relevancia de exámenes regulares para la prevención.', 'assets/imagesGallery/gallery.jpg'),
    (110, 'Apoyo emocional para pacientes con cáncer de mama', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Grupos de apoyo brindan acompañamiento emocional a mujeres en su lucha contra el cáncer de mama.', 'assets/imagesGallery/gallery.jpg'),
    (111, 'Iniciativas comunitarias contra el cáncer de mama', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Comunidades se unen para crear programas que ayuden a concientizar y prevenir el cáncer de mama.', 'assets/imagesGallery/gallery2.jpg'),
    (112, 'Ejercicios recomendados para pacientes en recuperación', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Especialistas comparten rutinas de ejercicio adaptadas para mujeres que se están recuperando del tratamiento del cáncer de mama.', 'assets/imagesGallery/gallery3.jpg'),
    (113, 'Nuevas tecnologías en diagnóstico de cáncer de mama', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Avances tecnológicos permiten diagnósticos más precisos y menos invasivos en la detección del cáncer de mama.', 'assets/imagesGallery/gallery4.jpg'),
    (114, 'Testimonios de pacientes sobre la vida después del cáncer de mama', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mujeres comparten sus experiencias y consejos sobre cómo reconstruir sus vidas tras superar el cáncer de mama.', 'assets/imagesGallery/gallery5.jpg'),
    (115, 'Riesgos y factores de prevención del cáncer de mama', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Expertos detallan los factores de riesgo y medidas de prevención para reducir la incidencia del cáncer de mama.', 'assets/imagesGallery/gallery6.jpg'),
    (116, 'Investigación sobre terapias alternativas para el cáncer de mama', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Estudios exploran el papel de terapias complementarias en el tratamiento del cáncer de mama.', 'assets/imagesGallery/gallery7.jpg');

insert into `favs` (`id`, `date`, `users_id`, `news_id`) 
values (100, '2024/02/16', 101, 101);