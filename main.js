// CUADRADO
function dibujarCuadrado() {

    var canvas = document.getElementById("canvasCuadrado");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "blue";
    ctx.fillRect(10, 10, 100, 100);

}

// RECTÁNGULO
function dibujarRectangulo() {

  const canvas = document.getElementById("canvasRectangulo");

  if (canvas.getContext) {

    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "blue";   // color fijo para esta prueba
    ctx.fillRect(25, 25, 100, 100);

    ctx.clearRect(45, 45, 60, 60);

    ctx.strokeStyle = "black";
    ctx.strokeRect(50, 50, 50, 50);

  }

}

// TRIÁNGULO
function dibujarTriangulo() {

  const canvas = document.getElementById("canvasTriangulo");

  if (canvas.getContext) {

    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "red"; // color fijo para esta prueba

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();

  }

}

// HAPPY FACE
function dibujarCara() {

  const canvas = document.getElementById("canvasCara");

  if (canvas.getContext) {

    const ctx = canvas.getContext("2d");

    ctx.strokeStyle = "orange"; // color fijo para esta prueba
    ctx.lineWidth = 3;

    ctx.beginPath();

    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo externo

    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // Boca

    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Ojo izquierdo

    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Ojo derecho

    ctx.stroke();

  }

}

// LÍNEAS
function dibujarLineas() {

  const canvas = document.getElementById("canvasLineas");

  if (canvas.getContext) {

    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "purple";      // color relleno
    ctx.strokeStyle = "black";     // color contorno
    ctx.lineWidth = 2;

    // Triángulo relleno
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    // Triángulo contorneado
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();

  }

}

// ARCOS
function dibujarArcos() {

  const canvas = document.getElementById("canvasArcos");

  if (canvas.getContext) {

    const ctx = canvas.getContext("2d");

    ctx.strokeStyle = "teal";  // color contorno
    ctx.fillStyle = "gold";    // color relleno
    ctx.lineWidth = 2;

    for (let i = 0; i < 4; i++) {

      for (let j = 0; j < 3; j++) {

        ctx.beginPath();

        const x = 25 + j * 50; 
        const y = 25 + i * 50;
        const radius = 20;

        const startAngle = 0;
        const endAngle = Math.PI + (Math.PI * j) / 2;

        const counterclockwise = i % 2 !== 0;

        ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

        if (i > 1) {
          ctx.fill();
        } else {
          ctx.stroke();
        }

      }

    }

  }

}

// CURVAS BÉZIER Y CUADRÁTICAS
function dibujarCurvas() {

  const canvas = document.getElementById("canvasCurvas");

  if (canvas.getContext) {

    const ctx = canvas.getContext("2d");

    ctx.strokeStyle = "darkblue"; // color fijo para la prueba
    ctx.lineWidth = 2;

    ctx.beginPath();

    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);

    ctx.stroke();

  }

}

// COMBINACIONES DE LÍNEAS Y FIGURAS
function dibujarCombinaciones() {

  const canvas = document.getElementById("canvasCombinaciones");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.lineWidth = 2;

    roundedRect(ctx, 12, 12, 150, 150, 15);
    roundedRect(ctx, 19, 19, 150, 150, 9);
    roundedRect(ctx, 53, 53, 49, 33, 10);
    roundedRect(ctx, 53, 119, 49, 16, 6);
    roundedRect(ctx, 135, 53, 49, 33, 10);
    roundedRect(ctx, 135, 119, 25, 49, 10);

    ctx.beginPath();
    ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
    ctx.lineTo(31, 37);
    ctx.fill();

    for (let i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 35, 4, 4);
    }

    for (let i = 0; i < 6; i++) {
      ctx.fillRect(115, 51 + i * 16, 4, 4);
    }

    for (let i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 99, 4, 4);
    }

    ctx.beginPath();
    ctx.moveTo(83, 116);
    ctx.lineTo(83, 102);
    ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
    ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
    ctx.lineTo(111, 116);
    ctx.lineTo(106.333, 111.333);
    ctx.lineTo(101.666, 116);
    ctx.lineTo(97, 111.333);
    ctx.lineTo(92.333, 116);
    ctx.lineTo(87.666, 111.333);
    ctx.lineTo(83, 116);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(91, 96);
    ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
    ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
    ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
    ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
    ctx.moveTo(103, 96);
    ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
    ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
    ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
    ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();
  }
}

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}


window.onload = function () {
  dibujarCuadrado();
  dibujarRectangulo();
  dibujarTriangulo();
  dibujarCara();
  dibujarLineas();
  dibujarArcos();
  dibujarCurvas();
  dibujarCombinaciones();
};