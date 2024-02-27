import { CSV } from "https://js.sabae.cc/CSV.js";

const list = await CSV.fetchJSON("opendata-list.csv");
for (const item of list) {
  console.log(item);
  const fn = item.url.substring(item.url.lastIndexOf("/") + 1);
  console.log(fn);
  list.fn = fn;
  const data = await CSV.fetchJSON(item.url);
  await Deno.writeTextFile("data/" + fn, CSV.stringify(data));
}
