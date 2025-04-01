import { arcaneHeaders, darkSpellListContainer } from "../globals/globalObjects.mjs";
import darkSpells from "./darkSpellObjects.mjs";
import { createSpellTable } from "../functions/tableFunctions.mjs";
import { summarize } from "../functions/helperFunctions.mjs";

const summaryDark = summarize(
    darkSpellListContainer,
    "summary-dark-spells",
    "Dark Spells"
)

createSpellTable(
  document.getElementById(summaryDark),
  "dark-spells-table",
  darkSpells,
  arcaneHeaders
);