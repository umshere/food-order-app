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
package "Food Order App" {
    frame "Home Page" as Home {
        component Header
        component Meals
    }

    frame "Cart Page" as Cart {
        component CartItem
    }

    frame "Checkout Page" as Checkout {
        component Input
        component Modal
    }

    Home --> Cart : HeaderCartButton triggers
    Cart --> Checkout : Proceed to Checkout
    Meals --> MealItem : Contains
    MealItem --> MealItemForm : Contains
    Checkout --> Input : Uses
    Checkout --> Modal : Uses
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
