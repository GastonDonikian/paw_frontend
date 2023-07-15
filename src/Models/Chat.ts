export interface ChatModel {
    messages: Message []
}

export interface Message {
    date: string,
    message: string,
    authorUrl: string
}