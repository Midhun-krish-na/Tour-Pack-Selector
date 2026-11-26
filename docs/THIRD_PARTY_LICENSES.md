# Third-Party Licences and Notices

## 1. Overview

This document identifies third-party software and external resources used by the Travel Package Selector template.

The project uses open-source dependencies and externally hosted sample travel photographs. These resources retain their respective licence and usage terms.

This document is an informational record, not legal advice.

## 2. Software Dependencies

The project uses the following direct dependencies:

| Package | Version | Licence |
|---|---:|---|
| React | 19.3.1 | MIT |
| React DOM | 19.3.1 | MIT |
| React Router DOM | 7.18.6 | MIT |
| Tailwind CSS | 4.3.5 | MIT |
| @tailwindcss/vite | 4.3.5 | MIT |
| Vite | 8.3.8 | MIT |
| @vitejs/plugin-react | 6.3.0 | MIT |
| oxlint | 1.95.0 | MIT |
| @types/react | 19.3.0 | MIT |
| @types/react-dom | 19.3.0 | MIT |

Versions refer to the audited dependency snapshot. The package lockfile is the source of truth for the exact installed dependency tree.

## 3. Transitive Dependency Licence Summary

The audited `package-lock.json` snapshot contained 110 dependency entries with licence metadata.

| Licence identifier | Number of entries |
|---|---:|
| MIT | 92 |
| MPL-2.0 | 12 |
| 0BSD | 2 |
| Apache-2.0 | 1 |
| BlueOak-1.0.0 | 1 |
| ISC | 1 |
| BSD-3-Clause | 1 |
| **Total** | **110** |

This is a metadata-based inventory. It does not replace reviewing the actual licence and notice files distributed with each dependency.

### Important: Mozilla Public License 2.0

Some transitive dependencies use the Mozilla Public License 2.0 (MPL-2.0).

MPL-2.0 is a file-level copyleft licence. If you modify and distribute files covered by it, you may have obligations to make the corresponding source available under the licence terms.

Do not remove applicable copyright notices or licence notices.

## 4. Sample Image Assets

The sample package data references six photographs hosted on Wikimedia Commons.

The individual image records identify five photographs as Creative Commons CC0 1.0 and one photograph as Public Domain.

| Image | Creator | Copyright status |
|---|---|---|
| Lake Mountain Landscape | Bonnie Moreland | CC0 1.0 |
| Tropical Beach | Brodie Vissers | CC0 1.0 |
| Waterfall in Forest | Martin Eklund | CC0 1.0 |
| Schönbrunn Palace | Truete | CC0 1.0 |
| Rocky Coastal Cliff | Holly's Coastal View | CC0 1.0 |
| Singapore Cityscape | Andrew McMillan | Public Domain |

Individual source pages, licence references and creator information are recorded in:

`docs/ASSET_ATTRIBUTIONS.md`

General licence reference for CC0:

https://creativecommons.org/publicdomain/zero/1.0/

The photographs are referenced through external URLs in `src/data/packages.json`. They are not currently bundled as local image files.

External hosting, availability and URL behaviour are controlled by the hosting provider. Buyers should consider downloading and hosting approved images themselves if they require long-term control over image availability.

## 5. Icons, Fonts and Other Assets

Before redistributing the template, review the source and public asset directories for any third-party icons, fonts, illustrations or other assets.

Retain applicable copyright and licence notices for any assets that are kept.

Do not assume that an asset is free to redistribute simply because it is publicly accessible.

## 6. Buyer Responsibilities

When customizing or deploying this template, buyers are responsible for:

- Reviewing the licences of any additional packages they install.
- Retaining required copyright and licence notices.
- Checking the usage rights of images, fonts, icons and other assets they add.
- Reviewing external service terms before using third-party resources.
- Complying with applicable open-source licence obligations when distributing modified software.
- Reviewing separate rights that may apply to people, trademarks, logos or property depicted in images.

## 7. Licence References

- MIT License: https://opensource.org/license/mit
- Mozilla Public License 2.0: https://www.mozilla.org/en-US/MPL/2.0/
- Apache License 2.0: https://www.apache.org/licenses/LICENSE-2.0
- BSD 3-Clause License: https://opensource.org/license/bsd-3-clause
- ISC License: https://opensource.org/license/isc-license-txt
- Zero-Clause BSD: https://opensource.org/license/0bsd
- Blue Oak Model License: https://blueoakcouncil.org/license/1.0.0
- Creative Commons CC0 1.0: https://creativecommons.org/publicdomain/zero/1.0/

## 8. Maintenance

This document reflects an audited dependency snapshot and the sample assets currently identified.

Whenever dependencies or assets change:

1. Review the updated dependency lockfile.
2. Recheck licence metadata and relevant licence files.
3. Review newly added images, fonts, icons and other assets.
4. Update `docs/ASSET_ATTRIBUTIONS.md` when image inventory changes.
5. Update this document when the inventory changes.

The licence inventory should be checked again before each commercial release.

---

**Document purpose:** Third-party software and asset licence information.

**Project:** Travel Package Selector

**Publisher:** CRYCIOUS

**Status:** Informational — review before commercial distribution.