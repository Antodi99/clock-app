import './clock';
import './moreInfoMenu';

// Quotes

const refresh = document.getElementById('refresh');
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');

async function quote() {
  try {
    const res = await fetch('https://api.quotable.io/random', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    quoteText.innerHTML = `"${data.content}"`;
    quoteAuthor.innerHTML = data.author;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('ERROR', err);
  }
}

refresh.addEventListener('click', quote);
quote();
