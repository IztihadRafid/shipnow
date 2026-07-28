export interface StatWithChange {
  value: number;
  changePercent: number;
}

export interface WarehouseStats {
  totalSKU: StatWithChange;
  quantityOnHand: StatWithChange & { unit: string };
  capacityUsage: StatWithChange & { unit: string; label: string };
}

export interface InventoryCategory {
  id: string;
  name: string;
  units: number;
  percent: number;
}

export interface WarehouseInventory {
  totalPackages: number;
  categories: InventoryCategory[];
}

export interface CapacityUsage {
  totalUsagePercent: number;
  loadedShelves: number;
  emptyShelves: number;
  totalShelves: number;
}

export type PackageStatusFilter = "All" | "Expected" | "Received" | "Sent";

export interface Package {
  id: string;
  date: string;
  status: Exclude<PackageStatusFilter, "All">;
}

export interface PackageStatus {
  filter: PackageStatusFilter;
  packages: Package[];
}

export interface StorageRow {
  id: string;
  floor: number;
  section: string;
  category: string;
  percentUsed: number;
  availableSpace: number;
  capacity: number;
}

export interface MapSection {
  id: string;
  category: string;
  shelves: string[];
  availableSpace: number;
  capacity: number;
}

export interface WarehouseMap {
  floor: number;
  sections: MapSection[];
}

export interface ActivityLogEntry {
  id: string;
  user: string;
  action: string;
  section: string;
  category: string;
  time: string;
}