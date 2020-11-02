import { GithubComment, GithubEvent, GithubIssue } from "./github-events.model";
import axios from "axios";
import { useQuery } from "react-query";

export function useGithubIssueComments(user: string, repo: string) {
    const url = `https://api.github.com/networks/${user}/${repo}/events?per_page=100`;

    return useQuery<GithubIssue[], Error>(url, () =>
        axios.get(url).then((res) => mapResult(res.data))
    );
}

export function mapResult(data: GithubEvent[]): GithubIssue[] {
    const issuesMap = new Map<number, GithubIssue>();

    data.filter((event) => event.type === "IssueCommentEvent").forEach(
        (event) => {
            if (!issuesMap.has(event.payload.issue.id)) {
                const issue: GithubIssue = {
                    id: event.payload.issue.id,
                    created_at: event.payload.issue.created_at,
                    user: {
                        id: event.payload.issue.user.id,
                        login: event.payload.issue.user.login,
                    },
                    title: event.payload.issue.title,
                    body: event.payload.issue.body,
                    comments: [],
                };

                issuesMap.set(event.payload.issue.id, issue);
            }

            const comment: GithubComment = {
                id: event.payload.comment.id,
                created_at: event.payload.comment.created_at,
                body: event.payload.comment.body,
                user: {
                    id: event.payload.comment.user.id,
                    login: event.payload.comment.user.login,
                },
            };

            issuesMap.get(event.payload.issue.id)?.comments.push(comment);
        }
    );

    return Array.from(issuesMap.values());
}
