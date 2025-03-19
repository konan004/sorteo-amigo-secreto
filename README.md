# Amigo Secreto 🎉
Generador de sorteo para elegir amigos secretos de forma aleatoria.

![Amigo Secreto](assets/amigo-secreto.png)

## 📋 Características principales
- **Interfaz intuitiva**: Agrega nombres y realiza sorteos con un clic.
- **Validación básica**: Evita nombres vacíos (con implementación mejorada).
- **Diseño responsive**: Funciona en móviles y desktops.
- **Accesibilidad**: Soporte para lectores de pantalla con `aria-live`.

## 🛠️ Instalación
1. Clona el repositorio:

2. Abre el archivo `index.html` en tu navegador.

## 📦 Dependencias
- **Fuentes**: Google Fonts (Inter y Merriweather).
- **Iconos**: Material Design Icons (play_circle_outline).

## 🔄 Funcionamiento
1. **Agrega participantes**:
- Escribe un nombre en el campo de texto.
- Haz clic en "Añadir".
2. **Realiza el sorteo**:
- Haz clic en "Sortear amigo".
- El resultado aparecerá debajo del botón.

## 🚀 Mejoras implementadas
- **Validación de campos vacíos** con mensaje de error.
- **Limpieza automática** del campo después de agregar.
- **Seguridad básica** usando `textContent` en lugar de `innerHTML`.

## 🛠️ Mejoras pendientes
- [ ] Excluir autoasignación (evitar que alguien se asigne a sí mismo).
- [ ] Guardar participantes en localStorage.
- [ ] Animaciones al mostrar resultados.
- [ ] Modo oscuro/claro.

## 📝 Contribuciones
1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Envía un pull request con tus cambios.
