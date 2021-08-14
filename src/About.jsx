import Logo from "./Logo";

let About = () => {
  return (
    <>
    <Logo/>
    <div className="Main-Content slide-left">
      <h1 className="heading">Let me Introduce myself </h1>
      <p className="About-paragraph">
        Myself Rishabh Jain ,currently studying computer science at Guru Gobind
        Singh Indraprastha University, New Delhi, India. <br></br>
        You can find me playing around the web and sometimes , you can catch me
        solving coding problems on different platforms such as{" "}
        <a href="https://www.codechef.com/users/rishabh_0906" target="_blank">
          codechef
        </a>{" "}
        ,{" "}
        <a href="https://codeforces.com/profile/rishabhj945" target="_blank">
          codeforces
        </a>{" "}
        ,{" "}
        <a href="https://leetcode.com/rishabh_0906/" target="_blank">
          leetcode
        </a>{" "}
        and many more . I like to explore new technologies and always try to
        find something from nothing . I started competitive programming in month
        of November-December , 2020 and i recently started doing web development.
        Around 1 month of learning React ,HTML ,CSS and Javascript .<br></br> I created
        many projects to enhance my skills and always looking for opportunity to
        switch from development to production mode. 
        <br></br> <br></br>
        I hope you like this website!! {"\u{1f604}"}
      </p>
    </div>
    </>
  );
};

export default About;
