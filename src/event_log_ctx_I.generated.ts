import { _b } from '@ctx-core/object'
import type { B } from '@ctx-core/object'
import type { event_log_T } from './event_log_b'
import { event_log_b } from './event_log_b'
export interface event_log_ctx_I {
	event_log?:event_log_T
	event_log_b_h?:event_log_b_h_T
}
export interface event_log_b_h_T {
	get event_log():event_log_T
}
export function event_log_b_h_b(ctx:event_log_ctx_I):B<event_log_ctx_I, 'event_log_b_h'> {
	return _b('event_log_b_h', ()=>{
		return {
			get event_log() { return event_log_b(ctx) }
		}
	})
}