// Type definitions for ag-grid v7.0.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
import { Column } from "../entities/column";
import { OriginalColumnGroupChild } from "../entities/originalColumnGroupChild";
import { GroupInstanceIdCreator } from "./groupInstanceIdCreator";
import { ColumnGroupChild } from "../entities/columnGroupChild";
export declare class DisplayedGroupCreator {
    private columnUtils;
    createDisplayedGroups(sortedVisibleColumns: Column[], balancedColumnTree: OriginalColumnGroupChild[], groupInstanceIdCreator: GroupInstanceIdCreator): ColumnGroupChild[];
    private setupParentsIntoColumns(columnsOrGroups, parent);
    private createFakePath(balancedColumnTree);
    private getOriginalPathForColumn(balancedColumnTree, column);
}
