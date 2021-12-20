import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import PokemonInfo from "../components/PokemonInfo";
import Tabs from "../components/Tabs";
import useSpecies from "../hooks/useSpecies";

type Params = {
    id: string | undefined;
}

type Tab = 'about' | 'stats' | 'evolution';

const DetailPage: React.FC = () => {
    const { id } = useParams<Params>();
    const [selectedTab, setSelectedTab] = useState<Tab>('about');
    const speciesResult = useSpecies(id);
    const {
        color,
        growthRate,
        flavorText,
        genderRate,
        isLegendary,
        isMythical,
        evolutionChainUrl,
    } = useMemo(() => ({
        color: speciesResult.data?.data.color,
        growthRate: speciesResult.data?.data.growth_rate.name,
        flavorText: speciesResult.data?.data.flavor_text_entries[0].flavor_text,
        genderRate: speciesResult.data?.data.gender_rate,
        isLegendary: speciesResult.data?.data.is_legendary,
        isMythical: speciesResult.data?.data.is_mythical,
        evolutionChainUrl: speciesResult.data?.data.evolution_chain.url,
    }), [speciesResult])
    const handleClick = (tab: Tab) => {
        setSelectedTab(tab);
    }

    return (
        <div>
            <PokemonInfo />
            <Tabs tab={selectedTab} onClick={handleClick} color={{name:"red", url:""}} />
        </div>
    )
}

export default DetailPage;