import "../projectstyles/CasoParking.css";

export default function CasoParking() {
  return (
    <div className="parking-container">

      {/* ================================================= */}
      {/* 1. PANTALLA COMPLETA: HERO + OBJETIVOS */}
      {/* ================================================= */}
      <section id="summary" className="screen-full">
        <div className="hero-clean">
          <h1>Caso Parking</h1>
          <h3>Optimización del flujo vehicular y análisis operativo</h3>

          <p>
            Proyecto centrado en el análisis, modelado y optimización del sistema de 
            estacionamiento, identificando flujo vehicular, permanencia y patrones 
            operativos clave.
          </p>
        </div>

        <div className="objectives-clean">
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
        </div>
      </section>


      {/* ================================================= */}
      {/* 2. PANTALLA COMPLETA: PROCESO ETL */}
      {/* ================================================= */}
      <section id="etl" className="screen-full">
        <div className="split-section">
          <div className="text-block">
            <h2>🔧 Proceso ETL</h2>
            <p>
              El proceso ETL incluyó limpieza de datos, estandarización de fechas,
              corrección de inconsistencias y creación de tablas dimensionales como
              Vehículo, Tiempo y Estacionamiento.
            </p>
          </div>

          <img src="/assets/parking/etl_pipeline.png" alt="ETL Pipeline" />
        </div>
      </section>


      {/* ================================================= */}
      {/* 3. PANTALLA COMPLETA: CUBO OLAP */}
      {/* ================================================= */}
      <section id="olap" className="screen-full">
        <div className="split-section reverse">
          <img src="/assets/parking/cubo_olap.png" alt="Cubo OLAP" />

          <div className="text-block">
            <h2>🧊 Cubo OLAP y Actualización Periódica</h2>
            <p>
              Se desarrolló un cubo OLAP que permite un análisis multidimensional del 
              comportamiento vehicular, incluyendo actualizaciones periódicas basadas 
              en el proceso ETL.
            </p>
          </div>
        </div>
      </section>


      {/* ================================================= */}
      {/* 4. PANTALLA COMPLETA: EXPLOTACIÓN DE DATOS */}
      {/* ================================================= */}
      <section id="explotacion" className="screen-full">
        <h2>📊 Explotación de Datos</h2>
        <p>
          Dashboards interactivos creados para visualizar tendencias, patrones operativos 
          y comportamiento de la demanda.
        </p>

        <iframe
          title="Dashboard Parking"
          src="https://app.powerbi.com/view?r=eyJrIjoiMmRhNGFlYWYtZDI2Ni00YWZhLTgwZjgtOWFiZmY0YThjZmRiIiwidCI6IjRmNDAwMzI2LThjZjgtNDNhYi05ZDZiLWIwNTJkNjI0ZmE0MSIsImMiOjR9"
          allowFullScreen
        ></iframe>

        <ul className="parking-list">
          <li>Ocupabilidad del estacionamiento.</li>
          <li>Rotación y flujo vehicular.</li>
          <li>Permanencia promedio por tipo de vehículo.</li>
          <li>Identificación de horas pico.</li>
          <li>Comparativos entre días de la semana.</li>
        </ul>
      </section>


      {/* ================================================= */}
      {/* 5. PANTALLA COMPLETA: SARIMAX */}
      {/* ================================================= */}
      <section id="sarimax" className="screen-full">
        <div className="split-section">
          <div className="text-block">
            <h2>📈 Proyección SARIMAX</h2>
            <p>
              Modelo SARIMAX aplicado para proyectar la afluencia mensual, con un 
              crecimiento estimado entre 6% y 8%, permitiendo anticipar la demanda futura.
            </p>
          </div>

          <img src="/assets/parking/sarimax_forecast.png" alt="SARIMAX Forecast" />
        </div>
      </section>

    </div>
  );
}
