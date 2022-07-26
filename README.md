# Orden

1. Definir las rutas
2. Definir los verbos de cada ruta

/users
-GET (ontener todos las tareas)
-POST (crear una nueva tarea)
/users/:id
-GET(obtener unatarea en especifico)
-PUT (editar una tarea)
-PATCH (editar una tarea)
-DELETE (eliminar una tarea)

3. Crear los controladores
```javascript
    const getAllTaks = () => {
        return userDB
    }
```

4. Crear los sevicios
5. Crear las rutas