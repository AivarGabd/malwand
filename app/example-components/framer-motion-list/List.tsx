'use client'
import { items } from "./data";
import ListCard from "./ListCard";


const List = ({
    selectedId,
    setId
}: any) => (
    <>
        <ul className="flex flex-wrap content-start;">
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