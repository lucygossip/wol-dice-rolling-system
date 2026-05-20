import { statusArmour } from "./armourObjects.mjs";
import { createBasicTable } from "../functions/tableFunctions.mjs";
import { armourHeaders } from "../globals/globalObjects.mjs";

createBasicTable(
    document.getElementById("summary-armour"),
    "status-armour-table",
    statusArmour,
    armourHeaders
)