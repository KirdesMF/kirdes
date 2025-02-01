---
title: Composition vs Props
description: A comparison of composition and props.
date: 2025-01-31
author: Cédric Gourville
---

## Composition vs Props

Composition is a way to build components by composing them together. Props are a way to pass data to a component.

```tsx
function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return <button onClick={onClick}>{children}</button>;
}
```
