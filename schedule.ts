Deno.cron("Hello", "* * * * *", () => {
  console.log("Hello world!"); // will run every second
});
