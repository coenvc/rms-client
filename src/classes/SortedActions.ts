import { Action } from 'classes/Action';

export class SortedActions {
    public remainder: Action[];
    public thisMonth: Action[];
    public thisWeek: Action[];
    public today: Action[];

    constructor(remainder?: Action[], thisMonth?: Action[], thisWeek?: Action[], today?: Action[]) {
        this.remainder = remainder;
        this.thisMonth = thisMonth;
        this.thisWeek = thisWeek;
        this.today = today;
    }
}
