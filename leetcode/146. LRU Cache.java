class Node {
    Node prev;
    Node next;
    int key;
    int val;
    public Node(int key, int val) {
        this.key = key;
        this.val = val;
    }
}

class LRUCache {
    // hashmap + double linked list
    Map<Integer, Node> map;
    int capa;
    Node head, tail;
    public LRUCache(int capacity) {
        capa = capacity;
        map = new HashMap<>();

        head = new Node(0, 0);
        tail = new Node(0, 0);
        head.next = tail;
        tail.prev = head;
    }
    
    public int get(int key) {
        if (map.get(key) == null) return -1;
        Node curr = map.get(key);

        // update the order of the current node -> put it to the front of the linked list
        removeNode(curr);
        addFirst(curr);

        return curr.val;
    }
    
    public void put(int key, int value) {
        // add key-value into first
        if (map.get(key) == null) {
            Node newNode = new Node(key, value);
            addFirst(newNode);
            map.put(key, newNode);
        } else {
            Node curr = map.get(key);
            curr.val = value;
            removeNode(curr);
            addFirst(curr);
        }
        // then delete if out of capacity
        if (map.size() > capa) {
            Node last = removeNode(tail.prev);
            map.remove(last.key);
        }
    }

    private void addFirst(Node node) {
        node.prev = head;
        node.next = head.next;
        head.next.prev = node;
        head.next = node;
    }
    private Node removeNode(Node node) {
        Node prev = node.prev;
        Node next = node.next;
        prev.next = next;
        next.prev = prev;
        return node;
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */