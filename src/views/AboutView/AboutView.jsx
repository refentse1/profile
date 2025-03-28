const AboutView = () => {

    return ( 
        <div style={{height:"50vh"}} className="pt-10 flex-grow grid grid-cols-2">
            {/* Left Section */}
            <div className="col-span-2 ">
                <h1 className="text-center text-2xl text-gray-800 mb-10">About Me...</h1>
                <p className="float-start mb-8">
                    I am a Junior Java Developer with a strong foundation in software development, gained from my Diploma in Business Information Technology. My journey has been focused on building and maintaining efficient software solutions. I am also gaining and improving skills in automating processes, monitoring builds, and deploying code across multiple environments.<br/><br/>
                    I thrive in collaborative settings, utilizing version control systems to facilitate teamwork and ensure seamless project development. My passion for problem-solving and continuous learning drives me to contribute effectively to any project, ensuring the delivery of high-quality solutions<br/>
                </p>
                {/* <h2 className="text-center text-lg text-gray-800 font-medium">Techinical Skills</h2> */}
            </div>
        </div>
     );
}
 
export default AboutView;