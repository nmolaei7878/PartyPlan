# **Thought Process**

## PlanSlice

a Plan object that will fill through the life cycle of creating a plan, purpose was to not modify the original plan Array and keep it untouched.

**how it works:**

- initially newPlan object is undefined
- next we create a dummy id and initialize all the properties with empty values
- after that we add user modifications step by step to it.
- in the end we have a full-filled Plan object that we can add to our plan Array.

## QAComponent:

I can tell 4 pages had the same structure
icon + question + answer and I use the same data structure and component for all of them.

## Outlet:

I used Outlet instead of conditional rendering due to the declarative syntax of Routes

## Todo:

in the todo route, I just pass an index prop
to simply access the array plan and show the todos of a plan.

first, I want to separate todos from plans
in a different slice but I just figured out we can`t access a slice in another slice.
in the end, todos are very tight to plans

# **Folder Structure**

- assets
  - icons
- componenets
  - layout
  - shared-ui
- core
  - constants
  - hooks
  - util
- pages
  - home
    - componenets
    - home.tsx
  - plan
    - componenets
    - plan.tsx
  - todo
    - componenets
    - todo.tsx
- redux
  - store.ts
  - plan-slice.ts
  - ui-slice.ts
- types
  - plan.d.ts
  - ...
