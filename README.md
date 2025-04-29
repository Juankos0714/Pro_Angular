
# 📦 Pro_Angular - Guía de Inicio

Este repositorio contiene una guía básica para crear, ejecutar y estructurar un proyecto en Angular. Ideal para quienes inician en el desarrollo frontend con Angular.

## 🚀 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js y npm](https://nodejs.org/) (Node.js 18+ recomendado)
- [Angular CLI](https://angular.io/cli) (instalación global)

```bash
npm install -g @angular/cli
```

## 🛠️ Crear un Proyecto Angular

Abre tu terminal y ejecuta:

```bash
ng new nombre-del-proyecto
```

### Opciones recomendadas durante la creación:

- ¿Deseas agregar routing? 👉 `Sí`
- ¿Qué estilo deseas usar? 👉 `CSS` (o el que prefieras: SCSS, LESS, etc.)

Esto generará la estructura básica del proyecto.

## ▶️ Ejecutar el Proyecto

Navega a la carpeta del proyecto y levanta el servidor de desarrollo:

```bash
cd nombre-del-proyecto
ng serve
```

Abre tu navegador en `http://localhost:4200/` para ver la aplicación funcionando.

## 📁 Estructura del Proyecto

```text
src/
│
├── app/                   # Componentes y lógica principal
│   ├── app.component.ts   # Componente raíz
│   └── ...
├── assets/                # Archivos estáticos como imágenes
├── environments/          # Variables de entorno
├── index.html             # Página HTML principal
└── main.ts                # Punto de entrada principal
```

## 🧱 Crear Componentes, Servicios y Módulos

### Componentes

```bash
ng generate component nombre-del-componente
```

### Servicios

```bash
ng generate service nombre-del-servicio
```

### Módulos

```bash
ng generate module nombre-del-modulo
```

## 🧪 Pruebas

Para ejecutar las pruebas unitarias:

```bash
ng test
```

Para pruebas end-to-end:

```bash
ng e2e
```

## 🧳 Build (Compilar para producción)

```bash
ng build --configuration production
```

El resultado estará en la carpeta `/dist`.

## 📝 Recomendaciones

- Usa servicios para lógica de negocio y acceso a datos.
- Divide tu aplicación en módulos para mejorar escalabilidad.
- Utiliza rutas para navegar entre vistas o componentes.
- Usa interfaces TypeScript para tipar modelos de datos.

## 📚 Recursos Adicionales

- [Documentación oficial de Angular](https://angular.io/docs)
- [Angular Material (Componentes UI)](https://material.angular.io/)

---

¡Feliz codificación con Angular! ✨
