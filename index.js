function loadIssue() {
  let issue = {
    state: "closed",
    number: 5,
    created_at: "2018-03-31 16:23:13 UTC",
    body: "Instructions say GET /team and POST /newteam. Rspec wants GET/newteam and POST/team."
  }
  
  let template = Handlebars.compile(document.getElementByID("issue-template").innerHTML);
  let result = template(issue);
}
