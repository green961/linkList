export class ListNode {
  next: ListNode | undefined
  constructor(public val?: number) {}
}

const aa = push(1, 2, 4)
const ab = push(5, 6, 7)

export function str(l: ListNode | undefined) {
  const s = []
  while (l) {
    s.push(l.val)
    l = l.next
  }
  console.log(s.join('->'))
}

const mergeTwoLists = function (l1: ListNode | undefined, l2: ListNode | undefined) {
  const head = new ListNode()
  let cur = head
  while (l1 && l2) {
    if (l1.val! <= l2.val!) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }

    cur = cur.next
  }

  cur.next = l1 ? l1 : l2
  return head.next
}

let cc = mergeTwoLists(aa, ab)

export function push(...val: any[]) {
  let cur = new ListNode(val[0])
  const first = cur

  if (val.length > 1) {
    val.slice(1).forEach((i) => {
      cur = cur.next = new ListNode(i)
    })
  }

  return first
}
