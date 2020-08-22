export class CreateArtifactDto {
  type: string;
  height: number;
  width: number;
  thickness: number;
  foundCoordinateX: number;
  foundCoordinateY: number;
  dateFound: Date;
  dateReported: Date;
  currentAddress: string;
}
