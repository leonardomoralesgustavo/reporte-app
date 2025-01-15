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
    ],
    totalUnits: 53,
  },
  {
    agency: "CUAUTLA",
    sellers: [
      { name: "ALEXIS MEDINA CHARLES RONNIE", unitsSold: 4 },
      { name: "BAZALDUA RUIZ YADIRA NISAGE", unitsSold: 1 },
    ],
    totalUnits: 16,
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
