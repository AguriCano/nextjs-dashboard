# patch_customer_suspense_steps

## Objetivo

Eliminar el error de Next durante prerender en `/dashboard/customers`:

> useSearchParams() should be wrapped in a suspense boundary at page "/dashboard/customers"

## Solución recomendada

1. Asegurar que el componente que usa `useSearchParams` (`app/ui/search.tsx`) esté renderizado dentro de un Suspense boundary.
2. Como `CustomersTable` es async (server component por default) y mete `<Search />` (client), envolver el `<Search />` con `<Suspense fallback={...}>` en `app/ui/customers/table.tsx`.

## Cambios necesarios (a aplicar)

- `app/ui/customers/table.tsx`
  - Importar `Suspense` desde `react`.
  - Envolver `<Search ... />` dentro de `<Suspense fallback={...}>`.
