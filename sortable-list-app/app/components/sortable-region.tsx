import { useState } from "react";
import { closestCenter, DndContext, DragOverlay } from "@dnd-kit/core";
import type { DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { DraggableCard } from "~/components/draggable-card";
import { getById, isMatchForId } from "~/lib/utils";
import type { Item } from "~/types/item";

export function SortableRegion({ initial_items }: { initial_items: Item[] }) {
  const [items, setItems] = useState<Item[]>(initial_items);
  const [activeId, setActiveId] = useState<number | null>(null);

  const getItem = getById(items);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) {
      setActiveId(null);
      return;
    }

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(isMatchForId(active.id));
        const newIndex = items.findIndex(isMatchForId(over.id));

        return arrayMove(items, oldIndex, newIndex);
      });
    }
    setActiveId(null);
  }

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id as number);
  }

  return (
    <div className="flex flex-col gap-4 rounded-lg p-4 border">
      <DndContext
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((item) => {
            return (
              <DraggableCard
                key={item.id}
                {...item}
                className={item.id === activeId ? "opacity-30" : "opacity-100"}
              />
            );
          })}
        </SortableContext>

        <DragOverlay>
          {(() => {
            if (activeId) {
              const activeItem = getItem(activeId) as Item;
              if (activeItem) {
                return (
                  <DraggableCard
                    key={activeId}
                    {...activeItem}
                    className="opacity-75"
                  />
                );
              }
            }
            return null;
          })()}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
