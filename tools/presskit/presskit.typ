// vode press kit, A4. Rendered by tools/presskit/build.sh; texts and file lists
// come from src/data/pressKit.ts via export.mjs.
//   inputs: lang (de|en), data (path to data.json), repo (repo root)

#let lang = sys.inputs.at("lang", default: "de")
#let data = json(sys.inputs.data)
#let repo = sys.inputs.repo
#let k = data.texts.at(lang)

// ── Palette and measures ────────────────────────────────────────────────────
#let ink = rgb("#111111")
#let paper = rgb("#FAF8F5")
#let accent = rgb("#AE895D")
#let muted = rgb("#6B645C")
#let light = rgb("#F5F5F5")
#let hairline = 0.3mm + ink.transparentize(85%)
#let m = 18mm            // page margin
#let W = 210mm
#let H = 297mm
#let display = "NaN Spaceland"

// ── Assets ──────────────────────────────────────────────────────────────────
#let asset(path) = repo + "/public" + path
#let pdf-image(name) = repo + "/tools/presskit/images/" + name + ".jpg"
#let press(file, preview: false) = asset("/presse/fotos/" + file + if preview { "_vorschau" } else { "" } + ".jpg")
#let info(file) = data.photos.find(p => p.file == file)
#let aspect(file) = info(file).width / info(file).height
#let logo(tone) = asset("/presse/logos/vode-logo-" + if tone == "light" { "hell" } else { "dunkel" } + ".svg")

// Image filling a box like CSS `object-fit: cover`; x/y choose the crop (0–1).
#let cover(path, width, height, ratio, x: 0.5, y: 0.5) = block(width: width, height: height, clip: true, {
  if ratio > width / height {
    let w = height * ratio
    place(dx: -(w - width) * x, image(path, width: w, height: height))
  } else {
    let h = width / ratio
    place(dy: -(h - height) * y, image(path, width: width, height: h))
  }
})
#let fade(from, to, angle: 90deg) = gradient.linear(from, to, angle: angle)
#let credit(body, fill: light) = text(size: 6pt, fill: fill.transparentize(20%), body)
#let photo-credit(file, fill: light) = credit(fill: fill)[#k.photoCredit: #info(file).credit]
#let moos(fill: light) = credit(fill: fill)[#k.photoCredit: Dominik Moos]

// ── Type ────────────────────────────────────────────────────────────────────
#set document(title: "vode – " + k.title + " " + str(data.year), author: "vode e.V.")
#set text(font: "Space Grotesk", size: 9.5pt, fill: ink, lang: lang, hyphenate: true,
  // Strongly avoid single words on a last line and lone lines at column breaks.
  costs: (runt: 400%, widow: 300%, orphan: 300%, hyphenation: 150%))
#set par(justify: false, leading: 0.72em, spacing: 1.15em)

#let kicker(body, fill: accent, size: 7.5pt) = text(size: size, weight: 700, tracking: 0.14em, fill: fill, upper(body))
#let headline(body, size: 34pt, fill: ink) = text(font: display, weight: 700, size: size, fill: fill, hyphenate: false, body)
#let subtitle(body) = block(below: 1.5mm, text(size: 11.5pt, weight: 700, hyphenate: false, body))
#let role(body) = block(below: 2.5mm, text(size: 8pt, weight: 700, fill: accent, hyphenate: false, body))
#let body(list, justify: false) = { set par(justify: justify); for p in list { par(p) } }

// "1 / 3 · Kurztext · 427 Zeichen" – marks the three ensemble text lengths alike.
#let text-label(n, key, fill: ink) = {
  box(fill: accent, radius: 1mm, inset: (x: 2mm, y: 1.3mm), text(size: 8pt, weight: 700, fill: light, str(n) + " / 3"))
  h(2.5mm)
  text(size: 8.5pt, weight: 700, tracking: 0.12em, fill: fill, upper(k.texts.at(key)))
  h(2mm)
  text(size: 8.5pt, fill: fill.transparentize(40%), str(k.at(key + "Chars")) + " " + k.texts.chars)
}

