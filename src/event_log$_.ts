import { assign, be_ } from '@ctx-core/object'
import { ReadableAtom_, split_atom_ } from '@ctx-core/nanostores'
export const event_log$_ = be_<event_log$_T>('event_log$', ()=>{
	const event_log:event_log_T = []
	let limit = 10_000
	const [event_log$, set] = split_atom_<event_log_T>(event_log)
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
})
export interface event_log_record_T<I extends any = any> extends Record<string, I> {}
export type event_log_T = event_log_record_T[]
export type event_log_add_T = (record:event_log_record_T)=>event_log_T
export type event_log_set_limit_T = (in_limit:number)=>void
export interface event_log$_T extends ReadableAtom_<event_log_T> {
	add:event_log_add_T
	set_limit:event_log_set_limit_T
}
