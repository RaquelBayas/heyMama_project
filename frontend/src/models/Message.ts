export interface Message {
  consult_id: number;
  message_id: number;
  message_text: string;
  message_time?: Date;
  professional_id: number;
  user_id: number;
}