#let footer(tone, start: m) = context {
  let fill = if tone == "dark" { light } else { ink }
  place(bottom + left, dx: start, dy: -9mm, box(width: W - start - m, {
    line(length: 100%, stroke: 0.3mm + fill.transparentize(80%))
    v(-1mm)
    grid(columns: (auto, 1fr, auto), column-gutter: 4mm, align: horizon,
      image(logo(if tone == "dark" { "light" } else { "dark" }), height: 3.6mm),
      text(size: 7pt, fill: fill.transparentize(35%))[#k.printFooter #data.year],
      text(size: 7pt, weight: 700, fill: fill, str(here().page())))
  }))
}

// Every page is laid out explicitly: `tone` decides paper and footer colours.
#let sheet(tone: "light", footer-tone: auto, footer-left: m, bg: none, body) = page(
  paper: "a4", margin: 0pt,
  fill: if tone == "dark" { ink } else { paper },
  background: bg,
  foreground: footer(if footer-tone == auto { tone } else { footer-tone }, start: footer-left),
  body,
)
// Content area with the regular margins, inside a margin-less page.
#let area(top: m, bottom: 26mm, body) = pad(x: m, top: top, bottom: bottom, body)

// ── 1 Cover ─────────────────────────────────────────────────────────────────
#page(paper: "a4", margin: 0pt, fill: ink, {
  let file = "vode-ensemble-hoch_foto-dominik-moos"
  // The group stands in the lower half; the pillars above leave room for type.
  place(cover(press(file), W, H, aspect(file), x: 0.5, y: 0.5))
  place(top, rect(width: 100%, height: 130mm, fill: fade(ink.transparentize(8%), ink.transparentize(100%))))
  place(top + left, dx: m, dy: m, image(logo("light"), width: 34mm))
  place(top + left, dx: m, dy: 50mm, block(width: 150mm, {
    kicker(k.title + " " + str(data.year), size: 9pt)
    v(5mm)
    // One word per line: "berührend. / kraftvoll. / direkt."
    set par(leading: 0.28em)
    headline(k.tagline.split(" ").join(linebreak()), size: 46pt, fill: light)
  }))
  place(bottom, rect(width: 100%, height: 30mm, fill: fade(ink.transparentize(100%), ink.transparentize(25%))))
  place(bottom + left, dx: m, dy: -10mm, text(size: 8.5pt, fill: light)[#data.contact.website #h(3mm) #data.contact.instagram])
  place(bottom + right, dx: -m, dy: -10mm, photo-credit(file))
})

// ── 2 In numbers + short text (dark, full-bleed hall) ─────────────────────
#sheet(tone: "dark",
  bg: {
    cover(pdf-image("halle-hoch"), W, H, 2 / 3, y: 0.3)
    place(bottom, rect(width: 100%, height: 125mm, fill: fade(ink.transparentize(100%), ink.transparentize(5%))))
    place(top, rect(width: 100%, height: 70mm, fill: fade(ink.transparentize(30%), ink.transparentize(100%))))
  },
  {
    place(top + left, dx: m, dy: m, block(width: W - 2 * m, {
      grid(columns: (1fr, 1fr, 1fr), column-gutter: 8mm,
        ..k.numbers.map(((n, label)) => {
          text(top-edge: "cap-height", bottom-edge: "baseline", headline(n, size: 42pt, fill: light))
          v(3.5mm)
          block(width: 100%, text(size: 8pt, fill: light.transparentize(15%), hyphenate: false, label))
        }))
    }))
    place(bottom + left, dx: m, dy: -28mm, block(width: 142mm, {
      text(size: 9pt, fill: light.transparentize(25%), k.texts.series)
      v(3mm)
      text-label(1, "short", fill: light)
      v(4mm)
      set text(fill: light, size: 12pt, hyphenate: false)
      set par(leading: 0.8em)
      body(k.short)
    }))
    place(bottom + right, dx: -m, dy: -20mm, moos())
  },
)

