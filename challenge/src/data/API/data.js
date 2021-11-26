// dados dos equipamentos
export const equipaments =  [
  {
    "EquipmentID": "CMRP1",
    "EquipmentName": "Cortador Tampo Mesa Retangular Pequeno"
  },
  {
    "EquipmentID": "CMRG1",
    "EquipmentName": "Cortador Tampo Mesa Retangular Grande"
  },
  {
    "EquipmentID": "CTMQ1",
    "EquipmentName": "Cortador Tampo Mesa Quadrada"
  },
  {
    "EquipmentID": "PFSD1",
    "EquipmentName": "Parafusador"
  },
  {
    "EquipmentID": "MTLH1",
    "EquipmentName": "Martelo Hidraulico"
  },
  {
    "EquipmentID": "MRTB1",
    "EquipmentName": "Marreta Bionica"
  },
  {
    "EquipmentID": "PFSD2",
    "EquipmentName": "Parafusador 2"
  },
  {
    "EquipmentID": "MDG1",
    "EquipmentName": "Montador de Gavetas"
  }
]

// dados dos materiais (produtos)
export const materials =  
[
  {
    "MaterialID": "GVT",
    "MaterialName": "Gaveta"
  },
  {
    "MaterialID": "MECAJA",
    "MaterialName": "Mesa com Cadeira Jantar"
  },
  {
    "MaterialID": "ML3X2",
    "MaterialName": "Mesa Luxo 3m x 2m"
  },
  {
    "MaterialID": "MQ1X1",
    "MaterialName": "Mesa Quadrada 1m x 1m"
  },
  {
    "MaterialID": "MQ2X2",
    "MaterialName": "Mesa Quadrada 2m x 2m"
  },
  {
    "MaterialID": "MQ3X3",
    "MaterialName": "Mesa Quadrada 3m x 3m"
  },
  {
    "MaterialID": "MR1X-5",
    "MaterialName": "Mesa Retangular 1m x 50cm"
  },
  {
    "MaterialID": "MR2X1",
    "MaterialName": "Mesa Retangular 2m x 1m"
  },
  {
    "MaterialID": "MR3X1",
    "MaterialName": "Mesa Retangular 3m x 1m"
  },
  {
    "MaterialID": "MR3X2",
    "MaterialName": "Mesa Retangular 3m x 2m"
  },
  {
    "MaterialID": "MS2X3",
    "MaterialName": "Mesa Simples 2m x 3m"
  },
  {
    "MaterialID": "PPM",
    "MaterialName": "Pe para Mesa"
  },
  {
    "MaterialID": "PRF",
    "MaterialName": "Parafuso no 8"
  },
  {
    "MaterialID": "PRG",
    "MaterialName": "Prego 10x10"
  },
  {
    "MaterialID": "PXDGVT",
    "MaterialName": "Puxador Gaveta"
  },
  {
    "MaterialID": "TMQ",
    "MaterialName": "Tampo para Mesa Quadrada"
  },
  {
    "MaterialID": "TMR",
    "MaterialName": "Tampo para Mesa Retangular"
  },
  {
    "MaterialID": "MR4X2",
    "MaterialName": "Mesa Retangular 4m x 2m"
  },
  {
    "MaterialID": "MR5X2",
    "MaterialName": "Mesa Retangular 5m x 2m"
  }
]

