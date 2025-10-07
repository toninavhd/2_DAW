# Guia de Aplicación PHP dockerizada y en nativo: Calculadora

## 📁 Estructura de carpetas

```
$HOME/ut2/a1/
├── calc_nativo/
│   ├── index.php
│   ├── calculadora.png
│   ├── estilos.css
│   └── README.md
├── calc_docker/
│   ├── Dockerfile
│   ├── index.php
│   ├── calculadora.png
│   ├── estilos.css
│   └── README.md
```

---

## 🖥️ Instalación en entorno nativo

### 🔧 Requisitos

```sh
sudo apt update
sudo apt install nginx php-fpm
```

### ⚙️ Configuración de Nginx

Editar `/etc/nginx/sites-available/default`:

```nginx
server {
    listen 80;
    server_name localhost;

    root /home/tu_usuario/ut2/a1/calc_nativo;
    index index.php;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php7.4-fpm.sock;
    }
}
```

### 🚀 Acceso

```sh
sudo systemctl restart nginx
```

Abrir en navegador: [http://localhost](http://localhost)  
Debe mostrar el título: **Calculadora en entorno nativo**

---

## 🐳 Despliegue en entorno Dockerizado

### 🧱 Dockerfile

```dockerfile
FROM php:8.1-fpm
COPY . /var/www/html
WORKDIR /var/www/html
EXPOSE 8085
CMD ["php", "-S", "0.0.0.0:8085", "-t", "/var/www/html"]
```

> ⚠️ Asegúrate de que el puerto `8085` corresponde a tu puesto de trabajo.

### 🏗️ Construcción y ejecución

```sh
cd $HOME/ut2/a1/calc_docker
docker build -t calc_docker .
docker run -d -p 8085:8085 calc_docker
```

Abrir en navegador: [http://localhost:8085](http://localhost:8085)  
Debe mostrar el título: **Calculadora en entorno dockerizado**

---