// ── 3 Standard text ─────────────────────────────────────────────────────────
#sheet({
  // Candid close-up bleeding off the right edge.
  place(top + right, cover(pdf-image("lachen"), 70mm, 170mm, 3 / 2, x: 0.3))
  place(top + right, dx: -3mm, dy: 164mm, moos())
  area({
    block(width: 100mm, {
      text-label(2, "standard")
      v(4mm)
      headline("vode", size: 64pt)
    })
    v(4mm)
    block(width: 110mm, { set text(size: 11pt); set par(leading: 0.78em); body(k.standard, justify: true) })
  })
  // Facts in a coloured block at the foot of the page.
  place(bottom + left, dy: -26mm, block(width: W, fill: accent, inset: (x: m, y: 7mm),
    grid(columns: (1fr,) * k.facts.len(), column-gutter: 6mm,
      ..k.facts.map(((term, value)) => {
        text(size: 7pt, weight: 700, tracking: 0.12em, fill: light.transparentize(20%), upper(term))
        v(1.5mm)
        text(size: 8.5pt, weight: 700, fill: light, hyphenate: false, value)
      }))))
})

// ── 4 Long text ─────────────────────────────────────────────────────────────
#sheet(footer-left: 58mm + 12mm, {
  place(top + left, cover(pdf-image("profil"), 58mm, H, 3 / 2, x: 0.45))
  place(top + left, dx: 3mm, dy: 4mm, moos())
  pad(left: 58mm + 12mm, right: m, top: m, bottom: 26mm, {
    text-label(3, "long")
    v(4mm)
    headline(k.texts.long, size: 30pt)
    v(5mm)
    set text(size: 10.5pt)
    set par(leading: 0.78em)
    body(k.long, justify: true)
  })
})

// ── 5 Milestones (hall photo above, timeline on ink) ───────────────────────
#sheet(tone: "dark", {
  place(top, cover(pdf-image("halle-dunkel"), W, 150mm, 3 / 2, x: 0.62, y: 0.4))
  place(top, dy: 70mm, rect(width: 100%, height: 80mm, fill: fade(ink.transparentize(100%), ink)))
  place(top + right, dx: -3mm, dy: 60mm, moos())
  area(top: 128mm, {
    headline(k.highlightsTitle, size: 34pt, fill: light)
    v(8mm)
    set text(fill: light)
    // Column-wise, so the years read top to bottom.
    columns(2, gutter: 10mm, for (year, event) in k.highlights {
      block(below: 4.5mm, breakable: false, grid(columns: (19mm, 1fr), column-gutter: 2mm,
        text(font: display, weight: 700, size: 15pt, fill: accent, top-edge: "cap-height", year),
        text(size: 8.5pt, hyphenate: false, event)))
    })
  })
})

// ── 6 Directors ─────────────────────────────────────────────────────────────
#sheet({
  let file = "vode-leitung-gaertner-herten_foto-dominik-moos"
  // Heads sit in the upper third of the frame; keep them whole.
  place(top, cover(press(file, preview: true), W, 118mm, aspect(file), y: 0.12))
  place(top + right, dx: -3mm, dy: 113mm, photo-credit(file))
  area(top: 118mm + 11mm, {
    headline(k.leadershipTitle, size: 30pt)
    v(5mm)
    grid(columns: (1fr, 1fr), column-gutter: 10mm,
      ..k.leadership.map(person => {
        subtitle(person.name)
        role(person.role)
        text(size: 10pt, body((person.text,)))
      }))
  })
})

// ── 7 Programmes ────────────────────────────────────────────────────────────
#sheet({
  let file = "vode-live_foto-fabian-wohlgemuth"
  place(top, cover(press(file, preview: true), W, 78mm, aspect(file), y: 0.2))
  place(top + right, dx: -3mm, dy: 73mm, photo-credit(file))
  area(top: 78mm + 11mm, {
    grid(columns: (auto, 1fr), column-gutter: 8mm, align: bottom,
      headline(k.programmesTitle, size: 30pt),
      block(below: 1.5mm, text(size: 8.5pt, fill: muted, k.programmesIntro)))
    v(6mm)
    grid(columns: (1fr, 1fr), column-gutter: 10mm, row-gutter: 7mm,
      ..k.programmes.enumerate().map(((i, programme)) => {
        grid(columns: (13mm, 1fr),
          text(font: display, weight: 700, size: 20pt, fill: accent, "0" + str(i + 1)),
          {
            role(programme.note)
            block(below: 2.5mm, text(size: 12.5pt, weight: 700, hyphenate: false, programme.title))
            text(size: 9pt, programme.text)
          })
      }))
  })
})

