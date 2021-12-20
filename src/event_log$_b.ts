import { be_, assign, Ctx } from '@ctx-core/object'
import { split_atom$, ReadableAtom$ } from '@ctx-core/nanostores'
const key = 'event_log$'
export function event_log$_b(ctx:Ctx) {
	return be_<event_log$_T>(key, ()=>{
		const event_log:event_log_T = []
		let limit = 10_000
		const [event_log$, set] = split_atom$<event_log_T>(event_log)
		return assign(event_log$, {
			add,
			set_limit,
		}) as event_log$_T
		function add(record:event_log_record_T) {
			event_log.unshift(record)
			if (event_log.length > limit) {
				event_log.splice(limit)
			}
			set(event_log)
		}
		function set_limit(in_limit:number) {
			limit = in_limit
		}
	})(ctx)
}
export interface event_log_record_T<I extends any = any> extends Record<string, I> {}
export type event_log_T = event_log_record_T[]
export type event_log_add_T = (record:event_log_record_T)=>event_log_T
export type event_log_set_limit_T = (in_limit:number)=>void
export interface event_log$_T extends ReadableAtom$<event_log_T> {
	add:event_log_add_T
	set_limit:event_log_set_limit_T
}
