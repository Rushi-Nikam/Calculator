let arr = [
  {
    data: [
      {
        email: "abc",
      },
    ],
  },
  {
    data: [
      {
        email: "abcs",
      },
    ],
  },
  {
    data: [
      {
        email: "abce",
      },
    ],
  },
];

function search(arr, email) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].data.length; j++) {
      if (arr[i].data[j].email == email) {
        console.log(`Email ${email} found index ${i}`);
      }
    }
  }
  return `Email ${email} not found  `;
}
let e = "abcs";
search(arr,e)