// dados dos pedidos de compras 
export const purchase_orders = [
  {
    "PurchaseOrderID": 12289,
    "DeliveryDate": "10/03/2018",
    "Supplier": "Hatfan",
    "MaterialID": "TMR",
    "MaterialName": "Tampo para Mesa Retangular",
    "Quantity": 120,
    "TotalCost": 120
  },
  {
    "PurchaseOrderID": 12354,
    "DeliveryDate": "03/08/2018",
    "Supplier": "Streethex",
    "MaterialID": "TMQ",
    "MaterialName": "Tampo para Mesa Quadrada",
    "Quantity": 200,
    "TotalCost": 250
  },
  {
    "PurchaseOrderID": 12589,
    "DeliveryDate": "05/06/2018",
    "Supplier": "Inity",
    "MaterialID": "PRG",
    "MaterialName": "Prego 10x10",
    "Quantity": 1500,
    "TotalCost": 150
  },
  {
    "PurchaseOrderID": 12478,
    "DeliveryDate": "07/06/2018",
    "Supplier": "Konmatfix",
    "MaterialID": "PRF",
    "MaterialName": "Parafuso no 8",
    "Quantity": 2000,
    "TotalCost": 39
  },
  {
    "PurchaseOrderID": 11548,
    "DeliveryDate": "12/05/2018",
    "Supplier": "Bioholding",
    "MaterialID": "TMQ",
    "MaterialName": "Tampo para Mesa Quadrada",
    "Quantity": 500,
    "TotalCost": 45
  },
  {
    "PurchaseOrderID": 10325,
    "DeliveryDate": "11/09/2018",
    "Supplier": "Hottechi",
    "MaterialID": "PRG",
    "MaterialName": "Prego 10x10",
    "Quantity": 1000,
    "TotalCost": 120
  },
  {
    "PurchaseOrderID": 10236,
    "DeliveryDate": "11/03/2018",
    "Supplier": "Ganjaflex",
    "MaterialID": "GVT",
    "MaterialName": "Gaveta",
    "Quantity": 1500,
    "TotalCost": 135
  },
  {
    "PurchaseOrderID": 12362,
    "DeliveryDate": "12/11/2018",
    "Supplier": "Betatech",
    "MaterialID": "PRG",
    "MaterialName": "Prego 10x10",
    "Quantity": 3000,
    "TotalCost": 20
  },
  {
    "PurchaseOrderID": 12025,
    "DeliveryDate": "03/01/2018",
    "Supplier": "Domzoom",
    "MaterialID": "PRF",
    "MaterialName": "Parafuso no 8",
    "Quantity": 3000,
    "TotalCost": 36
  },
  {
    "PurchaseOrderID": 10248,
    "DeliveryDate": "03/02/2018",
    "Supplier": "Ontomedia",
    "MaterialID": "PPM",
    "MaterialName": "Pe para Mesa",
    "Quantity": 250,
    "TotalCost": 30
  },
  {
    "PurchaseOrderID": 10251,
    "DeliveryDate": "02/01/2018",
    "Supplier": "Newex",
    "MaterialID": "PPM",
    "MaterialName": "Pe para Mesa",
    "Quantity": 250,
    "TotalCost": 39
  },
  {
    "PurchaseOrderID": 10302,
    "DeliveryDate": "09/10/2018",
    "Supplier": "Betasoloin",
    "MaterialID": "TMQ",
    "MaterialName": "Tampo para Mesa Quadrada",
    "Quantity": 390,
    "TotalCost": 42
  },
  {
    "PurchaseOrderID": 10685,
    "DeliveryDate": "10/02/2018",
    "Supplier": "Mathtouch",
    "MaterialID": "GVT",
    "MaterialName": "Gaveta",
    "Quantity": 800,
    "TotalCost": 58
  },
  {
    "PurchaseOrderID": 10147,
    "DeliveryDate": "10/07/2018",
    "Supplier": "Rantouch",
    "MaterialID": "PXDGVT",
    "MaterialName": "Puxador Gaveta",
    "Quantity": 3000,
    "TotalCost": 50
  },
  {
    "PurchaseOrderID": 10741,
    "DeliveryDate": "10/02/2018",
    "Supplier": "Silis",
    "MaterialID": "TMQ",
    "MaterialName": "Tampo para Mesa Quadrada",
    "Quantity": 150,
    "TotalCost": 50
  },
  {
    "PurchaseOrderID": 10254,
    "DeliveryDate": "10/07/2018",
    "Supplier": "Plussunin",
    "MaterialID": "PPM",
    "MaterialName": "Pe para Mesa",
    "Quantity": 600,
    "TotalCost": 100
  }
]

