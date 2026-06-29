# Menggunakan web server Nginx yang ringan berbasis Alpine Linux
FROM nginx:alpine

# Menyalin seluruh isi proyek HTML Anda ke dalam folder web server Nginx
COPY . /usr/share/nginx/html

# Membuka port 80 untuk akses web
EXPOSE 80