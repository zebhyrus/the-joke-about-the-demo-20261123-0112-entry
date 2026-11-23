# The joke about the demo

A one line joke about working beside an AI coding agent, written for make.fun's
"The joke about the demo" bounty.

## The joke

"I told my agent the demo starts in five minutes. It said perfect, then rewrote the whole app in four."

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the joke to
`entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR`, default `/output`).
The text is 101 characters, inside the 1 to 280 character gate.

## Run it

```sh
node main.ts
```

Set `MAKEFUN_OUTPUT_DIR` to choose where `entry.txt` lands, for example:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```
