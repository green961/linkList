import { push, ListNode } from './linkList.js'

// 示例： 给定一个链表: 1->2->3->4->5, 和 n = 2.
// 当删除了倒数第二个结点后，链表变为 1->2->3->5.
// 说明： 给定的 n 保证是有效的。

const removeNthFromEnd = function (head: ListNode, n: number) {
  const dummy = new ListNode()
  dummy.next = head
  let fast = dummy
  let slow = dummy

  while (n--) {
    fast = fast.next!
  }

  while (fast.next) {
    fast = fast.next
    slow = slow.next!
  }

  slow.next = slow.next!.next
  return dummy.next
}

let k1 = removeNthFromEnd(push(1, 2, 3, 4, 5), 1)
let k2 = removeNthFromEnd(push(1, 2, 3, 4, 5), 2)
let k3 = removeNthFromEnd(push(1, 2, 3, 4, 5), 3)
let k4 = removeNthFromEnd(push(1, 2, 3, 4, 5), 4)
let k5 = removeNthFromEnd(push(1, 2, 3, 4, 5), 5)

// const a1 = push(1, 2, 3, 4, 5)
// let k1 = removeNthFromEnd(a1, 1)
// let k2 = removeNthFromEnd(a1, 2)
// let k3 = removeNthFromEnd(a1, 3)
// let k4 = removeNthFromEnd(a1, 4)
// let k5 = removeNthFromEnd(a1, 5)

console.log()
