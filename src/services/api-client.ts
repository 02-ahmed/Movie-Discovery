import axios from "axios";

const key = import.meta.env.DB_API_KEY;

const token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWI0Y2I3ZmVmNDlmOGUxN2YxZGE5NzM5ZDYzZWEzNyIsIm5iZiI6MTcyMDQ4Mjg4OC41NDQ2MTMsInN1YiI6IjY2OGIxYzk0YmFjMzBjMDA3MzgxMTExNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o6ZhbOMfBxoRpONbbj7AhS7h7PzcmHH8rCJ6fAdzuEc";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    key: key,
  },
  headers: {
    Authorization: token,
    Accept: "application/json",
  },
});
