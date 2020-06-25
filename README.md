# cronie

Simple tool for running cronjobs without crond.

## Table of contents

<!-- vim-markdown-toc GFM -->

* [Install](#install)
* [Usage](#usage)

<!-- vim-markdown-toc -->

## Install

```bash
npm global install cronie
```

## Usage

```bash
cronie run "* * * * *" curl google.com
```

