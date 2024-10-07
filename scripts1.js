document.addEventListener('DOMContentLoaded', function() {

    const backgrounds = [
        'Images/35.jpg',
      ];
    
      let currentIndex = 0;
    
      function changeBackground() {
        document.body.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % backgrounds.length;
      }
    
      // Change background every 0 seconds
      setInterval(changeBackground, 0);
    });
    
    const books = [
        { title: 'The Kite Runner', description: 'The Kite Runner is a tale of friendship, betrayal, guilt, redemption, and forgiveness in Afghanistan.', pdf: 'Books/The Kite Runner.pdf', image: 'Images/1.jpg' },
        { title: 'A Thousand Splendid Suns', description: 'A Thousand Splendid Suns explores love, suffering, oppression, and womens resilience in Afghanistan.', pdf: 'Books/Thousand.pdf', image: 'Images/2.jpg' },
        { title: 'They Both Die At The End', description: 'They Both Die at the End is about love, life, and death on one final day.', pdf: 'Books/TBDATE.pdf', image: 'Images/6.jpg' },
        { title: 'I want to eat your Pancreas', description: 'I Want to Eat Your Pancreas is about life, death, and unexpected friendship.', pdf: 'Books/Pancreas.pdf', image: 'Images/44.webp' },
        { title: 'Tuesdays With Morrie', description: 'Life lessons shared between teacher and student, love, and mortality.', pdf: 'Books/Morrie.pdf', image: 'Images/5.jpg' },
        { title: 'Before the Coffee gets COld', description: '"Four interconnected stories explore love, regret, and second chances."', pdf: 'Books/BTCGC.pdf', image: 'Images/7.jpg' },
        { title: 'Tales from the Cafe', description: '"Four interconnected stories explore love, regret, and second chances."', pdf: 'Books/TFTC.pdf', image: 'Images/8.jpg' },
        { title: 'Before Your Memory Fades', description: '"Four interconnected stories explore love, regret, and second chances."', pdf: 'Books/BYMF.pdf', image: 'Images/9.jpg' },
        { title: 'Before We Say Goodbye', description: '"Four interconnected stories explore love, regret, and second chances."', pdf: 'Books/BYMF.pdf', image: 'Images/10.jpg' },
        { title: 'A Man Called Ove', description: 'Grumpy old mans life transformed by unexpected friendships and love.', pdf: 'Books/Ove.pdf', image: 'Images/11.jpg' },
        { title: 'Silent VOice', description: 'Bullied deaf girl and former tormentor find redemption and friendship.', pdf: 'Books/Silent Voice.pdf', image: 'Images/16.jpg' },
        { title: 'Solo Levelling', description: 'Weak hunter gains power and battles monsters alone.', pdf: 'Books/Solo.pdf', image: 'Images/18.jpg' },
        { title: 'Lives Not Lived', description: 'Two women, Haree and Naina, struggle with child marriage and abuse.', pdf: 'Books/Lives.pdf', image: 'Images/22.jpg' },
        { title: 'The Seeker of Nothing', description: 'A young womans journey to self-discovery and spiritual enlightenment unfolds.', pdf: 'Books/Nothing.pdf', image: 'Images/13.jpg' },
        { title: 'A Little Life', description: 'Four college friends navigate love, trauma, and identity in New York.', pdf: 'Books/Little Life.pdf', image: 'Images/23.jpg' },
        { title: 'The Silent Patient', description: 'The Silent Patient is about a womans silence, secrets, and shocking revelations.', pdf: 'Books/silent.pdf', image: 'Images/37.jpg' },
        { title: 'Atomic Habits', description: 'Atomic Habits focuses on small habits leading to long-term transformative change.', pdf: 'Books/Habits.pdf', image: 'Images/04.jpg' },
        { title: 'The Subtle Art of Not Giving A Fuck', description: 'The Subtle Art of Not Giving a Fck* emphasizes focusing on what truly matters in life.', pdf: 'Books/Art.pdf', image: 'Images/40.jpg' },
        { title: 'The Alchemist', description: 'The Alchemist is about following dreams, self-discovery, and pursuing personal legends.', pdf: 'Books/Alchemist.pdf', image: 'Images/41.jpg' },
        { title: 'Verity', description: 'Verity is a psychological thriller about lies, manipulation, obsession, and truth.', pdf: 'Books/Verity.pdf', image: 'Images/42.jpg' },
      ];
    const bookGrid = document.getElementById('bookGrid');
    const tooltip = document.getElementById('tooltip');
  
    books.forEach(book => {
      const bookItem = document.createElement('div');
      bookItem.classList.add('book-item');
      bookItem.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <p>${book.title}</p>
      `;
      bookItem.dataset.pdf = book.pdf;
      bookItem.dataset.description = book.description;
  
      // Open PDF on click
      bookItem.addEventListener('click', function() {
        window.open(bookItem.dataset.pdf, '_blank');
      });
  
      // Show tooltip with description on hover
      bookItem.addEventListener('mouseenter', function(e) {
        tooltip.textContent = bookItem.dataset.description;
        tooltip.style.top = `${e.pageY + 10}px`;
        tooltip.style.left = `${e.pageX + 10}px`;
        tooltip.classList.add('visible');
      });
  
      // Hide tooltip when hover ends
      bookItem.addEventListener('mouseleave', function() {
        tooltip.classList.remove('visible');
      });
  
      bookGrid.appendChild(bookItem);
    });
  