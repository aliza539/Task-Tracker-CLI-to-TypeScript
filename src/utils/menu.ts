export function showMenu(): void {

  console.log(`


Commands:

add "task description" [priority]
update <id> "new description"
delete <id>
mark <id> done
list
search priority <value>
search date <YYYY-MM-DD>
sort priority [asc|desc]
sort date [asc|desc]
stats
help
`);
}