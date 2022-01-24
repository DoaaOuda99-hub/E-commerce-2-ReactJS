import React from 'react'

 function Contact() {
    return (
        <>
            <div className='container py-5 my-2'>
                <div className='row'>
                    <h1 className='text-center mb-3'>Have Some Question?</h1>
                    <hr/>
                    <div className='col-md-6 d-flex justify-content-center my-4 py-4'>
                        <img src='assets/images/contact.png' width="300px" height="300px"></img>
                    </div>
                    <div className='col-md-6 my-4 py-4'>
                    <form>
                    <div class="mb-3">
                            <label for="exampleInputFullname" class="form-label">Full name</label>
                            <input type="text" class="form-control" id="exampleInputFullname" placeholder='John Smith'/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='name@example.com'/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputTextArea" class="form-label">Example textarea</label>
                            <textarea rows={5} type="text" class="form-control" id="exampleInputTextArea"></textarea>
                        </div>
                        <button type="submit" class="btn btn-outline-primary">Send message</button>
                        </form>
                        
                        </div>
                </div>
            </div>
        </>
    )
}
export default Contact;