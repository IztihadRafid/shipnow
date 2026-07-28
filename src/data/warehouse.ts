
import { ActivityLogEntry, CapacityUsage, PackageStatus, StorageRow, WarehouseInventory, WarehouseMap, WarehouseStats } from "./warehouseTypes";


// Top stats row
export const warehouseStats: WarehouseStats = {
  totalSKU: { value: 285, changePercent: 2.58 },
  quantityOnHand: { value: 12450, unit: "units", changePercent: 4.37 },
  capacityUsage: { value: 62.5, unit: "%", label: "Full", changePercent: 1.54 },
};

// Warehouse Inventory bar chart
export const warehouseInventory: WarehouseInventory = {
  totalPackages: 10000,
  categories: [
    { id: "inv-1", name: "Electronics", units: 2500, percent: 25 },
    { id: "inv-2", name: "Apparel", units: 2000, percent: 20 },
    { id: "inv-3", name: "Home & Kitchen", units: 1800, percent: 18 },
    { id: "inv-4", name: "Beauty & Health", units: 1500, percent: 15 },
    { id: "inv-5", name: "Automotive Parts", units: 1200, percent: 12 },
    { id: "inv-6", name: "Sports Equipment", units: 1000, percent: 10 },
  ],
};

// Capacity Usage donut
export const capacityUsage: CapacityUsage = {
  totalUsagePercent: 62.5,
  loadedShelves: 40,
  emptyShelves: 24,
  totalShelves: 64,
};

// Package Status list
export const packageStatus: PackageStatus = {
  filter: "All",
  packages: [
    { id: "PKG-HK77420", date: "2035-03-20T05:30:00", status: "Sent" },
    { id: "PKG-A50812", date: "2035-03-21T01:45:00", status: "Received" },
    { id: "PKG-E10293", date: "2035-03-22T09:00:00", status: "Expected" },
  ],
};

// Warehouse Storage table
export const warehouseStorage: StorageRow[] = [
  { id: "storage-1", floor: 1, section: "A1 - A10", category: "Electronics", percentUsed: 80, availableSpace: 20, capacity: 100 },
  { id: "storage-2", floor: 2, section: "B1 - B10", category: "Apparel", percentUsed: 60, availableSpace: 40, capacity: 100 },
  { id: "storage-3", floor: 1, section: "C1 - C10", category: "Home & Kitchen", percentUsed: 90, availableSpace: 10, capacity: 100 },
  { id: "storage-4", floor: 3, section: "D1 - D10", category: "Automotive Parts", percentUsed: 50, availableSpace: 50, capacity: 100 },
  { id: "storage-5", floor: 2, section: "E1 - E10", category: "Beauty & Health", percentUsed: 70, availableSpace: 30, capacity: 100 },
];

// Warehouse Map (per-floor shelf layout)
export const warehouseMap: WarehouseMap = {
  floor: 1,
  sections: [
    { id: "map-1", category: "Electronics", shelves: ["A1", "A2", "A3"], availableSpace: 20, capacity: 100 },
    { id: "map-2", category: "Home & Kitchen", shelves: ["C1", "C2", "C3"], availableSpace: 10, capacity: 100 },
    { id: "map-3", category: "Automotive Parts", shelves: ["D1", "D2", "D3"], availableSpace: 50, capacity: 100 },
    { id: "map-4", category: "Sports Equipment", shelves: ["F1", "F2", "F3"], availableSpace: 45, capacity: 100 },
    { id: "map-5", category: "Apparel", shelves: ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"], availableSpace: 20, capacity: 100 },
    { id: "map-6", category: "Beauty & Health", shelves: ["E1", "E2", "E3", "E4"], availableSpace: 30, capacity: 100 },
  ],
};

// Warehouse Activity Log
export const warehouseActivityLog: ActivityLogEntry[] = [
  { id: "log-1", user: "Leo Fernandez", action: "confirmed receipt of 40 units of Winter Jacket Series", section: "B3", category: "Apparel", time: "01:45 PM" },
  { id: "log-2", user: "Ava Martinez", action: "added 25 units of Smart Router Kit", section: "A1", category: "Electronics", time: "09:15 AM" },
  { id: "log-3", user: "Oscar Liem", action: "dispatched 18 units of Stainless Steel Cookware Set", section: "C5", category: "Home & Kitchen", time: "05:30 PM" },
  { id: "log-4", user: "Dina Choi", action: "created a shipment entry for Brake Pad Sets", section: "D2", category: "Automotive Parts", time: "04:10 PM" },
];