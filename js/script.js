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
    optArticleTagsSelector = '.post-tags .list';

  function generateTitleLinks() {
    /*[DONE] remove contents of titleList*/
    const titleList = document.querySelector(optTitleListSelector);
    function clearTitleList(){
      document.querySelector(optTitleListSelector).innerHTML = '';
        
    }
    clearTitleList();

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector);

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
    const articleTags = article.getAttribute('data-tags')
    console.log(articleTags);

      /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray)
      /* START LOOP: for each tag */
      for(let tag of articleTagsArray){
        /* generate HTML of the link */
  
        /* add generated code to html variable */
      }
      /* END LOOP: for each tag */
  
      /* insert HTML of all the links into the tags wrapper */
  }
    /* END LOOP: for every article: */
  }
  
  generateTags();
}