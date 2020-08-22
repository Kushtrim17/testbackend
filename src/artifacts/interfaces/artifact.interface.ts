export interface Artifact {
  id?: string;
  type: string;
  height: number;
  width: number;
  thickness: number;
  foundCoordinateX: number;
  foundCoordinateY: number;
  dateFound: Date;
  dateReported: Date;
  imagesUrl?: string[];
}
