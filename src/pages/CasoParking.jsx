import "../projectstyles/CasoParking.css";

export default function CasoParking() {
  return (
    <div className="parking-container">

      {/* 1. PORTADA – Optimización del flujo vehicular */}
      <section className="parking-section portada">
        <img src="/assets/parking/parking_portada.jpg" className="portada-img" />

        <h1 className="parking-title">Caso Parking</h1>
        <h3 className="parking-subtitle">
          Optimización del flujo vehicular y análisis operativo
        </h3>

        <p className="parking-text center">
          Proyecto centrado en el análisis, modelado y optimización del comportamiento
          del sistema de estacionamiento. Incluye análisis de flujo vehicular, permanencia,
          demanda por horas y detección de patrones operativos clave.
        </p>
      </section>

      {/* 2. OBJETIVOS DEL PROYECTO */}
      <section className="parking-section">
        <h2 className="parking-heading">🎯 Objetivos del Proyecto</h2>

        <ul className="parking-list">
          <li>Analizar el comportamiento de entrada y salida de vehículos.</li>
          <li>Identificar horas pico de mayor afluencia.</li>
          <li>Construir un modelo ETL para transformar datos brutos.</li>
          <li>Diseñar un modelo dimensional tipo estrella.</li>
          <li>Construir un cubo OLAP con actualización periódica.</li>
          <li>Crear dashboards analíticos en Power BI.</li>
          <li>Proyectar la demanda mediante modelos SARIMAX.</li>
        </ul>
      </section>

      {/* 3. PROCESO ETL */}
      <section className="parking-section image-right">
        <div className="text">
          <h2 className="parking-heading">🔧 Proceso ETL</h2>
          <p className="parking-text">
            El proceso ETL incluyó limpieza de datos, estandarización de fechas,
            corrección de inconsistencias y creación de tablas dimensionales como
            Vehículo, Tiempo y Estacionamiento. Este proceso permitió estructurar la
            información en un modelo analítico eficiente para la explotación posterior.
          </p>
        </div>

        <img src="/assets/parking/etl_pipeline.png" className="side-image" />
      </section>

      {/* 4. CUBO OLAP */}
      <section className="parking-section image-left">
        <img src="/assets/parking/cubo_olap.png" className="side-image" />

        <div className="text">
          <h2 className="parking-heading">🧊 Cubo OLAP y Actualización Periódica</h2>
          <p className="parking-text">
            Se desarrolló un cubo OLAP que permite el análisis multidimensional del 
            comportamiento vehicular. El cubo se alimenta mediante un proceso de 
            actualización periódica (refresh) que integra los datos procesados en el ETL.
          </p>
        </div>
      </section>

      {/* 5. EXPLOTACIÓN DE DATOS (Dashboard) */}
      <section className="parking-section dashboard-block">

        {/* Dashboard Power BI */}
        <div className="dashboard-frame">
          <iframe
            title="Dashboard Parking"
            src="https://app.powerbi.com/view?r=eyJrIjoiMmRhNGFlYWYtZDI2Ni00YWZhLTgwZjgtOWFiZmY0YThjZmRiIiwidCI6IjRmNDAwMzI2LThjZjgtNDNhYi05ZDZiLWIwNTJkNjI0ZmE0MSIsImMiOjR9"
            frameBorder="0"
            allowFullScreen="true"
          ></iframe>
        </div>

        <div className="dashboard-text">
          <h2 className="parking-heading">📊 Explotación de Datos</h2>
          <p className="parking-text">
            La explotación de datos se realizó mediante dashboards interactivos que permiten
            comprender tendencias y patrones operativos.
          </p>

          <ul className="parking-list">
            <li>Ocupabilidad del estacionamiento.</li>
            <li>Rotación y flujo vehicular por horas.</li>
            <li>Permanencia promedio por tipo de vehículo.</li>
            <li>Identificación de horas pico de mayor demanda.</li>
            <li>Comparativos entre días de la semana.</li>
          </ul>
        </div>
      </section>

      {/* 6. PROYECCIÓN SARIMAX */}
      <section className="parking-section image-right">
        <div className="text">
          <h2 className="parking-heading">📈 Proyección SARIMAX</h2>
          <p className="parking-text">
            Se aplicó un modelo de series temporales SARIMAX para estimar el crecimiento 
            proyectado de afluencia mensual. El modelo indica un incremento aproximado 
            entre 6% y 8%, lo que permite anticipar la demanda futura del estacionamiento.
          </p>
        </div>

        <img src="/assets/parking/sarimax_forecast.png" className="side-image" />
      </section>

    </div>
  );
}
