import { ctx_ } from '@ctx-core/object'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { event_log__, event_log__add, event_log__set_limit } from '../index.js'
test('event_log__', ()=>{
	const ctx = ctx_()
	equal(event_log__(ctx).$, [])
	event_log__add(ctx, { msg: 'msg0' })
	equal(event_log__(ctx).$, [{ msg: 'msg0' }])
	event_log__add(ctx, { msg: 'msg1' })
	equal(event_log__(ctx).$, [{ msg: 'msg1' }, { msg: 'msg0' }])
	event_log__add(ctx, { msg: 'msg2' })
	equal(event_log__(ctx).$, [{ msg: 'msg2' }, { msg: 'msg1' }, { msg: 'msg0' }])
	event_log__set_limit(ctx, 2)
	equal(event_log__(ctx).$, [{ msg: 'msg2' }, { msg: 'msg1' }])
	event_log__add(ctx, { msg: 'msg3' })
	equal(event_log__(ctx).$, [{ msg: 'msg3' }, { msg: 'msg2' }])
})
test.run()
