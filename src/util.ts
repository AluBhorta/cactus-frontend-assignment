import moment from "moment";

export function toMomentAgo(dateTimeStr: string) {
    return moment(dateTimeStr).fromNow();
}
