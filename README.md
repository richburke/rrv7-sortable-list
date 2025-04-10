# Sort It Out
## A sortable list with dnd kit and React Router v7

Sortable lists are extremely useful and extremely common in web applications. Let's build one in [React Router](https://reactrouter.com/start/framework/installation). We'll use the powerful and popular [dnd kit](https://dndkit.com/), with a dash of [shadcn/ui](https://ui.shadcn.com/).

Here's a summary of what needs to be done:
* Update the [React Router config to use server-side rendering](https://github.com/richburke/rrv7-sortable-list/blob/master/sortable-list-app/react-router.config.ts).
    
* Create a [type to represent a sortable item](https://github.com/richburke/rrv7-sortable-list/blob/master/sortable-list-app/app/types/item.ts).
    
* Add a couple of [utility functions for finding an item in the list](https://github.com/richburke/rrv7-sortable-list/blob/master/sortable-list-app/app/lib/utils.ts).
    
* Create a [sortable card component](https://github.com/richburke/rrv7-sortable-list/blob/master/sortable-list-app/app/components/draggable-card.tsx).
    
* Create a component that will as a [container for the cards](https://github.com/richburke/rrv7-sortable-list/blob/master/sortable-list-app/app/components/sortable-region.tsx).
    
* Update the [Welcome page](https://github.com/richburke/rrv7-sortable-list/blob/master/sortable-list-app/app/welcome/welcome.tsx) to use our sortable container and cards.
    
Here are the relevant files:

* `react-router.config.ts`
    
* `app/types/item.ts`
    
* `app/lib/utils.ts`
    
* `app/components/draggable-card.tsx`
    
* `app/components/sortable-region.tsx`
    
* `app/welcome/welcome.tsx`