export default defineEventHandler(async (event) => {
  return sendRedirect(
    event,
    'https://docs.google.com/document/d/1pQ8blqNnu6Y1-KNlz5wQEzd1jDXvqBFi/edit?usp=sharing&ouid=112065652704463664737&rtpof=true&sd=true',
    302
  );
})
