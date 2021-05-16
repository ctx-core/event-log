import { _b, assign } from '@ctx-core/object'
import { _readable_set_ctx, Readable } from '@ctx-core/store'
export function event_log_b(ctx:event_log_ctx_I) {
	return _b('event_log', ()=>{
		const $event_log:$event_log_T = []
		let limit = 10_000
		const { store: event_log, set } = _readable_set_ctx<$event_log_T>($event_log)
		return assign(event_log, {
			add,
			set_limit,
		}) as event_log_T
		function add(record:event_log_record_T) {
			$event_log.unshift(record)
			if ($event_log.length > limit) {
				$event_log.splice(limit)
			}
			set($event_log)
		}
		function set_limit(in_limit:number) {
			limit = in_limit
		}
	})(ctx)
}
export interface event_log_ctx_I {
	event_log?:event_log_T
}
export interface event_log_record_T<I extends any = any> extends Record<string, I> {}
export type $event_log_T = event_log_record_T[]
export type event_log_add_T = (record:event_log_record_T)=>$event_log_T
export type event_log_set_limit_T = (in_limit:number)=>void
export interface event_log_T extends Readable<$event_log_T> {
	add:event_log_add_T
	set_limit:event_log_set_limit_T
}
