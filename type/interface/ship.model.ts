export interface ShipBaseModel {
  id: string;
  name: string;
  image: string;
  type: string;
}

export interface ShipMissionModel {
  flight: string;
  name: string;
}

export interface ShipModel extends ShipBaseModel {
  weight_kg: number;
  year_built: number;
  class: number;
  missions: ShipMissionModel[];
  home_port: string;
}
