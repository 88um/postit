'use client';

import { useState } from "react";

interface FilterControlProps {

}

const FilterControl: React.FC<FilterControlProps> = ({}) => {
    const [filter, setFilter] = useState<PostFilter>("RECENT");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [flair, setFlair] = useState<string>("");
    return (
        <div>

        </div>
    );
    };

export default FilterControl;