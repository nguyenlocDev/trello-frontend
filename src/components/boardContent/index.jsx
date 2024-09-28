import { Box } from "@mui/material";
import ListColumn from "./ListColumn";
import {
  DndContext,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
  closestCorners,
  pointerWithin,
  getFirstCollision,
  closestCenter,
} from "@dnd-kit/core";
import { useCallback, useEffect, useRef, useState } from "react";
import { mapOrder } from "~/utils/sort";
import { arrayMove } from "@dnd-kit/sortable";
import Column from "../column";
import Card from "../card";
import ListCard from "./ListCard";
import { cloneDeep, intersection, isEmpty } from "lodash";
export default function BoardContent({ board }) {
  // const pointer = useSensor(PointerSensor, {
  //   activationConstraint: {
  //     distance: 10,
  //   },
  // });
  const mouse = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 5,
    },
  });
  const touch = useSensor(TouchSensor, {
    activationConstraint: {
      scale: "1.5",
      delay: 100,
      tolerance: 250,
    },
  });
  const sensors = useSensors(touch, mouse);
  const type = {
    column: "type is column",
    card: "type is card",
  };
  const [oderedColumn, setOderedColumn] = useState([]);
  const [activeDragItemId, setActiveDragItemId] = useState(null);
  const [activeDragItemType, setActiveDragItemType] = useState(null);
  const [activeDragItemData, setActiveDragItemData] = useState(null);
  const lastOverId = useRef(null);
  const handleUpdeatCards = (
    overColumn,
    overCardId,
    active,
    activeDragingCardId,
    activeDragingCardData,
    activeColumn,
    over
  ) => {
    setOderedColumn((prevColumn) => {
      const overCardIndex = overColumn?.cards?.findIndex(
        (c) => c._id === overCardId
      );
      let newCardIndex;
      const isBelowOverItem =
        active.rect.current.translate &&
        active.rec.current.translate.top > over.rect.top + over.rect.height;
      const modifier = isBelowOverItem ? 1 : 0;

      newCardIndex =
        overCardIndex >= 0
          ? overCardIndex + modifier
          : overColumn?.cards?.length + 1;

      const updeatColumn = cloneDeep(prevColumn);

      const updeatActiveColumn = updeatColumn.find(
        (c) => c._id === activeColumn._id
      );
      const updeatOverColumn = updeatColumn.find(
        (c) => c._id === overColumn._id
      );
      if (updeatActiveColumn) {
        updeatActiveColumn.cards = updeatActiveColumn.cards.filter(
          (c) => c._id !== activeDragingCardId
        );

        if (isEmpty(updeatActiveColumn.cards)) {
          updeatActiveColumn.cardOrderIds = [`${overColumn._id} + fe`];
          updeatActiveColumn.cards = [
            {
              _id: `${overColumn._id} + fe`,
              boardId: overColumn.boardId,
              columnId: `${overColumn._id}`,
              FE: true,
            },
          ];
        }

        updeatActiveColumn.cardOrderIds = updeatActiveColumn.cards.map(
          (c) => c._id
        );
      }
      if (updeatOverColumn) {
        updeatOverColumn.cards = updeatOverColumn.cards.filter(
          (c) => c._id !== activeDragingCardId
        );
        updeatOverColumn.cards = updeatOverColumn.cards.toSpliced(
          newCardIndex,
          0,
          {
            ...activeDragingCardData,
            columnId: overColumn._id,
          }
        );
        updeatOverColumn.cards = updeatOverColumn.cards.filter(
          (cards) => !cards.FE
        );
        updeatOverColumn.cardOrderIds = updeatOverColumn.cards.map(
          (c) => c._id
        );
      }
      return updeatColumn;
    });
  };

  useEffect(() => {
    setOderedColumn(mapOrder(board?.columns, board?.columnOrderIds, "_id"));
  }, [board]);

  const findColumnByCardId = (cardId) => {
    return oderedColumn.find((c) => c.cards.map((i) => i._id).includes(cardId));
  };

  const handleDragOver = (event) => {
    if (activeDragItemType === type.column) return;
    const { active, over } = event;
    if (!active || !over) return;

    const {
      id: activeDragingCardId,
      data: { current: activeDragingCardData },
    } = active;
    const { id: overCardId } = over;

    const activeColumn = findColumnByCardId(activeDragingCardId);
    const overColumn = findColumnByCardId(overCardId);

    if (!activeColumn || !overColumn) return;

    if (activeColumn._id !== overColumn._id) {
      handleUpdeatCards(
        overColumn,
        overCardId,
        active,
        activeDragingCardId,
        activeDragingCardData,
        activeColumn,
        over
      );
    }
  };

  const hanleDrageStart = (event) => {
    setActiveDragItemId(event?.active?.id);
    setActiveDragItemType(
      event?.active?.data?.current?.columnId ? type.card : type.column
    );
    setActiveDragItemData(event?.active?.data?.current);
  };
  const handleDragEnd = (event) => {
    // console.log("🚀 ~ handleDragEnd ~ event:", event);
    const { active, over } = event;

    if (activeDragItemType === type.card) {
      ///handle card
      if (!active || !over) return;
      const {
        id: activeDragingCardId,
        data: { current: activeDragingCardData },
      } = active;
      const { id: overCardId } = over;

      const activeColumn = findColumnByCardId(activeDragingCardId);
      const overColumn = findColumnByCardId(overCardId);

      if (!activeColumn || !overColumn) {
        return;
      }

      if (activeDragItemData?.columnId === overColumn._id) {
        setOderedColumn((prevColumn) => {
          const activeIndex = activeColumn.cards?.findIndex(
            (index) => index._id === activeDragItemId
          );
          const overIndex = overColumn.cards.findIndex(
            (index) => index._id === overCardId
          );
          const dndOderedCards = arrayMove(
            activeColumn.cards,
            activeIndex,
            overIndex
          );
          const updeatCards = cloneDeep(prevColumn);
          const updeatActiveColumn = updeatCards.find(
            (c) => c._id === activeDragItemData.columnId
          );
          updeatActiveColumn.cards = dndOderedCards;
          updeatActiveColumn.cardOrderIds = updeatActiveColumn.cards.map(
            (i) => i._id
          );
          return updeatCards;
        });
      } else {
        handleUpdeatCards(
          overColumn,
          overCardId,
          active,
          activeDragingCardId,
          activeDragingCardData,
          activeColumn,
          over
        );
      }
    }

    if (activeDragItemType === type.column) {
      ///handle column
      if (!over) return;

      if (active.id !== over.id) {
        const activeIndex = oderedColumn.findIndex(
          (index) => index._id === active.id
        );
        const overIndex = oderedColumn.findIndex(
          (index) => index._id === over.id
        );
        const dndOderedColumns = arrayMove(
          oderedColumn,
          activeIndex,
          overIndex
        );

        setOderedColumn(dndOderedColumns);
      }

      // const dndOderedColumnIds = dndOderedColumns.map((i) => i._id);
      // updeat collumnIds api

      setActiveDragItemId(null);
      setActiveDragItemType(null);
      setActiveDragItemData(null);
    }
  };
  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };
  const collisionDetectionStrategy = useCallback(
    (args) => {
      if (activeDragItemType === type.column) {
        return closestCorners({ ...args });
      }

      const pointerIntersection = pointerWithin(args);

      if (!pointerIntersection?.length) return;

      let overId = getFirstCollision(pointerIntersection, "id");

      if (!overId) return;
      if (overId) {
        const checkcolumn = oderedColumn.find(
          (column) => column._id === overId
        );
        if (checkcolumn) {
          overId = closestCorners({
            ...args,
            droppableContainers: args.droppableContainers.filter(
              (cont) =>
                cont.id !== overId &&
                checkcolumn?.cardOrderIds?.includes(cont._id)
            ),
          })[0]?.id;
        }
        lastOverId.current = overId;

        return [{ id: overId }];
      }
      return lastOverId.current ? [{ id: lastOverId.current }] : [];
    },
    [activeDragItemType, oderedColumn]
  );
  return (
    <DndContext
      sensors={sensors}
      onDragStart={hanleDrageStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      collisionDetection={collisionDetectionStrategy}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "100%",
          height: (theme) =>
            `calc(100% - ${theme.trelloThemes.boardBar} - ${theme.trelloThemes.boardHeader})`,
          display: "flex",
          padding: "20px",
          overflowX: "auto",
          overflowY: "hidden",
        }}
      >
        <ListColumn columns={oderedColumn} />
        <DragOverlay dropAnimation={dropAnimation}>
          {!activeDragItemType && null}
          {activeDragItemType === type.column && (
            <Column columns={activeDragItemData}>
              <ListCard
                cards={activeDragItemData?.cards}
                columns={activeDragItemData}
              />
            </Column>
          )}
          {activeDragItemType === type.card && (
            <Card cards={activeDragItemData} />
          )}
        </DragOverlay>
      </Box>
    </DndContext>
  );
}
