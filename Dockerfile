# Etapa 1: Construcción de la app
FROM node:18-alpine AS builder

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código fuente
COPY . .

# Compilar el proyecto (Vite genera /dist)
RUN npm run build


# Etapa 2: Servir con nginx
FROM nginx:alpine

# Copiar los archivos compilados al servidor nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto del servidor web
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