// ── 8 Academy ───────────────────────────────────────────────────────────────
#sheet({
  place(top, cover(asset("/images/academy/hero-2400.jpg"), W, 140mm, 16 / 9, y: 0.62))
  place(top, dy: 60mm, rect(width: 100%, height: 80mm, fill: fade(ink.transparentize(100%), ink.transparentize(30%))))
  place(top + left, dx: m, dy: 112mm, headline(k.academyTitle, size: 34pt, fill: light))
  place(top + right, dx: -3mm, dy: 135mm, credit(k.stillCredit))
  // The first sentence becomes the pull quote; the rest runs as text.
  let (quote, ..rest) = k.academy.at(0).split(". ")
  area(top: 140mm + 12mm, {
    block(inset: (left: 6mm), stroke: (left: 1.2mm + accent),
      // Break after the dash so the quote reads as two balanced lines.
      headline(quote.split(" – ").join([ –] + linebreak()) + ".", size: 24pt))
    v(7mm)
    set text(size: 10pt)
    grid(columns: (1fr, 1fr), column-gutter: 10mm,
      body((rest.join(". "),)),
      body((k.academy.at(1),)))
    v(1fr)
    text(size: 9pt, weight: 700)[#k.academyLink #h(2mm) #text(fill: accent)[#data.contact.website/academy]]
  })
})

// ── 9 Downloads, videos, contact ────────────────────────────────────────────
// Files live on the website; the PDF points there instead of showing them.
#sheet(footer-tone: "dark", {
  place(top, cover(pdf-image("halle-weiss"), W, 112mm, 3 / 2, y: 0.55))
  place(top + right, dx: -3mm, dy: 4mm, moos(fill: ink))
  let press-url = "https://www." + data.contact.website.trim("www.") + "/presse"
  area(top: 112mm + 11mm, bottom: 106mm, grid(columns: (1.35fr, 1fr), column-gutter: 12mm, {
    kicker(k.downloadsTitle)
    v(3mm)
    text(size: 10pt, k.downloadsText)
    v(4mm)
    link(press-url, headline(data.contact.website.trim("www.") + "/presse", size: 18pt, fill: accent))
  }, {
    kicker(k.videosTitle)
    v(3mm)
    for v in data.videos {
      block(below: 3mm, link("https://youtu.be/" + v.id, text(size: 9pt)[#v.title \ #text(fill: muted)[youtu.be/#v.id]]))
    }
  }))
  // Contact block across the foot of the page.
  // `place(bottom)` would also bottom-align the block's content.
  place(bottom, block(width: W, height: 100mm, fill: ink, inset: (x: m, top: 14mm), align(top + left, {
    set text(fill: light)
    grid(columns: (1.3fr, 1fr), column-gutter: 12mm, {
      headline(k.contactTitle, size: 26pt, fill: light)
      v(4mm)
      text(size: 9.5pt)[#k.contactText]
      v(3mm)
      link("mailto:" + data.contact.email, text(font: display, weight: 700, size: 18pt, fill: accent, data.contact.email))
      v(3mm)
      text(size: 9pt, fill: light.transparentize(25%))[#data.contact.website #h(3mm) Instagram #data.contact.instagram]
    }, {
      v(2mm)
      kicker(k.technicalTitle)
      v(2mm)
      text(size: 8.5pt, fill: light.transparentize(15%), k.technical)
      v(6mm)
      text(size: 7.5pt, fill: light.transparentize(40%))[vode e.V. · Bielefeld]
    })
  })))
})