// dados dos pedidos de venda
export const sales_order = [
  {
    "SalesOrderID": 20450,
    "DeliveryDate": "01/09/2018",
    "Customer": "Toughzap",
    "MaterialID": "MR2X1",
    "MaterialName": "Mesa Retangular 2m x 1m",
    "Quantity": 20,
    "TotalValue": 2000
  },
  {
    "SalesOrderID": 21200,
    "DeliveryDate": "03/08/2018",
    "Customer": "Zencorporation",
    "MaterialID": "MR3X2",
    "MaterialName": "Mesa Retangular 3m x 2m",
    "Quantity": 40,
    "TotalValue": 4000
  },
  {
    "SalesOrderID": 22152,
    "DeliveryDate": "05/06/2018",
    "Customer": "Sumace",
    "MaterialID": "MR1X-5",
    "MaterialName": "Mesa Retangular 1m x 50cm",
    "Quantity": 30,
    "TotalValue": 3000
  },
  {
    "SalesOrderID": 23485,
    "DeliveryDate": "07/06/2018",
    "Customer": "Treequote",
    "MaterialID": "MR2X1",
    "MaterialName": "Mesa Retangular 2m x 1m",
    "Quantity": 26,
    "TotalValue": 2600
  },
  {
    "SalesOrderID": 24685,
    "DeliveryDate": "12/05/2018",
    "Customer": "Iselectrics",
    "MaterialID": "MR3X1",
    "MaterialName": "Mesa Retangular 3m x 1m",
    "Quantity": 15,
    "TotalValue": 1500
  },
  {
    "SalesOrderID": 20583,
    "DeliveryDate": "11/09/2018",
    "Customer": "Zencorporation",
    "MaterialID": "MQ2X2",
    "MaterialName": "Mesa Quadrada 2m x 2m",
    "Quantity": 16,
    "TotalValue": 1600
  },
  {
    "SalesOrderID": 26352,
    "DeliveryDate": "11/03/2018",
    "Customer": "Plusstrip",
    "MaterialID": "MQ3X3",
    "MaterialName": "Mesa Quadrada 3m x 3m",
    "Quantity": 25,
    "TotalValue": 2500
  },
  {
    "SalesOrderID": 21548,
    "DeliveryDate": "12/11/2018",
    "Customer": "dambase",
    "MaterialID": "MQ1X1",
    "MaterialName": "Mesa Quadrada 1m x 1m",
    "Quantity": 39,
    "TotalValue": 3900
  },
  {
    "SalesOrderID": 19125,
    "DeliveryDate": "03/01/2018",
    "Customer": "Toughzap",
    "MaterialID": "MQ2X2",
    "MaterialName": "Mesa Quadrada 2m x 2m",
    "Quantity": 54,
    "TotalValue": 5400
  },
  {
    "SalesOrderID": 18425,
    "DeliveryDate": "03/02/2018",
    "Customer": "Codehow",
    "MaterialID": "MECAJA",
    "MaterialName": "Mesa com Cadeira Jantar",
    "Quantity": 58,
    "TotalValue": 5800
  },
  {
    "SalesOrderID": 18144,
    "DeliveryDate": "02/01/2018",
    "Customer": "Zotware",
    "MaterialID": "MS2X3",
    "MaterialName": "Mesa Simples 2m x 3m",
    "Quantity": 41,
    "TotalValue": 4100
  },
  {
    "SalesOrderID": 18526,
    "DeliveryDate": "09/10/2018",
    "Customer": "Statholdings",
    "MaterialID": "ML3X2",
    "MaterialName": "Mesa Luxo 3m x 2m",
    "Quantity": 20,
    "TotalValue": 2000
  },
  {
    "SalesOrderID": 19132,
    "DeliveryDate": "10/02/2018",
    "Customer": "Conecom",
    "MaterialID": "MQ2X2",
    "MaterialName": "Mesa Quadrada 2m x 2m",
    "Quantity": 10,
    "TotalValue": 1000
  },
  {
    "SalesOrderID": 22362,
    "DeliveryDate": "10/07/2018",
    "Customer": "Zathunicon",
    "MaterialID": "MECAJA",
    "MaterialName": "Mesa com Cadeira Jantar",
    "Quantity": 15,
    "TotalValue": 1500
  }
]

// dados da mão de obra
export const workforce = [
  {
    "WorkforceID": 1,
    "Name": "Aline Velasques",
    "Shift": "Turno A"
  },
  {
    "WorkforceID": 2,
    "Name": "Danilo In�s",
    "Shift": "Turno B"
  },
  {
    "WorkforceID": 3,
    "Name": "Dina Granjeiro",
    "Shift": "Turno C"
  },
  {
    "WorkforceID": 4,
    "Name": "D�bora Pinhal",
    "Shift": "Turno A"
  },
  {
    "WorkforceID": 5,
    "Name": "Eurico Moita",
    "Shift": "Turno B"
  },
  {
    "WorkforceID": 6,
    "Name": "Humberto Braz",
    "Shift": "Turno C"
  },
  {
    "WorkforceID": 7,
    "Name": "Iara Parracho",
    "Shift": "Turno A"
  },
  {
    "WorkforceID": 8,
    "Name": "Jacir Piteira",
    "Shift": "Turno B"
  },
  {
    "WorkforceID": 9,
    "Name": "Ludovico Pino",
    "Shift": "Turno C"
  },
  {
    "WorkforceID": 10,
    "Name": "Mamede Quintero",
    "Shift": "Turno A"
  },
  {
    "WorkforceID": 11,
    "Name": "Matias Pedroso",
    "Shift": "Turno B"
  },
  {
    "WorkforceID": 12,
    "Name": "Micael D�az",
    "Shift": "Turno C"
  },
  {
    "WorkforceID": 13,
    "Name": "Milena Vargas",
    "Shift": "Turno A"
  },
  {
    "WorkforceID": 14,
    "Name": "Of�lia Avelar",
    "Shift": "Turno B"
  },
  {
    "WorkforceID": 15,
    "Name": "Paulo Bri�o",
    "Shift": "Turno C"
  },
  {
    "WorkforceID": 16,
    "Name": "Poliana Camargo",
    "Shift": "Turno A"
  },
  {
    "WorkforceID": 17,
    "Name": "Sofia Salles",
    "Shift": "Turno B"
  },
  {
    "WorkforceID": 18,
    "Name": "Teodorico Cipriano",
    "Shift": "Turno C"
  },
  {
    "WorkforceID": 19,
    "Name": "Tiago Alancastre",
    "Shift": "Turno A"
  },
  {
    "WorkforceID": 20,
    "Name": "Violeta Quintal",
    "Shift": "Turno B"
  },
  {
    "WorkforceID": 21,
    "Name": "Vivaldo Sucupira",
    "Shift": "Turno C"
  },
  {
    "WorkforceID": 22,
    "Name": "Zacarias Quir�s",
    "Shift": "Turno A"
  },
  {
    "WorkforceID": 23,
    "Name": "�nia Sousa",
    "Shift": "Turno B"
  }
]