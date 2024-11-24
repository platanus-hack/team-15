import AWS from "aws-sdk";

export const invokeLambda = async () => {
  try {
    AWS.config.update({
        accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
        region: "us-east-1",
      });
      
    const lambda = new AWS.Lambda();
  const params = {
    FunctionName: "queryWriting",
    InvocationType: "RequestResponse",
    Payload: JSON.stringify({'cmf': {'deuda_directa': {'resumen': {'institucion': 'Sin información', 'tipo_de_credito': '-', 'total_credito': '$0', 'vigente': '$0', '30_59_dias_atraso': '$0', '60_89_dias_atraso': '$0', '90_mas_dias_atraso': '$0'}}, 'deuda_indirecta': {'resumen': {'institucion': 'Sin información', 'tipo_de_credito': '-', 'total_credito': '$0', 'vigente': '$0', '30_59_dias_atraso': '$0', '60_89_dias_atraso': '$0', '90_mas_dias_atraso': '$0'}}, 'disponibilidad_credito': {'lineas_de_credito': [{'institucion': 'Banco de Chile', 'directo': '$3,440,020', 'indirecto': '$0'}], 'otros_creditos': [{'institucion': 'Sin información', 'directo': '$0', 'indirecto': '$0'}]}}, 'bienesRaices': [{'Comuna': 'RANCAGUA', 'ROL': '11403-00009', 'Dirección': 'PJE CORONA BOREAL 1495 SAN DAMIAN', 'Destino': 'HABITACIONAL', 'Avalúo Fiscal': '$ 228.750.918', 'Estado Pago': 'Por Vencer'}], 'vehiculos': [{'Patente': 'BFSJ28', 'Tipo vehiculo': 'AUTOMOVIL', 'Marca': 'KIA MOTORS', 'Modelo': 'OPIRUS 3.8 AUT', 'N° Motor': 'G6DA7S362379', 'Precio': 1000, 'Año': '2008'}, {'Patente': 'JCSZ46', 'Tipo vehiculo': 'AUTOMOVIL', 'Marca': 'FORD', 'Modelo': 'FUSION 2.0 AUT', 'N° Motor': 'GR362933', 'Precio': 1000, 'Año': '2017'}], 'edad': 24, 'ingreso_mensual': 100000, 'enfoque': 'Busco un enfoque en futuras inversiones'}),
  };
    const response = await lambda.invoke(params).promise();
    console.log("Respuesta de Lambda:", JSON.parse(response.Payload));
    return JSON.parse(response.Payload);
  } catch (error) {
    console.error("Error al invocar la Lambda:", error);
  }
};

