import { str, push, ListNode } from './linkList.js'

// 示例:
// 输入: 1->2->3->4->5->NULL, m = 2, n = 4
let k2 = reverseBetween(push(1, 2, 3, 4, 5), 2, 4)
str(k2)
// 输出: 1->4->3->2->5->NULL

const reverseBetweec = function (head: ListNode, m: number, n: number) {
  let pre, cur, leftHead
  const dummy = new ListNode()
  dummy.next = head
  let p = dummy

  for (let i = 0; i < m - 1; i++) {
    p = p.next
  }

  leftHead = p
  let start = leftHead.next
  pre = start
  cur = pre.next

  for (let i = m; i < n; i++) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  leftHead.next = pre
  start.next = cur
  return dummy.next
}

function reverseBetween(cur: ListNode, m: number, n: number) {
  let pre: ListNode
  let middleStart: ListNode
  let tail: ListNode
  let i = 1

  while (i < m) {
    i++
    if (i === m) pre = cur
    cur = cur.next!
  }

  middleStart = cur
  tail = middleStart

  while (i <= n) {
    i++
    tail = tail.next!
  }
  let middle = reverse(middleStart, tail)
  pre!.next = middle
  return pre!
}

function reverse(middle: ListNode, tail: ListNode) {
  let pre = tail

  let cur = middle
  while (cur !== tail) {
    let next: ListNode | undefined = cur.next
    cur.next = pre
    pre = cur
    cur = next!
  }
  return pre
}
