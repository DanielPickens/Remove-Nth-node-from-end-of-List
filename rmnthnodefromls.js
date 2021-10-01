var removeNthFromEnd = function(head, n) {
  var current = head;
        if (n == 0) {
            return current;
        }
        let nth = head;
        var i = 0;
        let p = false;
        while (current != null) {
            if (n == i) {
                p = true;
            } else if (p) {
                nth = nth.next;
            }
            current = current.next;
            i++;
        }
        if (n == i) {
            return head.next;
        }
        if (p && nth != null) {
            if (nth.next.next == null) {
                nth.next = null;
            } else {
                nth.next = nth.next.next;
            }
        }
        return head;
    }



/*
Success
Details 
Runtime: 72 ms, faster than 91.65% of JavaScript online submissions for Remove Nth Node From End of List.
Memory Usage: 40.1 MB, less than 55.82% of JavaScript online submissions for Remove Nth Node From End of List.
*/
