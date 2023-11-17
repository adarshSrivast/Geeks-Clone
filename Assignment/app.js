const searchCourse=document.querySelector('input');
const searchContainer=document.querySelector('.search-container');
let courseName=document.querySelector('#course-name');


const allCourses = [
    {
        imageURL : "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-react.jpg", 
        courseURL : "https://geeks.madrasthemes.com/blog/courses/how-to-easily-create-a-website-with-react/", 
        title : "How to easily create a website with React",
        duration : "3 hours 56 minutes",
        level : "Beginner",
        tutor : "Morris Mccoy"
    },
    {
        imageURL : "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-graphql.jpg", 
        courseURL : "https://geeks.madrasthemes.com/blog/courses/graphql-introduction-to-graphql-for-beginners/",
        title : "GraphQL: Introduction to GraphQL for beginners",
        duration : "2 hours 46 minutes",
        level : "Expert",
        tutor : "Ted Hawkins"
    },
    {
        imageURL : "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-angular.jpg", 
        courseURL : "https://geeks.madrasthemes.com/blog/courses/angular-the-complete-guide-for-beginner/", 
        title : "Angular-The complete guide for beginner",
        duration : "1 hour 30 minutes",
        level : "Beginner",
        tutor : "Juanita Bell"
    },
    {
        imageURL : "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-python.jpg", 
        courseURL : "https://geeks.madrasthemes.com/blog/courses/the-python-course-build-web-application/", 
        title : "The Python Course: Build web application",
        duration : "2 hours 30 minutes",
        level : "Intermediate",
        tutor : "Claire Robertson"
    },
    {
        imageURL : "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-javascript.jpg", 
        courseURL : "https://geeks.madrasthemes.com/blog/courses/applying-javascript-and-using-the-console/",
        title : "Applying Javascript and using the console",
        duration : "1 hour 30 minutes",
        level : "Beginner",
        tutor : "Juanita Bell"
    },
    {
        imageURL : "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-wordpress.jpg", 
        courseURL : "https://geeks.madrasthemes.com/blog/courses/wordpress-complete-wordpress-theme-plugin-development/",
        title : "Wordpress: Complete Wordpress theme & plugin",
        duration : "2 hours 30 minutes",
        level : "Intermediate",
        tutor : "Claire Robertson"
    },
    {
        imageURL : "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-css.jpg", 
        courseURL : "https://geeks.madrasthemes.com/blog/courses/css-ultimate-css-course-from-beginner-to-advanced/",
        title : "CSS: Ultimate CSS course from beginner to advanced",
        duration : "1 hour 30 minutes",
        level : "Beginner",
        tutor : "Juanita Bell"
    },
    {
        imageURL : "https://geeks.madrasthemes.com/wp-content/uploads/2021/09/course-gatsby.jpg", 
        courseURL : "https://geeks.madrasthemes.com/blog/courses/gatsby-js-build-blog-with-graphql-and-react/",
        title : "Gatsby JS: Build blog with GraphQL and React",
        duration : "3 hours 56 minutes",
        level : "Beginner",
        tutor : "Morris Mccoy"
    },
]

searchCourse.addEventListener('keydown',(e)=>{
    if(e.code==='Enter' && searchCourse.value){
        document.querySelector('.content-container').style.display = 'none';
        courseName.innerHTML="";
        courseName.append(`"${searchCourse.value}"`);
        searchContainer.style.display = 'block';


        // console.log(document.querySelectorAll('.card').length);

        filterCourses();
        
    }
})


function filterCourses(){
    const cards = allCourses.filter((course)=>{
        if(course.title.toLowerCase().includes(searchCourse.value.toLowerCase())) return course;
    })
    displayCourses(cards);
}

function displayCourses(cards){
    const results = document.querySelector('.result-display');
    if(cards.length===0){
        results.innerText = "Sorry, course not found."
    }else{
        console.log(cards.length);
        results.innerHTML = "";
        cards.forEach((course)=>{
            const courseCard = createCourseCard(course);
            results.append(courseCard);
        })
    }
}

function createCourseCard(course){
    const div = document.createElement('div');
    div.classList.add('card');

    const cardLink = document.createElement('div');
    cardLink.classList.add('card-link');
    div.appendChild(cardLink);

    const link = document.createElement('a');
    link.setAttribute('href',course.courseURL);
    cardLink.appendChild(link);

    const image = document.createElement('img');
    image.setAttribute('src',course.imageURL);
    link.appendChild(image);

    
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    div.appendChild(cardBody);
    
    const title = document.createElement('h4');
    title.innerText = course.title;
    cardBody.appendChild(title);

    const duration = document.createElement('p');
    duration.innerText = course.duration;
    cardBody.appendChild(duration);

    const level = document.createElement('p');
    level.innerText = course.level;
    cardBody.appendChild(level);

    const tutor = document.createElement('p');
    tutor.innerText = course.tutor;
    cardBody.appendChild(tutor);

    return div;
}


// function displayCourses(){

//     const allcourses = document.querySelectorAll('.card');
//     console.log(allcourses.length);

//     const courseTitles = [];
//     allcourses.forEach(course=>{
//         let cTitle = course.querySelector('.card-body h4').innerText;
//         courseTitles.push(cTitle.toLowerCase());
//     })

//     const results = document.querySelector('.result-display');
//     results.innerHTML = "";
//     courseTitles.forEach((title,index)=>{
//         if(title.includes(searchCourse.value.toLowerCase())){
//             results.append(allcourses[index]);
//         }
//     })
// }




