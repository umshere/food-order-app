# UI Flow Diagram

This document describes the UI flow of the Food Order App.

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

    classDef page fill:#f96,stroke:#333,stroke-width:4px
    classDef component fill:#9cf,stroke:#333,stroke-width:2px

    class Home, Cart, Checkout page
    class Header, Meals, MealItem, MealItemForm, HeaderCartButton, CartItem, Input, Modal component
```
