export interface Destination {
  id: string;
  address: string;
  percentage: number;
}

export interface MixingFormState {
  destinations: Destination[];
  delay: number;
  confirmed: boolean;
}
