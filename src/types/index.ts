type Sprites = {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    other: {
      dream_world: {
        front_default: string;
      }
      'official-artwork': {
        front_default: string;
      }
    }
  }
  
  type Type = {
    slot: number;
    type: {
      name: string;
      url: string;
    }
  }
  
  type Stat = {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    }
  }
  
  type Ability = {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }
  
  type Language = {
    name: string;
    url: string;
  }
  
  type Name = {
    language: Language;
    name: string;
  }
  
  type Color = {
    name: string;
    url: string;
  }
  
  type Version = {
    name: string;
    url: string;
  }
  
  type FlavorTextEntry = {
    flavor_text: string;
    language: Language;
    version: Version;
  }
  
  type GrowthRate = {
    name: string;
    url: string;
  }
  
  type EffectEntry = {
    effect: string;
    language: Language;
    short_effect: string;
  }
  
  type SimplePokemonInfo = {
    name: string;
    url: string;
  }
  
  type DamageRelation = {
    double_damage_from: Array<{ name: string, url: string }>;
    double_damage_to: Array<{ name: string, url: string }>;
    half_damage_from: Array<{ name: string, url: string }>;
    half_damage_to: Array<{ name: string, url: string }>;
  }
  
  type EvolutionDetail = {
    min_level: number;
    trigger: {
      name: string;
      url: string;
    }
  }
  
  type Chain = {
    is_baby: boolean;
    evolution_details: Array<EvolutionDetail>;
    evolves_to: Array<EvolutionTo>;
    species: {
      name: string;
      url: string;
    }
  }
  
  type EvolutionTo = {
    evolution_details: Array<EvolutionDetail>;
    is_baby: boolean;
    evolves_to: Array<EvolutionTo>;
    species: {
      name: string;
      url: string;
    }
  }
  
  type ListResponse = {
    count: number;
    results: Array<SimplePokemonInfo>;
  }
  
  type PokemonResponse = {
    id: number;
    name: string;
    order: number;
    sprites: Sprites;
    base_experience: number;
    height: number;
    weight: number;
    stats: Array<Stat>;
    abilities: Array<Ability>;
    types: Array<Type>;
  }
  
  type SpeciesResponse = {
    id: number;
    name: string;
    order: number;
    names: Array<Name>;
    color: Color;
    flavor_text_entries: Array<FlavorTextEntry>;
    growth_rate: GrowthRate;
    gender_rate: number;
    is_legendary: boolean;
    is_mythical: boolean;
    evolution_chain: {
      url: string;
    }
  }
  
  type AbilityResponse = {
    id: number;
    name: string;
    names: Array<Name>;
    is_main_series: boolean;
    effect_entries: Array<EffectEntry>;
  }
  
  type TypeResponse = {
    id: number;
    name: string;
    damage_relations: DamageRelation;
  }
  
  type EvolutionChainResponse = {
    id: number;
    chain: Chain;
  }
