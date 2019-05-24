import { Seq } from 'immutable'

import { represent } from '../common'

export function representKeyedSeq(fmt) {
    fmt.map(this, fmt => {
        fmt.entry_raw("lazy content")
    })
}
Seq.Keyed.prototype[represent] = representKeyedSeq

export function representIndexedSeq(fmt) {
    fmt.list(this, fmt => {
        fmt.entry_raw("lazy content")
    })
}
Seq.Indexed.prototype[represent] = representIndexedSeq


export function representSetSeq(fmt) {
    fmt.set(this, fmt => {
        fmt.entry_raw("lazy content")
    })
}
Seq.Set.prototype[represent] = representSetSeq
