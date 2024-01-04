# Proyecto Frontend - Rick and Morty App

Este proyecto Frontend utiliza [Next.js](https://nextjs.org/) y [Material-UI](https://material-ui.com/) para crear una aplicación web que muestra información sobre los personajes de la serie de televisión "Rick and Morty".

## Tecnologías Utilizadas

- **Next.js:** Marco de desarrollo web React con enfoque en la facilidad de uso y rendimiento.
- **Material-UI:** Librería de componentes de interfaz de usuario basada en React que sigue los principios del diseño de Material Design.

### Configuración del Proyecto

1. **Clonar el Repositorio:**

   ```bash
   git clone https://github.com/JuanTG08/rick-and-morty-frontend.git
   cd rick-and-morty-frontend
   ```

2. **Instalar Dependencias:**

   ```bash
   npm install
   ```

### Ejecución del Proyecto

- **Ejecutar el proyecto:**

   ```bash
   npm run build
   npm start
   ```

El aplicativo se iniciará en el puerto `3000` [`localhost:3000`](http://localhost:3000/).

## Funciones Principales

1. **Explorar el Multiverso de Rick and Morty:**
   - La página principal muestra una selección de personajes del universo de Rick and Morty.

2. **Filtrar por Especies:**
   - Utiliza un menú desplegable para permitir a los usuarios filtrar los personajes por especies.
   - Dos opciones disponibles: "Humano" y "No humano".

3. **Visualización de Personajes Humanos:**
   - Cuando se selecciona "Humano", se muestran los personajes que pertenecen a la especie humana.

4. **Visualización de Personajes No Humanos:**
   - Cuando se selecciona "No humano", se muestran los personajes que no son de la especie no humana.

5. **Paginación Dinámica:**
   - Implementa una paginación dinámica para manejar grandes conjuntos de datos de la API de Rick and Morty.
   - Los usuarios pueden navegar a través de las páginas para ver más personajes.

6. **Interacción con la API:**
   - Utiliza el controlador `RickAndMortyController` para realizar solicitudes a la API de nuestro backend para obtener la información relacionada a los personajes de Rick And Morty.

7. **Diseño Atractivo con Material-UI:**
   - Utiliza componentes de Material-UI para un diseño atractivo y una experiencia de usuario mejorada.

### Estructura del Proyecto

La estructura del proyecto sigue las convenciones de Next.js y Material-UI, con carpetas organizadas de manera lógica con un enfoque en MVC.

- **src/ :** Contiene los archivos fuente del proyecto.
      - **app/ :** En este directorio encontramos las páginas de la aplicación las cuales serán servidas en el momento en el que sean consultadas.
      - **components/ :**
      Componentes reutilizables utilizados en las páginas.
      - **constant/ :** Constantes por las cuales el aplicativo funcionará para prevenir magics strings.
      - **controllers/ :** Controladores que manejan la lógica y la conexión al fetching de datos.
      - **fetching/ :** Se almacenaran todas las consultas fetch que se hacen en el aplicativo, estas consultaran a la API principal para obtener información relevante.
      - **interfaces/ :** Interfaces que nos ayudan a dar un tipado a las variables o constantes.
      - **utils/ :** Utilidades y funciones de ayuda.
