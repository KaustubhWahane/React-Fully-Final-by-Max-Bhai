import Review from './Review';
 
function App() {
  
 
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" onChange={handleChangeName} value={studentName} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>
 
        <Review feedback={feedback} student={studentName} />
 
        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}