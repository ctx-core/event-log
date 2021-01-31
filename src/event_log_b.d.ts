import { Readable } from '@ctx-core/store';
export declare function event_log_b(ctx: any): event_log_type;
export interface event_log_record_type<I extends any = any> extends Record<string, I> {
}
export declare type $event_log_type = event_log_record_type[];
export declare type event_log_add_type = (record: event_log_record_type) => $event_log_type;
export declare type event_log_set_limit_type = (in_limit: number) => void;
export interface event_log_type extends Readable<$event_log_type> {
    add: event_log_add_type;
    set_limit: event_log_set_limit_type;
}
