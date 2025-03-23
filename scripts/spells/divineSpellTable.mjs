import { divineHeaders, divineSpellListContainer } from "../globals/globalObjects.mjs";
import divineSpells from "./divineSpellObjects.mjs";
import { createSpellTable } from "../functions/tableFunctions.mjs";
import { summarize } from "../functions/helperFunctions.mjs";

const summaryDark = summarize(
    divineSpellListContainer,
    "summary-divine-spells",
    "Divine Spells"
)

createSpellTable(
  document.getElementById(summaryDark),
  "divine-spells-table-dark",
  divineSpells,
  divineHeaders
);

document.getElementById("divine-spells-table-dark").classList.add("divine-spells");