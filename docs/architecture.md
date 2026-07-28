# Architecture

```mermaid
flowchart LR
    P["Private candidate systems"] -. "not included" .-> R["Redaction / projection boundary"]
    S["Synthetic opportunities.ts"] --> A["Pure analytics"]
    A --> U["React command center"]
    U --> F["Local search and prioritization"]
    R -. "future authenticated adapter" .-> A
```

The public build is a zero-backend product slice. Static records make the UI reproducible and auditable, while pure analytics functions keep prioritization logic testable outside React.

