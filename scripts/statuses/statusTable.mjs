import {
    statusHeaders,
    statusListContainer,
    divineFavourListContainer
  } from "../globals/globalObjects.mjs";
  import { createSpellTable } from "../functions/tableFunctions.mjs";
  import { statuses, divineFavours } from "./statusObjects.mjs";
  import { summarize } from "../functions/helperFunctions.mjs";

  const summaryStatus = summarize(
    statusListContainer,
    "summary-status",
    "Statuses"
)

createSpellTable(
  document.getElementById(summaryStatus),
  "status-table",
  statuses,
  statusHeaders
);

const summaryDivineFavour = summarize(
  divineFavourListContainer,
  "summary-divine-favour",
  "Divine Favours"
)

createSpellTable(
document.getElementById(summaryDivineFavour),
"divine-favour-table",
divineFavours,
statusHeaders
);