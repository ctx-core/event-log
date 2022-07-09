import { atom_, computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
const _event_log__ = be_('_event_log__', ()=>atom_([]))
export const event_log__ = be_('event_log__', ctx=>
	computed_([_event_log__(ctx), event_log_limit__(ctx)],
		(_event_log, event_log_limit)=>{
			if (_event_log?.length > event_log_limit) {
				_event_log.splice(event_log_limit)
			}
			return _event_log
		}))
const event_log_limit__ = be_('event_log_limit__',
	()=>atom_(10000))
export function event_log__add(ctx, record) {
	const _event_log = _event_log__(ctx).$
	_event_log.unshift(record)
	_event_log__(ctx).$ = _event_log
}
export function event_log__set_limit(ctx, limit) {
	event_log_limit__(ctx).$ = limit
}
export { event_log__ as event_log$_ }
