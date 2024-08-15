import longestCount from './assets/longest_count_code.jpg'
import sorting from './assets/sorting.jpg'
import tic_tac_toe from './assets/tic_tac_toe.jpg'

function Project() {
    return(
        <>
            <div className="container">
              <div className="projectContainer">
                    
                    <h2>Project</h2>
                    <div className="top_project_row">
                        <div className="project project1">
                            <a href="https://github.com/Joy-of-Coding/2-using-stacks-queues-johncaldwell4/blob/master/count_longest.py">
                                <img src={longestCount} width={250} height={250} />
                            </a>
                        </div>
                        <div className="project project2">
                            <a href="https://github.com/Joy-of-Coding/4-sorting-and-searching-johncaldwell4">
                                <img src={sorting} width={250} height={250} />
                            </a>                            
                        </div>
                        <div className="project project3">
                        <a href="https://github.com/Joy-of-Coding/3-arrays-and-maps-johncaldwell4">
                                <img src={tic_tac_toe} width={250} height={250} />
                            </a>
                        </div>
                    </div>
                    <div className="middle_project_row">
                        <div className="project project4"></div>
                        <div className="project project5"></div>
                        <div className="project project6"></div>
                    </div>
                    {/* <div className="bottom_project_row">
                        <div className="project project7"></div>
                        <div className="project project8"></div>
                        <div className="project project9"></div>
                    </div> */}

                    
                    
              </div>  
            </div>

        </>
)};

export default Project