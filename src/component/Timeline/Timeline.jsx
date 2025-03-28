import Projects from './projects.json'

const Timeline = () => {

    return (
    <div className="container mx-auto p-6">
      <div className="relative border-l border-b-gray-00">
        {Projects.map((project, index) => (
          <div key={index} className="mb-8 ml-6 border-b pb-5">
            <div className=" absolute w-4 h-4 bg-gray-500 rounded-full -left-2 border-white border animate-bounce duration-1000"></div>
            <p className="text-sm text-gray-500"><span className="font-bold">{project.organisaztion}</span><br/><span className="text-xs">{project.date}</span></p>
            <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
            <p className="text-gray-600"><span className="font-medium">Description: </span> {project.description}</p>
            <p className="text-gray-600"><span className="font-medium">Tech Stack: </span>{project.stack}</p>
            <span className='text-gray-600 font-semibold'>Source Code: <a className="text-gray-600 font-normal" href={project.link}>Click Here</a></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;