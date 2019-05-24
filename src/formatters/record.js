import { Record } from 'immutable'

import { represent } from '../common'

export function representRecord(fmt) {
    fmt.struct(this, fmt => {
        for (const [key, value] of this) {
            fmt.field(key, value)
        }
    })
}
Record.prototype[represent] = representRecord
