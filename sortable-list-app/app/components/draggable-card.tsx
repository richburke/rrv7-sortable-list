import type { HTMLProps } from "react";
import { useDraggable } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import type { Item } from "~/types/item";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

type DraggableCardType = Item & {
  className?: HTMLProps<HTMLElement>["className"];
};

export function DraggableCard({
  id,
  color,
  title,
  description,
  className,
}: DraggableCardType) {
  const { isDragging } = useDraggable({
    id: id,
  });
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn(
        className,
        "min-w-fit",
        `${isDragging ? "cursor-grabbing" : "cursor-grab"}`,
        color
      )}
    >
      <div className="flex items-center justify-start px-4 py-2 w-full">
        <GripIcon className="scale-100" />
        <div className="w-100">
          <CardHeader>
            <CardTitle className="leading-[1.3]">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-[1.2]">{description}</p>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
