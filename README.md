# sigmod-past-conf

Archived copies of past ACM SIGMOD/PODS conference websites, kept so they stay
online after the conference sites themselves go away. The SIGMOD/PODS
conferences page on [www.sigmod.org](https://www.sigmod.org/conferences/) links
to these copies ("Local Mirror").

Published on GitHub Pages at https://sigmod-org.github.io/sigmod-past-conf/.

## Layout

One folder per conference, `sigmodYYYY/`, using the folder names of the
original sigmod.org mirrors (`sigmod.org/publications/pastconf/sigmodYYYY/`).
Inside each folder the files keep their original names and paths, so the
sites work as they did.

| Folder | Source |
|---|---|
| `sigmod2000`, `sigmod2002`–`sigmod2010` | The mirrors at sigmod.org/publications/pastconf/ |
| `sigmod2001` | Wayback Machine copy of www.cs.ucsb.edu/Conferences/sigmod2001/ |
| `sigmod2011` | Wayback Machine copy of www.sigmod2011.org |
| `sigmod2012`, `sigmod2013` | The copies at sigmod.org/2012/ and sigmod.org/2013/ |
| `sigmod2014`–`sigmod2020` | Downloaded from the live www.sigmodYYYY.org sites |

The files are kept as they were downloaded, with two exceptions: saved
"Not Found" error pages were removed, and the 2019 site (Drupal) was saved with
`.html` extensions and relative links so it works as static files. Some
files were already missing on the original sites, so a few images and links
in the copies are broken.

## Viewing locally

```bash
python3 -m http.server 8082
```

Then open http://localhost:8082/. (`.shtml` pages download instead of
opening unless the server sends them as `text/html`; GitHub Pages does.)
