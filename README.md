# Solución
La solución del back se encuentra en la carpeta Backend-Todos y la solucion del front se encuentra en la rama front.


## Demo del funcionamiento de la app

![Diseño y funcionamiento de la app]( ./ToDoApp.gif)

### Explicación del back
Breve video explicando el codigo principal del backend hecho con spring boot



![ExplicacionBack](https://user-images.githubusercontent.com/88175050/155906563-525703f1-17d5-4a89-8d7b-b67b5a2a5588.gif)

### Explicación del front
Breve video explicando el codigo principal del frontend hecho con react.


![ExplicacionFront](https://user-images.githubusercontent.com/88175050/155906609-be38d06a-e76c-4f99-879c-f0ca7a592d41.gif)


#### issues resueltos

- Resolver el diseño gráfico
- Separar bien los elementos gráficos como componentes, store, reducer y providers.
- La base de datos debe esta en un servidor como MySQL.
- Aplicar reglas para no guardar elementos vácios.
- Trabajar con un objeto de trasporte de datos o un objeto plano para representa los datos ante la API.










# [Problema]

Pueden ver los siguientes videos para poder comprender la base del código fuente dentro de este repositorio. 

https://www.youtube.com/watch?v=vqWvGgx_iXY&list=PL0IrPQPrkqoEUDXn1nsjzxSX2zflWtJW-

## KATA Full Stack

En el siguiente proyecto se presenta algunos conceptos de Full Stack, trabajando con Spring Boot + ReactJS.

### Caso de Uso

Se tiene presente un formulario donde se registra unas tareas basadas en una lista por hacer. Esta lista se crea para poder tener una grupos de items donde se pueda gestionar un CRUD. Se tiene un diseño muy básico pero totalmente funcional. 

#### Demo

![alt text]( ./demo.gif "Demo funcional del ToDo")
 
### Instalación

![alt text]( ./start.gif "Instalación y puesta en marcha")

### Perspectiva Front-end
Se tiene un archivo con toda la lógica, se presentan algunas malas prácticas en la codificación del mismo. Se debe refactorizar en donde se separe los componentes en archivos y se representen una mejor estructura. 

Aplicar las mejores prácticas y buscar el mejor diseño para presentar los datos.


### Perspectiva Back-end

Dentro del back-end no se tiene una base de datos basada en servidor. Se debe aplicar un buen diseño de modelo entidad relación y aplicar una base de datos como servidor, ejemplo MySQL. Representar un objeto de trasporte de datos (DTO) en vez de usar la misma entidad para responder. 

### Issues

- Resolver el diseño gráfico
- Separar bien los elementos gráficos como componentes, store, reducer y providers.
- La base de datos debe esta en un servidor como MySQL.
- Aplicar reglas para no guardar elementos vácios.
- Validar carácteres y demás para guardar las entidades de los TO-DO.
- Trabajar con un objeto de trasporte de datos o un objeto plano para representa los datos ante la API.

## Reto

Hacer un fork en su propio namespace y presentar la solución más valida para ser discutida, argumentar los aspectos de mejora y aplicar algunas técnica de refactorización. Resolverlo de forma individual, aplicar los commit para cada paso que se realice en la refactorización. 

Realizar la siguiente representación donde se tiene TO-Do List agripado en listas.

![alt text]( ./todo-list-kata.gif "Demo funcional del ToDo List")

