{
  const titleClickHandler = function(event){
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);
    event.preventDefault();
  
    /*  [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
  
    /* [DONE] add class 'active' to the clicked link */

    clickedElement.classList.add('active');

    console.log('clickedElement:', clickedElement);
  
    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts article.active');

    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }
  
    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');

    console.log(articleSelector);
    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);

    console.log(targetArticle);
  
    /* add class 'active' to the correct article */
    targetArticle.classList.add('active');
    
  };
  
  const links = document.querySelectorAll('.titles a');

  console.log(links);
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optAuthorSelector = '.post-author',
    optTagsListSelector = '.tags.list';

  function generateTitleLinks(customSelector = '') {
    /*[DONE] remove contents of titleList*/
    const titleList = document.querySelector(optTitleListSelector);
    function clearTitleList(){
      document.querySelector(optTitleListSelector).innerHTML = '';
        
    }
    clearTitleList();

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);

    let html = '';

    for(let article of articles){

      /* [DONE] get the article id */
      const articleId = article.getAttribute('id');

      /* find the title element */
      
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      /*  [DONE] get the title from the title element */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

      /* create HTML of the link */

      titleList.insertAdjacentHTML('beforeend', linkHTML);

      /* insert link into titleList */
      html = html + linkHTML;
      console.log(html);
    }  
    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');

    console.log(links);
      
    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }
  }
  generateTitleLinks();
  function generateTags(){
    /* [NEW] create a new variable allTags with an empty array */
    let allTags = [];
    /* find all articles */
    const articles = document.querySelectorAll(optArticleTagsSelector);

    
  
    /* START LOOP: for every article: */
    for (let article of articles) {
  
      /* find tags wrapper */
      const titleList = article.querySelector(optArticleTagsSelector);

      console.log(titleList);
  
      /* make html variable with empty string */
      let html = '';
  
      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
      console.log(articleTags);

      /* split tags into array */
      const articleTagsArray = articleTags.split(' ');
      console.log(articleTagsArray);
      /* START LOOP: for each tag */
      for(let tag of articleTagsArray){
        console.log(tag);
        /* generate HTML of the link */
        const linkHTML = '<li><a href="#' + articleTags + '</a></li>';
        /* add generated code to html variable */
        html = html + linkHTML;
        /* [NEW] check if this link is NOT already in allTags */
        if(allTags.indexOf(linkHTML) == -1){
        /* [NEW] add generated code to allTags array */
          allTags.push(linkHTML);
        }
        /* END LOOP: for each tag */
  
        /* insert HTML of all the links into the tags wrapper */
        titleList.innerHTML = html;
      }
      /* END LOOP: for every article: */
      /* [NEW] find list of tags in right column */
      const tagList = document.querySelector(optTagsListSelector);

      /* [NEW] add html from allTags to tagList */
      tagList.innerHTML = allTags.join(' ');
    }
  }
  
  generateTags();  
  function tagClickHandler(event){
    /* prevent default action for this event */
    console.log(event);
    event.preventDefault();
  
    /* make new constant named "clickedElement" and give it the value of "this" */ 
    const clickedElement = this;
    
    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log(href);
  
    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');

    /* find all tag links with class active */
    const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
    console.log(activeTags);
  
    /* START LOOP: for each active tag link */
    for(let activeTag of activeTags){
      /* remove class active */
      activeTag.classList.remove('active');
    /* END LOOP: for each active tag link */
    }
    /* find all tag links with "href" attribute equal to the "href" constant */
    const tagLinks = document.querySelector('a.active[href^="#tag-"]');
    console.log(tagLinks);
    /* START LOOP: for each found tag link */
    for(let tagLink of tagLinks){
  
      /* add class active */
      tagLink.classList.add('active');
    /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
  }
  tagClickHandler();
  
  function addClickListenersToTags(){
    /* find all links to tags */
    const tagLinks = document.querySelectorAll('a[href^="#tag-"]');

    /* START LOOP: for each link */
    for(let tagLink of tagLinks){
      /* add tagClickHandler as event listener for that link */
      tagLink.addEventListener('click', titleClickHandler);
    }
    /* END LOOP: for each link */
  }
  
  addClickListenersToTags();
  function generateAuthors(){
    /* find all authors */
    const authors = document.querySelectorAll(optAuthorSelector);
    /* START LOOP: for every article: */
    for(let author of authors){
    /* find authors wrapper */
      const titleList = author.querySelector(optAuthorSelector);

      console.log(titleList);
      /* make html variable with empty string */
      let html = '';
      /* get tags from data-tauthor attribute */
      const authorTags = document.getAttribute('data-author');
      console.log(authorTags);
      /* generate HTML of the link */
      const linkHTML = '<li><a href="#' + authorTags + '</a></li>';
      /* add generated code to html variable */
      html = html + linkHTML;
      /* insert HTML of all the links into the tags wrapper */
      titleList.innerHTML = html;
    }
    /* END LOOP: for every author: */

  }
  generateAuthors();
  function addClickListenersToAuthors(){
    /* find all links to authors */
    const authorsLinks = document.querySelectorAll('a[href^="#author-"]');
    /* START LOOP: for each link */
    for(let authorLink of authorsLinks){
      /* add tagClickHandler as event listener for that link */
      authorLink.addEventListener('click', titleClickHandler);
    }
    /* END LOOP: for each link */
  }
  addClickListenersToAuthors();
  function authorClickHandler(event){
    /* prevent default action for this event */
    console.log(event);
    event.preventDefault();
   
    /* make new constant named "clickedElement" and give it the value of "this" */ 
    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log(href);
    /* make a new constant "author" and extract author from the "href" constant */
    const author = href.replace('#author-', '');
    console.log(author);
    /* find all author links with class active */
    const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');
    console.log(activeAuthors);
    /* START LOOP: for each active author link */
    for(let activeAuthor of activeAuthors){
      /* remove class active */
      activeAuthor.classList.remove('active');
      /* END LOOP: for each active author link */
    }
    /* find all author links with "href" attribute equal to the "href" constant */
    const authorLinks = document.querySelectorAll('a.active[href^="#author-"]');
    console.log(authorLinks);
    /* START LOOP: for each found author link */
    for(let authorLink of authorLinks){
  
      /* add class active */
      authorLink.classList.add('active');
      /* END LOOP: for each found author link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-author="' + author + '"]');
  }
  authorClickHandler();
}
