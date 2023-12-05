import { str, push, ListNode } from './linkList.js'

// 示例:
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

const reverseList = function (head: ListNode) {
  let pre

  let cur: ListNode | undefined = head
  while (cur) {
    let next: ListNode | undefined = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}

let k2 = reverseList(push(1, 2, 3, 4, 5))

str(k2)

console.log()

// const a1 = push(1, 2, 3, 4, 5)
// let k1 = fuck(a1, 1)
// let k3 = fuck(push(1, 2, 3, 4, 5), 3)
// let k4 = fuck(push(1, 2, 3, 4, 5), 4)
// let k5 = fuck(push(1, 2, 3, 4, 5), 5)

// console.log()
