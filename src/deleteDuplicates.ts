import { push, ListNode } from './linkList.js'
// 示例 1:
// 输入: 1->2->3->3->4->4->5
const a1 = push(1, 2, 3, 3, 4, 4, 5)
// 输出: 1->2->5

// 示例 2:
// 输入: 1->1->1->2->3
const a2 = push(1, 1, 1, 2, 3)
// 输出: 2->3

const deleteDuplicates = function (L: ListNode) {
  const head = new ListNode()
  let cur = head
  let repeat = false

  while (L.next) {
    if (L.val === L.next.val) repeat = true
    else {
      if (!repeat) {
        cur.next = L
        cur = cur.next
      } else repeat = false
    }
    L = L.next
  }

  if (!repeat) cur.next = L
  return head.next
}

let ee = deleteDuplicates(push(1, 1, 1, 2, 2))
let eg = deleteDuplicates(push(1, 1, 1, 2, 2, 3))
let k1 = deleteDuplicates(a1)
let k2 = deleteDuplicates(a2)

console.log()
