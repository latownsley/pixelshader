# ✨ Pixel Art Shader

This project is a custom GLSL shader written for a class project, designed to create a pixel art shader using **stylized, toon-like rendering effect** with **hard shading bands**, **pixelation**, **pasteurization**, and **edge outlining**. It was written in OpenGL using GLSL 330 compatibility.

https://youtu.be/-vvQiV4wTRM

## 🎨 Features

- **Cel Shading (Toon Shading):** Creates hard lighting bands instead of smooth gradients.
- **Edge Outlining:** Detects object edges using normal variation and draws black outlines.
- **Pasteurization:** Reduces color depth for a stylized, poster-like look.
- **Pixelation (Vertex-level):** Snaps geometry to a virtual pixel grid for a retro pixel-art aesthetic.

## 🧠 Shader Overview

### `final.frag`
Handles fragment-level coloring:

- Applies cel shading using dot product intensity between light and normal.
- Adds edge outlines based on the screen-space derivative (`fwidth`) of the normal.
- Combines colors and applies pasteurization by reducing the number of RGB color levels.

### `final.vert`
Handles vertex-level transformations:

- Snaps geometry to a grid using a `uPixelSize` uniform for pixelation.
- Calculates normals, view direction, and lighting vectors for interpolation.

## 🧪 Uniforms

| Uniform             | Type     | Description                           |
|---------------------|----------|---------------------------------------|
| `uColor`            | `vec4`   | Base color of the object              |
| `LightPosition`     | `vec3`   | World position of the light source    |
| `uOutlineThickness` | `float`  | Multiplier for the outline width      |
| `uPixelSize`        | `float`  | Size of the virtual pixel grid        |

## 🖼️ Screenshots

| Toon + Pasteurized | Edge Outlining |
|--------------------|----------------|
| ![Toon](images/toon_shading.png) | ![Outline](images/outline_effect.png) |

_Add more screenshots as needed and store them in a local `images/` directory._

## 🔧 Requirements

- OpenGL 3.3+ (or 1.20 for Mac)
- GLSL compatible renderer

## 🎓 Educational Purpose

This shader was developed as a final project for a Computer Graphics class. The goal was to simulate the appearance of 3D pixel art with an expressive, stylized look.

---

## 📺 Demo Video

> Watch the full demo here:

[![Shader Demo](https://img.youtube.com/vi/-vvQiV4wTRM/0.jpg)](https://youtu.be/-vvQiV4wTRM)



