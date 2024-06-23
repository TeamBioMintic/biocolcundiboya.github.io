document.addEventListener("DOMContentLoaded", function () {
    cargarEstadisticas();
    cargarGrafica();
    cargarGraficoTendencias(); // Llamada a la nueva función
  });
  
  // Función para cargar las estadísticas
  function cargarEstadisticas() {
    // Simulamos datos
    const estadisticas = {
      totalAves: 1500,
      totalInsectos: 800,
      avesCundinamarca: 600,
      insectosBoyaca: 400,
    };
  
    // Mostrar en la página
    document.getElementById("total-aves").textContent = estadisticas.totalAves;
    document.getElementById("total-insectos").textContent =
      estadisticas.totalInsectos;
    document.getElementById("aves-cundinamarca").textContent =
      estadisticas.avesCundinamarca;
    document.getElementById("insectos-boyaca").textContent =
      estadisticas.insectosBoyaca;
  }
  
  // Función para cargar la gráfica
  function cargarGrafica() {
    const ctx = document.getElementById("grafica").getContext("2d");
    const tipoGrafica = document.getElementById("tipo-grafica");
    let chart; // Variable para almacenar la instancia del gráfico
  
    // Configuración inicial del gráfico
    const data = {
      labels: ["Aves", "Insectos"],
      datasets: [
        {
          label: "Cantidad",
          data: [1500, 800], // Datos simulados
          backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Estadísticas de Biodiversidad",
        },
      },
    };
  
    // Crear el gráfico inicial de barras
    chart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });
  
    // Evento para cambiar el tipo de gráfico
    tipoGrafica.addEventListener("change", function () {
      const selectedType = tipoGrafica.value;
  
      // Destruir el gráfico actual antes de crear uno nuevo
      chart.destroy();
  
      // Determinar el tipo de gráfico seleccionado
      let newChartType, newChartData;
      if (selectedType === "torta") {
        newChartType = "pie";
        newChartData = {
          labels: ["Aves", "Insectos"],
          datasets: [
            {
              label: "Cantidad",
              data: [1500, 800], // Datos simulados
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
              borderWidth: 1,
            },
          ],
        };
      } else {
        newChartType = "bar";
        newChartData = {
          labels: ["Aves", "Insectos"],
          datasets: [
            {
              label: "Cantidad",
              data: [1500, 800], // Datos simulados
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
              borderWidth: 1,
            },
          ],
        };
      }
  
      // Crear el nuevo gráfico con el tipo seleccionado
      chart = new Chart(ctx, {
        type: newChartType,
        data: newChartData,
        options: options,
      });
    });
  }
  
  // Nueva función para cargar el gráfico de tendencias
  function cargarGraficoTendencias() {
    const ctx = document.getElementById("grafico-tendencias").getContext("2d");
  
    // Simulamos datos de tendencias
    const datosTendencias = {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
      datasets: [
        {
          label: "Aves",
          data: [1000, 1200, 1500, 1400, 1600, 1500], // Datos simulados
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          fill: true,
        },
        {
          label: "Insectos",
          data: [700, 750, 800, 850, 800, 900], // Datos simulados
          borderColor: "rgba(54, 162, 235, 1)",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          fill: true,
        },
      ],
    };
  
    const opcionesTendencias = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Tendencias de Aves e Insectos",
        },
      },
    };
  
    // Crear el gráfico de líneas
    new Chart(ctx, {
      type: "line",
      data: datosTendencias,
      options: opcionesTendencias,
    });
  }
  