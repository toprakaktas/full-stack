export default function Page() {
    async function submitForm(formData) {
        "use server";
        const formFields = {
            email: formData.get("email"),
            message: formData.get("message")
        }
        console.log("formFields", formFields);
        console.log("TODO: Send these form field values to a backend");
    }
    return (
        <main className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold text-center mb-6 text-black">Contact Us!</h1>
            <form className="space-y-4" action={submitForm}>
                <div className="grid grid-cols-2 gap-4 place-content-evenly h-10">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input 
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4 place-content-evenly h-15">
                    <label htmlFor="message"
                    className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" required name="message" rows="4"
                    className="border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"></textarea>
                </div>
                <div className="flex flex-col items-center">
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Send Message
                        </span>
                    </button>
                </div>
            </form>
        </main>
    );
}