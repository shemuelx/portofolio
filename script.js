const slider_content = [
  {
    src: "assets/tribute-page.png",
    alt: "Test photo",
    id: "image",
    fetchpriority: "high",
    url: "https://github.com/shemuelx/tribute-page",
    href: "https://shemuelx.github.io/tribute-page/",
  },
  {
    src: "assets/treemap-data-visualization.png",
    alt: "Test photo",
    id: "image",
    fetchpriority: "high",
    url: "https://github.com/shemuelx/treemap-diagram",
    href: "https://freecodecamp-treemap-diagram.netlify.app/",
  },
  {
    src: "assets/exercise-tracker.png",
    alt: "Test photo",
    id: "image",
    fetchpriority: "high",
    url: "https://github.com/shemuelx/exercise-tracker",
    href: "https://github.com/shemuelx/exercise-tracker",
  },
  {
    src: "assets/drum-machine.png",
    alt: "Test photo",
    id: "image",
    fetchpriority: "low",
    url: "https://github.com/shemuelx/drum-machine",
    href: "https://shemuelx.github.io/drum-machine/",
  },
  {
    src: "assets/fufu.png",
    alt: "Test photo",
    id: "image",
    fetchpriority: "low",
    url: "https://github.com/shemuelx/fufu",
    href: "https://shemuelx.github.io/fufu/",
  },
  {
    src: "assets/rpa-fipe-table.png",
    alt: "Test photo",
    id: "image",
    fetchpriority: "low",
    url: "https://drive.google.com/file/d/1jNEcq4SN1TVz0J-7TNt9HKi1qx9hTPrj/view?usp=drive_link",
    href: "https://drive.google.com/file/d/1jNEcq4SN1TVz0J-7TNt9HKi1qx9hTPrj/view?usp=drive_link",
  },
];

const blockquote_content = [
  {
    author: "Natália Públio",
    quote:
      "Precisamos entender o conceito de interseccionalidade porque não podemos deixar ninguém para trás. Por exemplo, no caso da equidade de gênero, queremos empregabilidade para todas as mulheres: as negras, com ou sem filhos, as mulheres com deficiência, as mulheres LBTQIA+, etc.",
    cite: {
      href: "https://blog.totidiversidade.com.br/interseccionalidade",
      text: "toti Diversidade",
    },
  },
  {
    author: "Malte Ubl",
    quote:
      "The top N developers from a diverse hiring pool are better than the top N developers from a bro pool. It’s Math™️",
    cite: {
      href: "https://www.industrialempathy.com/posts/malte-handbook#values%2C-principles%2C-beliefs",
      text: "Industrial Empathy",
    },
  },
  {
    author: "Nahia Orduña",
    quote:
      "My point is, people with different backgrounds come up with different ideas and ways to solve problems. When we work together, we can join forces, make new discoveries, and develop solutions we would have never thought of on our own.",
    cite: {
      href: "https://hbr.org/2021/10/diversity-in-tech-is-a-problem-heres-how-to-empower-yourself",
      text: "Diversity in Tech is a Problem. Here’s How to Empower Yourself.",
    },
  },
  {
    author: "Jeffrey McKinney",
    quote:
      "Only 8% out of 9.2 million technology workers and 3% of executives in the U.S. tech industry were cited as Black.",
    cite: {
      href: "https://www.blackenterprise.com/author-strategies-tech-black-talent-gap",
      text: "Black Enterprise",
    },
  },
];

const create_img = function ({ src, alt, id, fetchpriority = "low" }) {
  const image = document.createElement("img");

  image.src = src;
  image.alt = alt;
  image.id = id;
  image.fetchPriority = fetchpriority;

  return image;
};

const create_quote = function ({ author, quote, cite }) {
  const blockquote = document.createElement("blockquote");
  const footer = document.createElement("footer");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");
  const cite_tag = document.createElement("cite");
  const link = document.createElement("a");

  h4.innerText = author;

  link.href = cite.href;
  link.innerText = cite.text;

  cite_tag.appendChild(link);
  p.innerText = quote;

  footer.appendChild(h4);
  footer.appendChild(p);
  footer.appendChild(cite_tag);

  blockquote.cite = cite.href;
  blockquote.appendChild(p);
  blockquote.appendChild(footer);

  return blockquote;
};

/**
 *
 * @function
 * @returns {void}
 */
const load_images = function () {
  const [ul] = document.getElementsByClassName("slider");
  const fragment = document.createDocumentFragment();

  slider_content.forEach((slide) => {
    const li = document.createElement("li");
    li.classList.add("slide");
    const img = create_img(slide);

    li.onclick = function () {
      window.open(slide.href, "_blank");
    };
    li.appendChild(img);
    fragment.append(li);
  });

  ul.appendChild(fragment);
};

/**
 *
 * @function
 * @returns {void}
 */
const load_blockquotes = function () {
  const [ul] = document.getElementsByClassName("blockquote");
  const fragment = document.createDocumentFragment();

  blockquote_content.forEach((blockquote) => {
    const li = document.createElement("li");
    const quote = create_quote(blockquote);

    li.appendChild(quote);
    fragment.append(li);
  });

  ul.appendChild(fragment);
};

document.addEventListener("DOMContentLoaded", load_images);
document.addEventListener("DOMContentLoaded", load_blockquotes);
