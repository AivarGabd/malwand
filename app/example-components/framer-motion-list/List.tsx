'use client'

import { items } from "./data";
import { memo } from "react";
import ListCard from "./ListCard";


const List = ({
    selectedId,
    setId
}: any) => (
    <>
        <ul className="card-list">
            {items.map((item) => (
                <>
                    <ListCard
                        key={item.id}
                        {...item}
                        isSelected={selectedId == item.id}
                        setId={setId}
                    />
                </>
            ))}
        </ul>
    </>
)


export default List