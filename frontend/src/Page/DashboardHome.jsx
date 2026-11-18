import { useAuth } from "../context/AuthContext.jsx";

function DashboardHome() {
  const { usuario } = useAuth();

  return (
    <section>
      <h1 className="h3 mb-3">Bienvenido{usuario?.nombre ? `, ${usuario.nombre}` : ""}</h1>
      <p className="text-muted mb-0">
        Desde aquí podrás gestionar la información de tu inventario.
      </p>
    </section>
  );
}

export default DashboardHome;
