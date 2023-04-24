import { items } from "./data";
import { memo } from "react";
import ListCard from "./ListCard";


const List = memo(
    ({
        selectedId,
        setId
    }: any) => (
        <>
            <div className="card-list">
                {items.map((item) => (
                    <>
                        <div
                            key={item.id}
                            className={`card`}
                            onClick={() => {
                                setId(item.id)
                            }}
                        >
                            <ListCard
                                key={item.id}
                                {...item}
                                isSelected={selectedId == item.id}
                            />
                        </div>
                    </>
                ))}
            </div>
        </>
    )
)

export default List