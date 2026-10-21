#!/usr/bin/env sh

# https://lospec.com/palette-list/red-poster
grid="#000000"
black="#e8d6c0"
white="#92938d"
green="#a1281c"
blue="#a1281c"
red="#a1281c"

# corner radii
board_radius="0"
cell_radius="0"

# normalize each class rule to: .<class> { fill: #<hex> }
set_fill() {
  sed -i "s/^\(\s*\.$1\s*{\s*fill:\s*\).*$/\1$2 }/" */*.svg
}

set_fill grid "$grid"
set_fill white-cell "$white"
set_fill black-cell "$black"
set_fill green-cell "$green"
set_fill blue-cell "$blue"
set_fill red-cell "$red"

# normalize each class rule to: .<class> { ry: <value> }
set_ry() {
  sed -i "s/^\(\s*\.$1\s*{\s*ry:\s*\).*$/\1$2 }/" */*.svg
}

set_ry board "$board_radius"
set_ry cell "$cell_radius"
