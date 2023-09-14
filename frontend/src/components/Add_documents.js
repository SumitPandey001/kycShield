import React from 'react'

export default function Add_documents() {
    const [file,setfile] = useState();
    function handleChange(event) {
        setfile(event.target.files)
    }
  return (
    <div>
        <div className="w-3/4 " style={{position : "absolute",top:"20%" , left : "30%"}}>
            <form className=" shadow-2xl bg-white border-2 border-primary shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2/4">
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Upload Documents
                </label>
                <input className="shadow appearance-none border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" multiple onChange={handleChange}/>
                </div>
            </form>
        </div>
    </div>
  )
}
