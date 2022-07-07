# array-move-with-pivot

This is a simple javaScript utility function for moving objects in an array with a property as a rotation point called `pivot`.

This function is handy when dragging and rearrange objects on a table.

if array [1, 2, 3, 4] 
After dragging value 3 to position of value 1 
We have [3, 1, 2, 4] 

## Use Case

```
// I have an array of objects and I need to move objects
// in circular manner around a property of the objects.

type User = {
      id: number;
      name: string;
      position: number;
    }

const rawData: User[] = [
      { id: 11, name: "Ekene", position: 1},
      { id: 12, name: "Akunna", position: 2 },
      { id: 30, name: "Chidimna", position: 3 },
    ];

```

I want to move any user from one position to another
without altering the `position` property

```
// for example moving user at index 2 to 0

// expected result

    const newData = [
      { id: 30, name: "Chidimna", position: 1},
      { id: 11, name: "Ekene", position: 2 },
      {  id: 12, name: "Akunna", position: 3 },
    ];
```

### Usage

```
import moveArrayItemsWithPivot from 'array-move-with-pivot'

const rawData: User[] = [
      { id: 11, name: "Ekene", position: 1},
      { id: 12, name: "Akunna", position: 2 },
      { id: 30, name: "Chidimna", position: 3 },
    ];

const result = moveArrayItemsWithPivot(rawData,2,0,"position");

console.log(result) //  [{ id: 30, name: "Chidimna", position: 1}, { id: 11, name: "Ekene", position: 2 }, {  id: 12, name: "Akunna", position: 3 }];

```
#### Note
> It is not a named export, you can import it as anything e.g arrayMove, moveArrayItems, etc.