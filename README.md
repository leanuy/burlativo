# Burlativo

Traductor de texto al idioma de la burla — todas las vocales se vuelven **i**.

> "No me gustan las pasas de uva en las empanadas" → "Ni mi gistin lis pisis di ivi in lis impinidis"

## Correr localmente

Requiere [Node.js](https://nodejs.org/) instalado.

```bash
# 1. Instalar dependencias (solo la primera vez)
npm install

# 2. Iniciar el servidor de desarrollo
npm run dev
```

Abrir [http://localhost:5173](http://localhost:5173) en el navegador.

## Acceso desde otro dispositivo en la misma red

El servidor ya está configurado para exponerse en la red local. Al correr `npm run dev`, la terminal muestra una URL de red:

```
➜  Local:   http://localhost:5173/
➜  Network: http://192.168.x.x:5173/
```

Abrir la URL de **Network** desde cualquier dispositivo conectado al mismo Wi-Fi.
