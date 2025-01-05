# UI Flow Diagram

This document describes the UI flow of the Food Order App.

## Mermaid Diagram

```mermaid
flowchart TD
    Home[Home Page] -->|contains| Header
    Home -->|contains| Meals
    Meals -->|contains| MealItem
    MealItem -->|contains| MealItemForm
    Header -->|contains| HeaderCartButton
    HeaderCartButton -->|triggers| Cart
    Cart[Cart Page] -->|contains| CartItem
    Cart -->|contains| Checkout
    Checkout[Checkout Page] -->|uses| Input
    Checkout -->|uses| Modal

    classDef page fill:#f96,stroke:#333,stroke-width:4px;
    classDef component fill:#9cf,stroke:#333,stroke-width:2px;

    class Home page;
    class Cart page;
    class Checkout page;
    class Header component;
    class Meals component;
    class MealItem component;
    class MealItemForm component;
    class HeaderCartButton component;
    class CartItem component;
    class Input component;
    class Modal component;
```

## PlantUML Diagram

```plantuml
@startuml
' --- Some optional styling to mimic "page" vs. "component" colors ---
skinparam packageStyle rect
skinparam componentStyle rect

' Lighter orange for pages, lighter blue for components
skinparam frame {
    BackgroundColor #FFE5C2
    BorderColor #333
    BorderThickness 2
}
skinparam component {
    BackgroundColor #CCE5FF
    BorderColor #333
    BorderThickness 1
}

package "Food Order App" {

    ' --- HOME PAGE ---
    frame "Home Page" as Home {
        component "Header" as Header
        component "Meals" as Meals
        component "MealItem" as MealItem
        component "MealItemForm" as MealItemForm
        component "HeaderCartButton" as HeaderCartButton
    }

    ' --- CART PAGE ---
    frame "Cart Page" as Cart {
        component "CartItem" as CartItem
    }

    ' --- CHECKOUT PAGE ---
    frame "Checkout Page" as Checkout {
        component "Input" as Input
        component "Modal" as Modal
    }

    ' --- RELATIONSHIPS ---
    ' Show "contains" for the UI structure
    Home --> Header : contains
    Home --> Meals : contains
    Meals --> MealItem : contains
    MealItem --> MealItemForm : contains
    Header --> HeaderCartButton : contains

    ' Show "triggers" from the HeaderCartButton to Cart
    HeaderCartButton --> Cart : triggers

    ' Cart to Checkout
    Cart --> CartItem : contains
    Cart --> Checkout : Proceed to Checkout

    ' Checkout uses Input and Modal
    Checkout --> Input : uses
    Checkout --> Modal : uses
}
@enduml

```

## Standard Practices for UI Flow Documentation

1. **Mermaid/PlantUML**: Text-based diagrams that can be version controlled
2. **Wireframes**: Visual page layouts showing component placement
3. **User Journey Maps**: Show user interactions and touchpoints
4. **Flowchart.js**: Interactive JavaScript-based flowcharts
5. **Graphviz**: Powerful graph visualization for complex flows
6. **Sequence Diagrams**: Show interactions between components over time
7. **Prototyping Tools**: Figma, Adobe XD for interactive mockups
8. **Storybook**: Component documentation with live examples
