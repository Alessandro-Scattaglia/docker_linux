FROM nginx:stable-alpine

# Copia la pagina statica nella cartella servita da nginx
COPY index.html /usr/share/nginx/html/index.html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
