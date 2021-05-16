import { Readable } from '@ctx-core/store';
export declare function event_log_b(ctx: event_log_ctx_I): event_log_T;
export interface event_log_ctx_I {
    event_log?: event_log_T;
}
export interface event_log_record_T<I extends any = any> extends Record<string, I> {
}
export declare type $event_log_T = event_log_record_T[];
export declare type event_log_add_T = (record: event_log_record_T) => $event_log_T;
export declare type event_log_set_limit_T = (in_limit: number) => void;
export interface event_log_T extends Readable<$event_log_T> {
    add: event_log_add_T;
    set_limit: event_log_set_limit_T;
}
