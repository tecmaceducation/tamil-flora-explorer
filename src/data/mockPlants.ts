
import { Plant } from "@/types/plant";

export const mockPlants: Plant[] = [
  {
    id: "1",
    scientific_name: "Delonix regia",
    family: "Fabaceae",
    tamil_name: "மயில் அசோகம் (Mayil Asokam)",
    habitat: "Urban areas, parks, roadsides. Tolerates various soil types.",
    uses: "Ornamental tree, traditional medicine for inflammation and wounds.",
    conservation_status: "LC",
    flowering_period: "March to June",
    fruiting_period: "July to December",
    images: ["https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"],
    is_endemic: false,
    description: "The Flame Tree is a striking deciduous tree known for its brilliant red-orange flowers that bloom profusely during summer months.",
    distribution: "Native to Madagascar, widely cultivated in Tamil Nadu",
    tags: ["ornamental", "urban"]
  },
  {
    id: "2",
    scientific_name: "Pongamia pinnata",
    family: "Fabaceae",
    tamil_name: "புங்கம் (Pungam)",
    habitat: "Coastal areas, river banks, deciduous forests",
    uses: "Biodiesel production, traditional medicine, timber",
    conservation_status: "LC",
    flowering_period: "April to July",
    fruiting_period: "October to February",
    images: ["https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"],
    is_endemic: false,
    description: "A medium-sized tree valuable for its oil-rich seeds used in biodiesel production and traditional medicine.",
    distribution: "Throughout Tamil Nadu, especially coastal regions",
    tags: ["medicinal", "coastal", "biofuel"]
  },
  {
    id: "3",
    scientific_name: "Terminalia arjuna",
    family: "Combretaceae",
    tamil_name: "அர்ஜுன் (Arjun)",
    habitat: "River banks, moist deciduous forests",
    uses: "Cardiotonic medicine, timber, bark for tanning",
    conservation_status: "NT",
    flowering_period: "March to June",
    fruiting_period: "September to December",
    images: ["https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"],
    is_endemic: false,
    description: "A large deciduous tree renowned in Ayurveda for its heart-protective properties and used extensively in traditional medicine.",
    distribution: "Western Ghats and river valleys of Tamil Nadu",
    tags: ["medicinal", "timber", "riparian"]
  },
  {
    id: "4",
    scientific_name: "Shorea roxburghii",
    family: "Dipterocarpaceae", 
    tamil_name: "குண்டு (Kundu)",
    habitat: "Dense tropical forests, Western Ghats",
    uses: "Timber, resin extraction",
    conservation_status: "EN",
    flowering_period: "February to April",
    fruiting_period: "May to July",
    images: ["https://images.unsplash.com/photo-1472396961693-142e6e269027"],
    is_endemic: true,
    description: "An endangered endemic tree species found only in the Western Ghats, known for its valuable timber and resin.",
    distribution: "Western Ghats of Tamil Nadu - Nilgiris, Anamalai Hills",
    tags: ["endemic", "endangered", "timber"]
  },
  {
    id: "5",
    scientific_name: "Syzygium cumini",
    family: "Myrtaceae",
    tamil_name: "நாவல் (Naval)",
    habitat: "Moist deciduous forests, cultivated areas",
    uses: "Edible fruits, diabetes management, timber",
    conservation_status: "LC",
    flowering_period: "March to April",
    fruiting_period: "June to August",
    images: ["https://images.unsplash.com/photo-1466721591366-2d5fba72006d"],
    is_endemic: false,
    description: "The Indian Blackberry is valued for its purple fruits and medicinal properties, especially in managing diabetes.",
    distribution: "Throughout Tamil Nadu in forests and home gardens",
    tags: ["medicinal", "edible", "diabetes"]
  }
];

export const families = [
  "Fabaceae", "Combretaceae", "Dipterocarpaceae", "Myrtaceae", "Rubiaceae", 
  "Euphorbiaceae", "Moraceae", "Arecaceae", "Malvaceae", "Anacardiaceae"
];

export const conservationStatuses = [
  { value: "LC", label: "Least Concern" },
  { value: "NT", label: "Near Threatened" },
  { value: "VU", label: "Vulnerable" },
  { value: "EN", label: "Endangered" },
  { value: "CR", label: "Critically Endangered" },
  { value: "EW", label: "Extinct in Wild" },
  { value: "EX", label: "Extinct" },
  { value: "DD", label: "Data Deficient" }
];

export const habitats = [
  "Coastal areas",
  "Dense tropical forests", 
  "Deciduous forests",
  "Western Ghats",
  "River banks",
  "Urban areas",
  "Cultivated areas",
  "Grasslands",
  "Rocky terrain"
];
