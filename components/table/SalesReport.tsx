import React from "react";

interface SaleData {
  agency: string;
  sellers: {
    name: string;
    unitsSold: number;
  }[];
  totalUnits: number;
}

const salesData: SaleData[] = [
  {
    agency: "CUAUHNAHUAC",
    sellers: [
      { name: "ADAN JIMENEZ MARIO", unitsSold: 1 },
      { name: "ALVARADO BAHENA JOSE GERARDO", unitsSold: 1 },
      { name: "ARROYO LAMADRID SANDRA", unitsSold: 0 },
      { name: "BELLO ORTIZ OMAR MOISES", unitsSold: 2 },
      { name: "BENITEZ RAMIREZ MICHELL ANGELO", unitsSold: 1 },
      { name: "CORTES VERA ANGEL ALBERTO", unitsSold: 3 },
      { name: "COTERO MOSSO JESUS SAMUEL", unitsSold: 2 },
      { name: "CASA CUAUHNAHUAC", unitsSold: 7 },
      { name: "FIGUEROA LUNA LETICIA", unitsSold: 1 },
      { name: "FURBER GONZALEZ ALBERTO", unitsSold: 5 },
      { name: "GARCIA AVILA CESAR CARLOS", unitsSold: 1 },
      { name: "GUADARRAMA AVILA PEDRO", unitsSold: 2 },
      { name: "GUADARRAMA JAIMES JOSE ANTONIO", unitsSold: 2 },
      { name: "HERNANDEZ FLORES JUAN ALBERTO", unitsSold: 3 },
      { name: "HERNANDEZ SANTIN MARCO ANTONIO", unitsSold: 1 },
      { name: "MENDIOLA BARRIOS ANDRES", unitsSold: 2 },
      { name: "MENESES SOTO NESTOR IVAN", unitsSold: 3 },
      { name: "MERAZ GOMEZ LINDA LILIANA", unitsSold: 1 },
      { name: "MONTERO ZAVALA SANDRA MIRIAM", unitsSold: 1 },
      { name: "PAVON VERGARA ROSA LAURA", unitsSold: 1 },
      { name: "RODRIGUEZ CASTRO IVONNE", unitsSold: 2 },
      { name: "RODRIGUEZ PANTALEON JUANA ARACELI", unitsSold: 5 },
      { name: "RUMBO MARTINEZ CARLOS GUADALUPE", unitsSold: 4 },
      { name: "UGALDE HERNANDEZ CARLOS", unitsSold: 2 },
    ],
    totalUnits: 53,
  },
  {
    agency: "CUAUTLA",
    sellers: [
      { name: "ALEXIS MEDINA CHARLES RONNIE", unitsSold: 4 },
      { name: "BAZALDUA RUIZ YADIRA NISAGE", unitsSold: 1 },
      { name: "BENAVIDES SOLIS MIGUEL", unitsSold: 1 },
      { name: "MOTA CARRANZA FERNANDO", unitsSold: 1 },
      { name: "ORTIZ SANCHEZ FELIPE DE JESUS", unitsSold: 1 },
      { name: "REYES AVILA MIRNA TATIANA", unitsSold: 2 },
      { name: "RODRIGUEZ CAMACHO MONTSERRAT", unitsSold: 2 },
      { name: "SALGADO IRINEO VIANEY MARIBEL", unitsSold: 2 },
      { name: "VILLEGAS SANCHEZ JESUS", unitsSold: 2 },
    ],
    totalUnits: 16,
  },
  {
    agency: "PALMAS",
    sellers: [
      { name: "ARREDONDO GONZALEZ OCTAVIO DANIEL", unitsSold: 1 },
      { name: "AVILA GONZALEZ LIZETH", unitsSold: -1 },
      { name: "BENITEZ RAMIREZ MICHELL ANGELO", unitsSold: 1 },
      { name: "CASA PALMAS", unitsSold: 1 },
      { name: "CASTREJON BAHENA LUIS ALBERTO", unitsSold: 1 },
      { name: "FLORES ESQUIVEL MARIA TERESA", unitsSold: 2 },
      { name: "GARCIA APARICIO ANDRES OSVALDO", unitsSold: 2 },
      { name: "GUADARRAMA AVILA PEDRO", unitsSold: 1 },
      { name: "HERNANDEZ SANTIN MARCO ANTONIO", unitsSold: 4 },
      { name: "MARIN ALVARADO ANAYELI", unitsSold: 1 },
      { name: "MEDINA ALONSO MAURICIO AGUSTIN", unitsSold: 1 },
      { name: "OSORIO BUSTAMANTE DIANA DENISSE", unitsSold: 1 },
      { name: "PUEBLA ALCANTAR VALERIA", unitsSold: 1 },
      { name: "RONCES GARCIA RICARDO", unitsSold: 1 },
      { name: "SALGADO GARCIA OLIVIA", unitsSold: 1 },
      { name: "SALINAS CORTES RICARDO ANTONIO", unitsSold: 1 },
      { name: "SERRANO RAMIREZ GALILEO IVAN", unitsSold: 3 },
      { name: "TORRES HERNANDEZ ROBERTO ALFONSO", unitsSold: 5 },
    ],
    totalUnits: 27,
  },
  {
    agency: "ZAPATA",
    sellers: [
      { name: "COTERO MOSSO JESUS SAMUEL", unitsSold: 1 },
      { name: "LEON BENITEZ ALEJANDRO", unitsSold: 1 },
      { name: "MARQUEZ CASTILLO ANTONIO RAFAEL", unitsSold: 3 },
      { name: "ORTIZ CASTAÑEDA ALEJANDRA", unitsSold: 1 },
    ],
    totalUnits: 6,
  },
];

const SalesReport: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen mb-8 m-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Análisis de Movimientos de Ventas
      </h1>
      {salesData.map((agencyData, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Agencia: {agencyData.agency}
          </h2>
          <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
              <tr>
                <th className="py-3 px-6 text-left">Vendedor</th>
                <th className="py-3 px-6 text-center">Unidades Vendidas</th>
              </tr>
            </thead>
            <tbody>
              {agencyData.sellers.map((seller, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="py-3 px-6 text-left text-gray-600">
                    {seller.name}
                  </td>
                  <td className="py-3 px-6 text-center text-gray-600">
                    {seller.unitsSold}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-200">
              <tr>
                <td className="py-3 px-6 text-left font-semibold text-gray-700">
                  Total
                </td>
                <td className="py-3 px-6 text-center font-semibold text-gray-700">
                  {agencyData.totalUnits}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      ))}
    </div>
  );
};

export default SalesReport;
