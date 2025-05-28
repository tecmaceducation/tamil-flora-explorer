
export interface Plant {
  id: string;
  scientific_name: string;
  family: string;
  tamil_name: string;
  habitat: string;
  uses: string;
  conservation_status: 'LC' | 'NT' | 'VU' | 'EN' | 'CR' | 'EW' | 'EX' | 'DD';
  flowering_period: string;
  fruiting_period: string;
  images: string[];
  is_endemic: boolean;
  description?: string;
  distribution?: string;
  tags?: string[];
}

export interface PlantFilter {
  scientific_name?: string;
  tamil_name?: string;
  family?: string;
  conservation_status?: string;
  habitat?: string;
  flowering_period?: string;
  fruiting_period?: string;
  is_endemic?: boolean;
  is_medicinal?: boolean;
  is_invasive?: boolean;
}
