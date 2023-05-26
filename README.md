# [Live Demo](https://party-plan.vercel.app/home)

# **Changelog**

- **Responsive**
  - Desktop size got a route indicator
  - Other parts of the UI are responsive now
- **Test**
  - Added Some Unit Tests
- **Readme**
  - Readme got updated using the markup language

# **Thought Process**

## **PlanSlice**

initialState includes a `Array<Plan>` and a Plan object that will fill through the life cycle of creating a plan, purpose of having a single plan object was to not modify the original plan Array and keep it untouched.

**how it works:**

- initially newPlan object is undefined

```typescript
const plan: Plan | undefined = undefined;
```

- on add new plan we create a dummy id and initialize all the properties with empty values

```typescript
      state.newPlan = {
        id: action.payload,
        alcohol: "",
        etc ... }
```

- after that we add user modifications step by step to the same plan object.
- in the end we have a full-filled Plan object that we can add to our plan Array.

```typescript
state.plans.push(state.newPlan);
```

## **QAComponent**

I can tell 4 pages had the same structure
icon + question + answer and I use the same data structure and component for all of them.

## **Outlet**

I used Outlet instead of conditional rendering due to the declarative syntax of Routes

## **Todo**

in the todo route, I just pass an index prop
to simply access the array plan and show the todos of a plan.

first, I want to separate todos from plans
in a different slice but I just figured out we can`t access a slice in another slice.
in the end, todos were very tight and specific to the plans

# **Folder Structure**

```
src
 ┣ assets
 ┃ ┣ icons
 ┃ ┃
 ┣ components
 ┃ ┣ layout
 ┃ ┗ shared-ui
 ┃ ┃
 ┣ core
 ┃ ┣ constant
 ┃ ┣ hook
 ┃ ┗ util
 ┃ ┃
 ┣ pages
 ┃ ┣ Home
 ┃ ┃ ┣ test
 ┃ ┃ ┣ components
 ┃ ┃ ┗ home.tsx
 ┃ ┣ plan
 ┃ ┃ ┣ test
 ┃ ┃ ┣ components
 ┃ ┃ ┗ CreatePlan.tsx
 ┃ ┗ todo
 ┃ ┃ ┣ test
 ┃ ┃ ┣ components
 ┃ ┃ ┗ Todo.tsx
 ┃ ┃
 ┣ redux
 ┃ ┣ test
 ┃ ┃ ┣ plan-slice.test.ts
 ┃ ┃ ┗ ui-slice.test.ts
 ┃ ┣ slices
 ┃ ┃ ┣ plan-slice.ts
 ┃ ┃ ┗ ui-slice.ts
 ┃ ┃
 ┃ ┗ store.ts
 ┃ ┃
 ┣ types
 ┃ ┣ plan.d.ts
 ┃ ┣ etc ...
 ┃ ┃
 ┗ App.tsx
```

# **Screen Shots**

## **Mobile**

<img src="https://github.com/nmolaei7878/PartyPlan/assets/130120172/088265a2-84df-45c2-9ab1-9d3422386c4f"  width="250" height="450">
<img src="https://github.com/nmolaei7878/PartyPlan/assets/130120172/d4df4d23-87ae-4c53-86e0-f07aa28fb315"  width="250" height="450">
<img src="https://github.com/nmolaei7878/PartyPlan/assets/130120172/fb88da37-62d1-47a6-87c6-bebaaae4c946"  width="250" height="450">

## **Desktop**

<img src="https://github.com/nmolaei7878/PartyPlan/assets/130120172/439babda-0f54-4b7e-91cd-520dcc58b6c9"  width="650" height="350">

<img src="https://github.com/nmolaei7878/PartyPlan/assets/130120172/744cd13e-342b-434b-9628-c30793116ece"  width="650" height="350">

<img src="https://github.com/nmolaei7878/PartyPlan/assets/130120172/996108e4-b1bb-465e-9b52-3848eccc7807"  width="650" height="350">
