const section: string[] = ["account", "finance"];
const department: string[] = ["programmer", "marketing", "grafig"];
department.push(...section);

console.log(department);
