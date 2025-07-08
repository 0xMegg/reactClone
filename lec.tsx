function findUser(user: string | undefined): void {
  if (!user) return;
  console.log(`Find User: ${user}`);
}

const user = findUser("김아무개");
console.log(user);
