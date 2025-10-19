# Heztor Documents

Una aplicación moderna de gestión de documentos construida con React, TypeScript, Vite y BlockNote Editor.

## 🚀 Características

### ✨ Gestión de Documentos
- **Crear documentos**: Botón "Nuevo documento" en el sidebar para crear documentos al instante
- **Editar en tiempo real**: Editor rico con BlockNote que soporta múltiples formatos
- **Editar títulos**: Los títulos de documentos se actualizan en tiempo real mientras escribes
- **Persistencia**: Todos los cambios se guardan automáticamente en localStorage

### 📁 Organización
- **Carpetas**: Organiza tus documentos en carpetas (Inbox, StartUp, Important, Projects)
- **Carpetas desplegables**: Click en carpetas para ver/ocultar sus documentos
- **Favoritos**: Marca documentos como favoritos para acceso rápido
- **Filtrado**: Click en una carpeta para ver solo sus documentos

### 🎨 Interfaz de Usuario
- **Sidebar profesional**: Navegación intuitiva con secciones organizadas
- **Tema personalizable**: Soporte para múltiples temas y modo oscuro
- **Responsive**: Funciona en dispositivos móviles, tablets y desktop
- **Editor con tema**: Fondo sólido y colores coherentes en el editor

### 🔧 Características Técnicas
- **React 18** con Hooks modernos
- **TypeScript** para type safety
- **Vite** para desarrollo rápido
- **React Router** para navegación
- **Zustand** para gestión de estado
- **BlockNote** para el editor rico
- **Tailwind CSS** para estilos
- **Radix UI** para componentes accesibles

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Davs07/heztor-documents.git

# Entrar al directorio
cd heztor-documents

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 📂 Estructura del Proyecto

```
heztor-documents/
├── src/
│   ├── api/              # Datos iniciales y funciones API
│   ├── components/       # Componentes reutilizables
│   │   ├── ui/          # Componentes UI base
│   │   ├── Sidebar.tsx  # Sidebar con navegación
│   │   └── UserButton.tsx
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utilidades y configuración
│   ├── pages/           # Páginas principales
│   │   ├── Documents.tsx  # Vista de todas las carpetas/documentos
│   │   └── Document.tsx   # Editor de documento individual
│   ├── sections/        # Secciones complejas
│   │   └── Editor.tsx   # Editor BlockNote
│   ├── App.tsx          # Componente principal
│   └── main.tsx         # Punto de entrada
├── types.ts             # Definiciones de tipos TypeScript
└── package.json
```

## 🎯 Uso

### Crear un nuevo documento
1. Click en "Nuevo documento" en el sidebar
2. El nuevo documento se abre automáticamente
3. Empieza a escribir el título y contenido

### Editar un documento
1. Click en cualquier documento desde la vista principal o sidebar
2. Edita el título directamente en el campo de texto
3. Usa el editor BlockNote para el contenido
4. Los cambios se guardan automáticamente

### Organizar documentos
1. Los documentos se organizan en carpetas
2. Click en una carpeta para filtrar documentos
3. Click en "Ver todos" para mostrar todos los documentos
4. Marca documentos como favoritos para acceso rápido

## 🎨 Temas

La aplicación soporta múltiples temas que puedes cambiar desde:
1. User Button → Configuración → Tema
2. Alterna entre 4 temas diferentes
3. Activa/desactiva modo oscuro

## 📝 Tecnologías Utilizadas

- **React 18** - Framework de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool
- **React Router** - Routing
- **BlockNote** - Editor rico
- **Tailwind CSS** - Estilos
- **Radix UI** - Componentes UI
- **Zustand** - State management
- **Lucide React** - Iconos

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

## 👨‍💻 Autor

**Davs07**
- GitHub: [@Davs07](https://github.com/Davs07)

---

Hecho con ❤️ usando React y TypeScript
