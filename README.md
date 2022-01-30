# file-server-comparaison

Little benchmark used to compare express-static to other web server options

## To run

Dependencies:

- Docker
- hyperfine
- wget

Move a mp4 file named movie.mp4 in a directory named `public`

```bash
docker-compose up -d
./benchmark
```

## Result on Apple M1 with a 5MB file

```bash
Benchmark 1: wget http://localhost:3000/movie.mp4 # express
  Time (mean ± σ):     122.2 ms ±   7.6 ms    [User: 5.9 ms, System: 29.8 ms]
  Range (min … max):   110.0 ms … 136.5 ms    26 runs
 
Benchmark 2: wget http://localhost:3001/movie.mp4 # nginx
  Time (mean ± σ):     113.7 ms ±   6.3 ms    [User: 5.6 ms, System: 28.3 ms]
  Range (min … max):   105.9 ms … 126.6 ms    26 runs
 
Benchmark 3: wget http://localhost:3002/movie.mp4 # apache
  Time (mean ± σ):     115.1 ms ±   8.5 ms    [User: 5.3 ms, System: 27.8 ms]
  Range (min … max):   106.7 ms … 144.6 ms    20 runs
 
Summary
  'wget http://localhost:3001/movie.mp4 #nginx' ran
    1.01 ± 0.09 times faster than 'wget http://localhost:3002/movie.mp4 #apache'
    1.08 ± 0.09 times faster than 'wget http://localhost:3000/movie.mp4 #express'
```