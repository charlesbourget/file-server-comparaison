#!/bin/bash

set -e

mkdir -p out
pushd out

hyperfine --warmup 10 "wget http://localhost:3000/movie.mp4 #express" "wget http://localhost:3001/movie.mp4 #nginx" "wget http://localhost:3002/movie.mp4 #apache"
popd

rm -r out