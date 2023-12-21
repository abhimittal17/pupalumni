import React from 'react'
import Departments from './Departments'

export default function DepartmentHome() {
  const articles = [
    {
        "departments":
        [
            {"deptname" : "Department Of Dance", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=20"},
            {"deptname" : "Department Of Music", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=55"},
            {"deptname" : "Department Of Gurmat Sangeet", "deptlink" :"http://www.punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=40"},
            {"deptname" : "Department Of Theatre And Television", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=89"},
            {"deptname" : "S. Sobha Singh Department Of Fine Arts", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=35"},
            {"deptname" : "Department Of Gurmat Gyan Online Study Centre", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=40"},
        ],
        "projectid":"1",
        "title": "Faculty Of Arts And Culture",
    },
    {
        "departments":
        [
            // {"deptname" : "Bhai Gurdass Chair", "deptlink" :"abvvvv"},
            {"deptname" : "Bhai Vir Singh Chair", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=158"},
            {"deptname" : "Gurmat Sangeet Chair", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=41"},
            {"deptname" : "Maharishi Valmiki Chair", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=52"},
            {"deptname" : "Maharana Pratap Chair", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=160"},
            {"deptname" : "Shahid Kartar Singh Sarabha Chair", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=154"},
            {"deptname" : "Sri Guru Tegh Bahadur National Integration Chair", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=85"},
            {"deptname" : "Bhagwan Parshuram Chair For Indian Culture and   Literature", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=157"},
        ],
        "projectid":"12",
        "title": "Chairs",
    },
    {
        "departments":
        [
            {"deptname" : "Department Of English", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=31"},
            {"deptname" : "Department Of Hindi", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=42"},
            {"deptname" : "Department Of Punjabi", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=72"},
            {"deptname" : "Department Of Sanskrit And Pali", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=77"},
            {"deptname" : "Department Of Foreign Languages", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=36"},
            {"deptname" : "Department Of Persian, Urdu And Arabic", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=57"},
            {"deptname" : "Department Of Linguistics And Punjabi Lexicography", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=31"},
        ],
        "projectid":"2",
        "title": "Faculty Of Languages",

    },
    {
        "departments":
        [
            {"deptname" : "Department Of Commerce", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=17"},
            {"deptname" : "School Of Management Studies", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=79"},
            {"deptname" : "University School Of Applied Management", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=78"},
            {"deptname" : "Department Of Tourism, Hospitality And Hotel Management", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=90"},
            {"deptname" : "University School of Buisness Studies, Guru Kashi Campus, Talwandi Sabo", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=148"},
        ],
        "projectid":"4",
        "title": "Faculty Of Business Studies",
    },
   
    {
        "departments":
        [
            {"deptname" : "Department Of Economics", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=27"},
            {"deptname" : "Department Of History", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=43"},
            {"deptname" : "Department Of Philosophy", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=60"},
            {"deptname" : "Women's Studies Centre", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=94"},
            {"deptname" : "Department Of Political Science", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=65"},
            {"deptname" : "School Of Social Sciences", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=80"},
            {"deptname" : "Department Of Religious Studies", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=74"},
            {"deptname" : "Department Of Social Work", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=81"},
            {"deptname" : "Department Of Public Administration", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=69"},
            {"deptname" : "Department Of Department Of Psychology", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=68"},
            {"deptname" : "Department Of Defence And Strategic Studies", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=21"},
            {"deptname" : "Department Of Sociology And Social Anthropology", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=82"},
        ],
        "projectid":"3",
        "title": "Faculty Of Social Sciences",
    },
    {
        "departments":
        [
            {"deptname" : "Baba Farid Centre for Sufi Studies", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=152"},
            {"deptname" : "Centre for Diaspora Studies", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=10"},
            {"deptname" : "Centre for Development Economics and Innovation Studies (CDEIS)", "deptlink" :"abvvvv"},
            {"deptname" : "Department Of Sri Guru Granth Sahib Studies", "deptlink" :"abvvvv"},
            {"deptname" : "Department of Punjabi Development Language", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=147"},
            {"deptname" : "Institute of Advanced Studies in Comparative Religion Dr. Balbir Singh Kendra, Dehradun", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=26"},
            {"deptname" : "Punjab Historical Studies", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=70"},
            {"deptname" : "Punjabi Literary Studies", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=73"},
            {"deptname" : "Research Centre for Punjabi Language Technology", "deptlink" :"http://learnpunjabi.org/"},
            {"deptname" : "Prof. Harbans Singh Encylopaedia of Sikhism", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=67"}
        ],
        "projectid":"7",
        "title": "Research Departments",
    },
  
    {
        "departments":
        [
            {"deptname" : "Department Of Law, Punjabi University, Patiala", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=49"},
            {"deptname" : "Punjab School of Law", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=71"}
        ],
        "projectid":"5",
        "title": "Faculty Of Laws",
    },
    {
        "departments":
        [
            {"deptname" : "Department Of Computer Science", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=19"},
            {"deptname" : "Punjabi Computer Help Centre", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=153"},
            {"deptname" : "University Computer Centre (PGDCA Course)", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=93"}
        ],
        "projectid":"8",
        "title": "Faculty Of Computing Sciences",
    },
    {
        "departments":
        [
            {"deptname" : "Department Of Biotechnology", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=5"},
            {"deptname" : "Department Of Botany", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=6"},
            {"deptname" : "Department Of Human Genetics", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=44"},
            {"deptname" : "Department Of Zoology And Environmental Sciences", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=96"}
        ],
        "projectid":"6",
        "title": "Faculty Of Life Sciences",
    },
   
   
    {
        "departments":
        [
            {"deptname" : "Department Of Pharmaceutical Sciences And Drug Research", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=59"},
            {"deptname" : "Department Of Physiotherapy", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=63"},
            {"deptname" : "Department Of Sports Science", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=83"}
        ],
        "projectid":"9",
        "title": "Faculty Of Medicine",
    },
    {
        "departments":
        [
            {"deptname" : "Centre For Advanced Media Studies", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=7"},
            {"deptname" : "Department Of Education And Community Service", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=28"},
            {"deptname" : "Department Of Journalism And Mass Communication", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=48"},
            {"deptname" : "Department Of Library And Information Science", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=50"},
            {"deptname" : "Department Of Physical Education", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=61"}
        ],
        "projectid":"10",
        "title": "Faculty Of Education And Information Science",
    },
    {
        "departments":
        [
            {"deptname" : "Department Of Chemistry", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=13"},
            {"deptname" : "Department Of Forensic Science", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=37"},
            {"deptname" : "Department Of Geography", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=38"},
            {"deptname" : "Department Of Mathematics", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=53"},
            {"deptname" : "Department Of Physics", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=62"},
            {"deptname" : "Department Of Statistics", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=86"},
        ],
        "projectid":"11",
        "title": "Faculty Of Physical Sciences",
    },
    ,
   
    ,
    {
        "departments":
        [
            {"deptname" : "Department Of Civil Engineering", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=14"},
            {"deptname" : "Department Of Computer Engineering", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=18"},
            {"deptname" : "Department Of Electronics & Communication Engineering", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=30"},
            {"deptname" : "Department Of Mechanical Engineering", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=54"},
            {"deptname" : "Yadavindra College of Engineering Department", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=114"}
        ],
        "projectid":"13",
        "title": "Faculty Of Engineering University Campus, Patiala",
    },
    ,
    {
        "departments":
        [
            {"deptname" : "Biological Sciences", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=20"},
            {"deptname" : "Languages", "deptlink" :"abvvvv"},
            {"deptname" : "Mathematical and Computational Sciences", "deptlink" :"abvvvv"},
            {"deptname" : "Physical and Chemical Sciences", "deptlink" :"abvvvv"},
            {"deptname" : "Performing and Visual Arts", "deptlink" :"abvvvv"},
            {"deptname" : "Social Sciences", "deptlink" :"abvvvv"},
        ],
        "projectid":"14",
        "title": "Multi-Disciplinary Five Year Integrated Post-graduate Programmes",
    },
    {
        "departments":
        [
            {"deptname" : "IAS Training Centre", "deptlink" :"http://punjabiuniversity.ac.in/Pages/Department.aspx?dsenc=20"},
            {"deptname" : "LUGC-Human Resource Development Centre (HRDC)", "deptlink" :"abvvvv"}
        ],
        "projectid":"15",
        "title": "Other Allied Departments",
    },
    {
        "departments":
        [
            {"deptname" : "Centre For Restoration Of Ecosystem Of Punjab (CRESP)", "deptlink" :"http://punjabiuniversity.ac.in/Pages/DepartmentPunjabi.aspx?dsenc=188"}
        ],
        "projectid":"16",
        "title": "Research Centre",
    },
    
]
    return (
    <section className=" flex items-center">
        <div className="container  py-4 mx-auto">
            <div className="mb-8">
      <h2 class="text-4xl font-bold leading-tight  text-center ">Punjabi University Departments</h2>

            </div>
            <div className="flex flex-wrap -m-4">
            {articles.map((element)=>(
            <div className="px-2 py-2 sm:w-1/2" key={element.projectid}>
            <Departments title={element.title} departments={
                element.departments.map((item)=>
                <li  key={item.deptname}><a href={item.deptlink}>{item.deptname}</a></li> 
            )}/>
            </div>
            ))}
            </div>
        </div>
    </section>
    )
  
}