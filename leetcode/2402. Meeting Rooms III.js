function mostBooked(n, meetings) {
    // O(nlogn)
    meetings.sort((a, b) => a[0] - b[0]);
    const counts = Array(n).fill(0);
    // rooms ongoing [roomIndex, roomEndTime]
    const ongoing = new PriorityQueue({compare: (a, b) => {
        if (a[1] != b[1]) return a[1] - b[1];
        else return a[0] - b[0];
    }});
    // rooms available
    const available = new PriorityQueue({compare: (a, b) => a - b});
    // O(nlogn)
    for (let i = 0; i < n; i++) available.enqueue(i);

    // O(meetings * nlogn)
    for (let [start, end] of meetings) {
        while (ongoing.size() > 0 && ongoing.front()[1] <= start) {
            const [room] = ongoing.dequeue();
            available.enqueue(room);
        }

        if (available.size() > 0) {
            const room = available.dequeue();
            ongoing.enqueue([room, end]);
            counts[room]++;
        } else {
            const [room, endTime] = ongoing.dequeue();
            ongoing.enqueue([room, endTime + (end - start)]);
            counts[room]++;
        }
    }

    let maxCount = 0, maxIndex = 0;
    for (let i = 0; i < n; i++) {
        if (maxCount < counts[i]) {
            maxCount = counts[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}

function mostBooked2(n, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);
    const rooms = Array(n).fill(0);
    const count = Array(n).fill(0);
    let time = 0;
    let curr = 0; // index of meetings
    while (curr < meetings.length) {
        let nextTime = time + 1;
        for (let i = 0; i < n; i++) {
            if (time >= rooms[i] && (curr < meetings.length && meetings[curr][0] <= time)) {
                rooms[i] = time + (meetings[curr][1] - meetings[curr][0]);
                count[i]++;
                curr++;
            }
            if (rooms[i] > time) nextTime = Math.min(nextTime, rooms[i]);
        }
        time = nextTime;
    }
    let maxCount = 0, maxIndex = 0;
    for (let i = 0; i < n; i++) {
        if (maxCount < count[i]) {
            maxCount = count[i];
            maxIndex = i;
        }
    }
    return maxIndex;
};