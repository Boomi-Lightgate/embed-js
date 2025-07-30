// Generic single filter
export default function queryFilter<T>(
  property: string,
  operator: string,
  values: string[]
): T {
  if (values.length === 0) {
    throw new Error("Values array cannot be empty.");
  }
  for (const value of values) {
    if (typeof value !== "string") {
      throw new Error("All values must be strings.");
    }
  }
  const expression = {
    operator,
    property,
    argument: values,
  };

  return {
    QueryFilter: { expression },
  } as T;
}

// Generic nested filter with AND/OR logic
export function nestedQueryFilter<T>(
  filters: { property: string; operator: string; value: string | string[] }[],
  logicalOperator: "and" | "or" = "and"
): T {
  const nestedExpression = filters.map((f) => ({
    operator: f.operator,
    property: f.property,
    argument: Array.isArray(f.value) ? f.value : [f.value],
  }));

  return {
    QueryFilter: {
      expression: {
        operator: logicalOperator,
        nestedExpression,
      },
    },
  } as T;
}

// Generic bulk filter
export function bulkFilter<T>(
  type: string,
  requestValues: string[]
): T {
  if (requestValues.length === 0) {
    throw new Error("Request values array cannot be empty.");
  }
  return {
    type,
    request: requestValues.map((id) => ({ id })),
  } as T;
}


