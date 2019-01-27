export const STORY_ONE_RECEIVE_NEWS = 'STORY_ONE_RECEIVE_NEWS';

export function storyOneReceiveNews(news) {
    return {
        type: STORY_ONE_RECEIVE_NEWS,
        news
    }
}